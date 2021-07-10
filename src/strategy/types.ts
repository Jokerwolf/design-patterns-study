export type AlgorithmType = 'A' | 'B' | 'C';

export type Stream = {
  data: string;
};

export type DecodeContext = { a: number; b: number; c: number };
export type Decode = (stream: Stream, context: DecodeContext) => Stream;
