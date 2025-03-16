// GENERATED CODE -- DO NOT EDIT!

'use strict';
const grpc = require('grpc');
const src_proto_rate_pb = require('../../src/proto/rate_pb.js');

function serialize_rate_RateRequest(arg) {
  if (!(arg instanceof src_proto_rate_pb.RateRequest)) {
    throw new Error('Expected argument of type rate.RateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rate_RateRequest(buffer_arg) {
  return src_proto_rate_pb.RateRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

function serialize_rate_RateResponse(arg) {
  if (!(arg instanceof src_proto_rate_pb.RateResponse)) {
    throw new Error('Expected argument of type rate.RateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rate_RateResponse(buffer_arg) {
  return src_proto_rate_pb.RateResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

const RateServiceService = (exports.RateServiceService = {
  getRate: {
    path: '/rate.RateService/GetRate',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_rate_pb.RateRequest,
    responseType: src_proto_rate_pb.RateResponse,
    requestSerialize: serialize_rate_RateRequest,
    requestDeserialize: deserialize_rate_RateRequest,
    responseSerialize: serialize_rate_RateResponse,
    responseDeserialize: deserialize_rate_RateResponse,
  },
});

exports.RateServiceClient = grpc.makeGenericClientConstructor(
  RateServiceService,
  'RateService'
);
