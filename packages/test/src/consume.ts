
import kafka from './kafka'
import grpc from 'grpc'
import { AckRq, AckRs, ConsNAckRq, ConsRs, ProdRq, ProdRs } from './proto/kafkapixy_pb'


const consume = async (): Promise<void> => {
  return await new Promise((resolve, reject) => {
    console.log('consume()::start')
    const client = kafka('localhost:19091')

    const consumerRequest: ConsNAckRq = new ConsNAckRq()
    consumerRequest.setGroup('test')
    consumerRequest.setTopic('foo')
    consumerRequest.setNoAck(true)
    consumerRequest.setAutoAck(false)

    client.consumeNAck(consumerRequest, 
      (error: grpc.ServiceError | null, response: ConsRs) => {
        if (error) {
          if (error.code === 5){
            console.log('consume() - ignoring long polling timeout')
            resolve()
            return
          }
          console.log(`consume() - consumeNAck_error=${JSON.stringify(error, null, 2)}`)
          console.log('consume() - unknown error in consumeNAckk.callback, rejecting')
          reject(error)
          return
        }
        console.log(`consume() - consumeNAck_response=${JSON.stringify(response, null, 2)}`)
        console.log(`consume() - consumeNAck_message=${Buffer.from(response.getMessage_asB64(),'base64').toString('ascii')}`)
        console.log(`consume() - consumeNAck_message.offset=${response.getOffset()}`)

        const consumerAckRequest: AckRq = new AckRq()
        consumerAckRequest.setGroup('test')
        consumerAckRequest.setTopic('foo')
        consumerAckRequest.setPartition(response.getPartition())
        consumerAckRequest.setOffset(response.getOffset())
      
        client.ack(consumerAckRequest, 
          (error: grpc.ServiceError | null, response: AckRs) => {
            if (error) {
              console.log(`consume() - consumerAckRequest_error=${JSON.stringify(error, null, 2)}`)
              console.log('consume() - unknown error in consumerAckRequest.callback, rejecting')
              reject(error)
              return
            }
            console.log(`consume() - consumerAckRequest_response=${JSON.stringify(response, null, 2)}`)
            resolve()
            return
          })
      })

    console.log('consume()::end')
  })
}

process.on ('SIGINT',() => {
  console.log('Existing due to Ctrl+C!')
  process.exit(1)
});

(async function() {

  let count = 0
  while(true) {
    console.log(`Consume-#[${count}]`)
    await consume()
    count++
  }
})()
