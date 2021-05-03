// package: 
// file: kafkapixy.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as kafkapixy_pb from "./kafkapixy_pb";

interface IKafkaPixyService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    produce: IKafkaPixyService_IProduce;
    consumeNAck: IKafkaPixyService_IConsumeNAck;
    ack: IKafkaPixyService_IAck;
    getOffsets: IKafkaPixyService_IGetOffsets;
    setOffsets: IKafkaPixyService_ISetOffsets;
    listTopics: IKafkaPixyService_IListTopics;
    listConsumers: IKafkaPixyService_IListConsumers;
    getTopicMetadata: IKafkaPixyService_IGetTopicMetadata;
}

interface IKafkaPixyService_IProduce extends grpc.MethodDefinition<kafkapixy_pb.ProdRq, kafkapixy_pb.ProdRs> {
    path: "/KafkaPixy/Produce";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafkapixy_pb.ProdRq>;
    requestDeserialize: grpc.deserialize<kafkapixy_pb.ProdRq>;
    responseSerialize: grpc.serialize<kafkapixy_pb.ProdRs>;
    responseDeserialize: grpc.deserialize<kafkapixy_pb.ProdRs>;
}
interface IKafkaPixyService_IConsumeNAck extends grpc.MethodDefinition<kafkapixy_pb.ConsNAckRq, kafkapixy_pb.ConsRs> {
    path: "/KafkaPixy/ConsumeNAck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafkapixy_pb.ConsNAckRq>;
    requestDeserialize: grpc.deserialize<kafkapixy_pb.ConsNAckRq>;
    responseSerialize: grpc.serialize<kafkapixy_pb.ConsRs>;
    responseDeserialize: grpc.deserialize<kafkapixy_pb.ConsRs>;
}
interface IKafkaPixyService_IAck extends grpc.MethodDefinition<kafkapixy_pb.AckRq, kafkapixy_pb.AckRs> {
    path: "/KafkaPixy/Ack";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafkapixy_pb.AckRq>;
    requestDeserialize: grpc.deserialize<kafkapixy_pb.AckRq>;
    responseSerialize: grpc.serialize<kafkapixy_pb.AckRs>;
    responseDeserialize: grpc.deserialize<kafkapixy_pb.AckRs>;
}
interface IKafkaPixyService_IGetOffsets extends grpc.MethodDefinition<kafkapixy_pb.GetOffsetsRq, kafkapixy_pb.GetOffsetsRs> {
    path: "/KafkaPixy/GetOffsets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafkapixy_pb.GetOffsetsRq>;
    requestDeserialize: grpc.deserialize<kafkapixy_pb.GetOffsetsRq>;
    responseSerialize: grpc.serialize<kafkapixy_pb.GetOffsetsRs>;
    responseDeserialize: grpc.deserialize<kafkapixy_pb.GetOffsetsRs>;
}
interface IKafkaPixyService_ISetOffsets extends grpc.MethodDefinition<kafkapixy_pb.SetOffsetsRq, kafkapixy_pb.SetOffsetsRs> {
    path: "/KafkaPixy/SetOffsets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafkapixy_pb.SetOffsetsRq>;
    requestDeserialize: grpc.deserialize<kafkapixy_pb.SetOffsetsRq>;
    responseSerialize: grpc.serialize<kafkapixy_pb.SetOffsetsRs>;
    responseDeserialize: grpc.deserialize<kafkapixy_pb.SetOffsetsRs>;
}
interface IKafkaPixyService_IListTopics extends grpc.MethodDefinition<kafkapixy_pb.ListTopicRq, kafkapixy_pb.ListTopicRs> {
    path: "/KafkaPixy/ListTopics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafkapixy_pb.ListTopicRq>;
    requestDeserialize: grpc.deserialize<kafkapixy_pb.ListTopicRq>;
    responseSerialize: grpc.serialize<kafkapixy_pb.ListTopicRs>;
    responseDeserialize: grpc.deserialize<kafkapixy_pb.ListTopicRs>;
}
interface IKafkaPixyService_IListConsumers extends grpc.MethodDefinition<kafkapixy_pb.ListConsumersRq, kafkapixy_pb.ListConsumersRs> {
    path: "/KafkaPixy/ListConsumers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafkapixy_pb.ListConsumersRq>;
    requestDeserialize: grpc.deserialize<kafkapixy_pb.ListConsumersRq>;
    responseSerialize: grpc.serialize<kafkapixy_pb.ListConsumersRs>;
    responseDeserialize: grpc.deserialize<kafkapixy_pb.ListConsumersRs>;
}
interface IKafkaPixyService_IGetTopicMetadata extends grpc.MethodDefinition<kafkapixy_pb.GetTopicMetadataRq, kafkapixy_pb.GetTopicMetadataRs> {
    path: "/KafkaPixy/GetTopicMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kafkapixy_pb.GetTopicMetadataRq>;
    requestDeserialize: grpc.deserialize<kafkapixy_pb.GetTopicMetadataRq>;
    responseSerialize: grpc.serialize<kafkapixy_pb.GetTopicMetadataRs>;
    responseDeserialize: grpc.deserialize<kafkapixy_pb.GetTopicMetadataRs>;
}

export const KafkaPixyService: IKafkaPixyService;

export interface IKafkaPixyServer {
    produce: grpc.handleUnaryCall<kafkapixy_pb.ProdRq, kafkapixy_pb.ProdRs>;
    consumeNAck: grpc.handleUnaryCall<kafkapixy_pb.ConsNAckRq, kafkapixy_pb.ConsRs>;
    ack: grpc.handleUnaryCall<kafkapixy_pb.AckRq, kafkapixy_pb.AckRs>;
    getOffsets: grpc.handleUnaryCall<kafkapixy_pb.GetOffsetsRq, kafkapixy_pb.GetOffsetsRs>;
    setOffsets: grpc.handleUnaryCall<kafkapixy_pb.SetOffsetsRq, kafkapixy_pb.SetOffsetsRs>;
    listTopics: grpc.handleUnaryCall<kafkapixy_pb.ListTopicRq, kafkapixy_pb.ListTopicRs>;
    listConsumers: grpc.handleUnaryCall<kafkapixy_pb.ListConsumersRq, kafkapixy_pb.ListConsumersRs>;
    getTopicMetadata: grpc.handleUnaryCall<kafkapixy_pb.GetTopicMetadataRq, kafkapixy_pb.GetTopicMetadataRs>;
}

export interface IKafkaPixyClient {
    produce(request: kafkapixy_pb.ProdRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ProdRs) => void): grpc.ClientUnaryCall;
    produce(request: kafkapixy_pb.ProdRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ProdRs) => void): grpc.ClientUnaryCall;
    produce(request: kafkapixy_pb.ProdRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ProdRs) => void): grpc.ClientUnaryCall;
    consumeNAck(request: kafkapixy_pb.ConsNAckRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ConsRs) => void): grpc.ClientUnaryCall;
    consumeNAck(request: kafkapixy_pb.ConsNAckRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ConsRs) => void): grpc.ClientUnaryCall;
    consumeNAck(request: kafkapixy_pb.ConsNAckRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ConsRs) => void): grpc.ClientUnaryCall;
    ack(request: kafkapixy_pb.AckRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.AckRs) => void): grpc.ClientUnaryCall;
    ack(request: kafkapixy_pb.AckRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.AckRs) => void): grpc.ClientUnaryCall;
    ack(request: kafkapixy_pb.AckRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.AckRs) => void): grpc.ClientUnaryCall;
    getOffsets(request: kafkapixy_pb.GetOffsetsRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    getOffsets(request: kafkapixy_pb.GetOffsetsRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    getOffsets(request: kafkapixy_pb.GetOffsetsRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    setOffsets(request: kafkapixy_pb.SetOffsetsRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    setOffsets(request: kafkapixy_pb.SetOffsetsRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    setOffsets(request: kafkapixy_pb.SetOffsetsRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    listTopics(request: kafkapixy_pb.ListTopicRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    listTopics(request: kafkapixy_pb.ListTopicRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    listTopics(request: kafkapixy_pb.ListTopicRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    listConsumers(request: kafkapixy_pb.ListConsumersRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    listConsumers(request: kafkapixy_pb.ListConsumersRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    listConsumers(request: kafkapixy_pb.ListConsumersRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    getTopicMetadata(request: kafkapixy_pb.GetTopicMetadataRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
    getTopicMetadata(request: kafkapixy_pb.GetTopicMetadataRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
    getTopicMetadata(request: kafkapixy_pb.GetTopicMetadataRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
}

export class KafkaPixyClient extends grpc.Client implements IKafkaPixyClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public produce(request: kafkapixy_pb.ProdRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ProdRs) => void): grpc.ClientUnaryCall;
    public produce(request: kafkapixy_pb.ProdRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ProdRs) => void): grpc.ClientUnaryCall;
    public produce(request: kafkapixy_pb.ProdRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ProdRs) => void): grpc.ClientUnaryCall;
    public consumeNAck(request: kafkapixy_pb.ConsNAckRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ConsRs) => void): grpc.ClientUnaryCall;
    public consumeNAck(request: kafkapixy_pb.ConsNAckRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ConsRs) => void): grpc.ClientUnaryCall;
    public consumeNAck(request: kafkapixy_pb.ConsNAckRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ConsRs) => void): grpc.ClientUnaryCall;
    public ack(request: kafkapixy_pb.AckRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.AckRs) => void): grpc.ClientUnaryCall;
    public ack(request: kafkapixy_pb.AckRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.AckRs) => void): grpc.ClientUnaryCall;
    public ack(request: kafkapixy_pb.AckRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.AckRs) => void): grpc.ClientUnaryCall;
    public getOffsets(request: kafkapixy_pb.GetOffsetsRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    public getOffsets(request: kafkapixy_pb.GetOffsetsRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    public getOffsets(request: kafkapixy_pb.GetOffsetsRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetOffsetsRs) => void): grpc.ClientUnaryCall;
    public setOffsets(request: kafkapixy_pb.SetOffsetsRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    public setOffsets(request: kafkapixy_pb.SetOffsetsRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    public setOffsets(request: kafkapixy_pb.SetOffsetsRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.SetOffsetsRs) => void): grpc.ClientUnaryCall;
    public listTopics(request: kafkapixy_pb.ListTopicRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    public listTopics(request: kafkapixy_pb.ListTopicRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    public listTopics(request: kafkapixy_pb.ListTopicRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListTopicRs) => void): grpc.ClientUnaryCall;
    public listConsumers(request: kafkapixy_pb.ListConsumersRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    public listConsumers(request: kafkapixy_pb.ListConsumersRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    public listConsumers(request: kafkapixy_pb.ListConsumersRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.ListConsumersRs) => void): grpc.ClientUnaryCall;
    public getTopicMetadata(request: kafkapixy_pb.GetTopicMetadataRq, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
    public getTopicMetadata(request: kafkapixy_pb.GetTopicMetadataRq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
    public getTopicMetadata(request: kafkapixy_pb.GetTopicMetadataRq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kafkapixy_pb.GetTopicMetadataRs) => void): grpc.ClientUnaryCall;
}
