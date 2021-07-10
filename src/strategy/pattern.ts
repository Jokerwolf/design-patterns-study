import { DecodeContext, Decode, Stream } from './types';

export const decodeA: Decode = (stream: Stream, { a }: DecodeContext) => {
  console.log('>>>> Decoding with A', a);
  return stream;
};

export const decodeB: Decode = (stream: Stream, { b }: DecodeContext) => {
  console.log('>>>> Decoding with B', b);
  return stream;
};

export const decodeC: Decode = (stream: Stream, { c }: DecodeContext) => {
  console.log('>>>> Decoding with C', c);
  return stream;
};

export default class Player {
  private paramA: number;
  private paramB: number;
  private paramC: number;

  constructor(private decode: Decode, private stream: Stream) {
    this.paramA = Date.now();
    this.paramB = Date.now();
    this.paramC = Date.now();
  }

  play() {
    this.decode(this.stream, {
      a: this.paramA,
      b: this.paramB,
      c: this.paramC,
    });
    console.log('>>>> Play');
  }
}
