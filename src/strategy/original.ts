import { AlgorithmType, Stream } from './types';

export default class Player {
  private paramA: number;
  private paramB: number;
  private paramC: number;

  constructor(private codecType: AlgorithmType, private stream: Stream) {
    this.paramA = Date.now();
    this.paramB = Date.now();
    this.paramC = Date.now();
  }

  play() {
    const algorithm = this.getAlgorithm();

    switch (algorithm) {
      case 'A':
        this.decodeA();
        break;
      case 'B':
        this.decodeB();
        break;
      case 'C':
        this.decodeC();
        break;
    }

    console.log('>>>> Play');
  }

  private getAlgorithm(): AlgorithmType {
    // Some logic happens here to determine appropriate algorithm.
    return this.codecType;
  }

  private decodeA(): Stream {
    console.log('>>>> Decoding with A', this.paramA);
    return this.stream;
  }

  private decodeB(): Stream {
    console.log('>>>> Decoding with B', this.paramB);
    return this.stream;
  }

  private decodeC(): Stream {
    console.log('>>>> Decoding with C', this.paramC);
    return this.stream;
  }
}
