
import kafka from './kafka'
import grpc from 'grpc'
import { AckRq, AckRs, ConsNAckRq, ConsRs, ProdRq, ProdRs } from './proto/kafkapixy_pb'


const main = async (): Promise<void> => {
  console.log('main()::start')

  const message = `hello world-${Math.random()}`
  console.log(`message=${message}`)

  const client = kafka('localhost:19091')


  const producerRequest: ProdRq = new ProdRq()
  producerRequest.setTopic('foo')
  producerRequest.setKeyValue('test')
  // producerRequest.setMessage('hello world')
  producerRequest.setMessage(Buffer.from(message))
  producerRequest.setAsyncMode(false)

  console.log('main()::produce')
  await client.produce(producerRequest, 
    (error: grpc.ServiceError | null, response: ProdRs) => {
      console.log(`produce_error=${JSON.stringify(error, null, 2)}`)
      console.log(`produce_response=${JSON.stringify(response, null, 2)}`)
      console.log(`produce_response.offset=${response.getOffset()}`)
    })

  // const consumerRequest: ConsNAckRq = new ConsNAckRq()
  // consumerRequest.setGroup('test')
  // consumerRequest.setTopic('foo')
  // //consumerRequest.setNoAck(true)
  // console.log('main()::consume')
  // await client.consumeNAck(consumerRequest, 
  //   (error: grpc.ServiceError | null, response: ConsRs) => {
  //     console.log(`error=${JSON.stringify(error, null, 2)}`)
  //     console.log(`response=${JSON.stringify(response, null, 2)}`)
  //     // const buff = Buffer.from(response.getMessage_asB64())
  //     // console.log(`message=${response.getMessage()}`)
  //     // console.log(`message=${response.getMessage_asB64()}`)
  //     console.log(`message=${Buffer.from(response.getMessage_asB64(),'base64').toString('ascii')}`)
  //     // console.log(`message=${buff.toString()}`)
  //   })
  
  const consumerRequest: ConsNAckRq = new ConsNAckRq()
  consumerRequest.setGroup('test')
  consumerRequest.setTopic('foo')
  consumerRequest.setNoAck(true)
  consumerRequest.setAutoAck(false)
  console.log('main()::consume')
  await client.consumeNAck(consumerRequest, 
    async (error: grpc.ServiceError | null, response: ConsRs) => {
      console.log(`consumeNAck_error=${JSON.stringify(error, null, 2)}`)
      console.log(`consumeNAck_response=${JSON.stringify(response, null, 2)}`)
      // const buff = Buffer.from(response.getMessage_asB64())
      console.log(`message=${response.getMessage()}`)
      console.log(`message=${response.getMessage_asB64()}`)
      // console.log(`consumeNAck_message=${Buffer.from(response.getMessage_asB64(),'base64').toString('ascii')}`)
      console.log(`consumeNAck_message=${Buffer.from(response.getMessage()).toString('ascii')}`)
      console.log(`consumeNAck_message.offset=${response.getOffset()}`)
      // console.log(`message=${buff.toString()}`)
      const consumerAckRequest: AckRq = new AckRq()
      consumerAckRequest.setGroup('test')
      consumerAckRequest.setTopic('foo')
      consumerAckRequest.setPartition(response.getPartition())
      consumerAckRequest.setOffset(response.getOffset())
    
      await client.ack(consumerAckRequest, 
        (error: grpc.ServiceError | null, response: AckRs) => {
          console.log(`consumerAckRequest_error=${JSON.stringify(error, null, 2)}`)
          console.log(`consumerAckRequest_response=${JSON.stringify(response, null, 2)}`)
        })
    })

  console.log('main()::end')
}


console.log('Starting main()...')
main()
