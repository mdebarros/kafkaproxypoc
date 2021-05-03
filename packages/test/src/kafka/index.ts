import grpc from 'grpc'
import services from '../proto/kafkapixy_grpc_pb'
export default (address: string): services.IKafkaPixyClient=> {
  return new services.KafkaPixyClient(address, grpc.credentials.createInsecure())
}
