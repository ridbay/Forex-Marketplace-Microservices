import * as grpc from '@grpc/grpc-js';
import { RateService } from '../proto/src/proto/rate_grpc_pb.js';
import { RateRequest, RateResponse } from '../proto/src/proto/rate_pb.js';
import { fetchForexRate } from './fetchForexRate';

const server = new grpc.Server();

server.addService(RateService, {
  GetRate: async (
    call: grpc.ServerUnaryCall<RateRequest, RateResponse>,
    callback: grpc.sendUnaryData<RateResponse>
  ) => {
    try {
      const request = call.request;
      const currencyPair = request.getCurrencyPair();
      const rate = await fetchForexRate(currencyPair);

      const response = new RateResponse();
      response.setRate(rate);

      callback(null, response);
    } catch (error) {
      callback(error as Error, null);
    }
  },
});

server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error('Failed to start gRPC server:', err);
      return;
    }
    console.log(`Rate Service gRPC Server Running on Port ${port}`);
    server.start();
  }
);
