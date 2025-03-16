// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var rate_pb = require('./rate_pb.js');

function serialize_rate_RateRequest(arg) {
  if (!(arg instanceof rate_pb.RateRequest)) {
    throw new Error('Expected argument of type rate.RateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rate_RateRequest(buffer_arg) {
  return rate_pb.RateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rate_RateResponse(arg) {
  if (!(arg instanceof rate_pb.RateResponse)) {
    throw new Error('Expected argument of type rate.RateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rate_RateResponse(buffer_arg) {
  return rate_pb.RateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RateServiceService = exports.RateServiceService = {
  getRate: {
    path: '/rate.RateService/GetRate',
    requestStream: false,
    responseStream: false,
    requestType: rate_pb.RateRequest,
    responseType: rate_pb.RateResponse,
    requestSerialize: serialize_rate_RateRequest,
    requestDeserialize: deserialize_rate_RateRequest,
    responseSerialize: serialize_rate_RateResponse,
    responseDeserialize: deserialize_rate_RateResponse,
  },
};

exports.RateServiceClient = grpc.makeGenericClientConstructor(RateServiceService, 'RateService');
