declare module '*/rate_grpc_pb.js' {
  import { ServiceDefinition } from '@grpc/grpc-js';
  export const RateService: ServiceDefinition;
}

declare module '*/rate_pb.js' {
  export class RateRequest {
    getCurrencyPair(): string;
    setCurrencyPair(value: string): void;
  }

  export class RateResponse {
    getRate(): number;
    setRate(value: number): void;
  }
}
