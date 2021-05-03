
import kafka from './kafka'
import grpc from 'grpc'
import { AckRq, AckRs, ConsNAckRq, ConsRs, ProdRq, ProdRs } from './proto/kafkapixy_pb'


const produce = async (): Promise<void> => {
  return await new Promise((resolve, reject) => {
    console.log('produce()::start')
    const message = `hello world-${Math.random()}`
    console.log(`produce() - message=${message}`)
    const client = kafka('localhost:19091')
  
    const producerRequest: ProdRq = new ProdRq()
    producerRequest.setTopic('foo')
    producerRequest.setKeyValue('test')
    // producerRequest.setMessage('hello world')
    producerRequest.setMessage(Buffer.from(message))
    producerRequest.setAsyncMode(false)
    client.produce(producerRequest, 
      (error: grpc.ServiceError | null, response: ProdRs) => {
        if (error) {
          console.log(`produce() - produce_error=${JSON.stringify(error, null, 2)}`)
          reject(error)
        }
        console.log(`produce() - produce_response=${JSON.stringify(response, null, 2)}`)
        console.log(`produce() - produce_response.offset=${response.getOffset()}`)
        resolve()
      })
    console.log('produce()::end')
  })
}

(async function() {
  console.log('Running Producer')
  await produce()
})()
