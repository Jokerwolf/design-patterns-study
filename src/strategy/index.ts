import PlayerOriginal from './original';
import PlayerPattern, { decodeA, decodeB, decodeC } from './pattern';
import { Stream } from './types';

export default function () {
  const stream: Stream = { data: 'some stream' };

  console.log('Running Strategy example');

  [
    new PlayerOriginal('A', stream),
    new PlayerOriginal('B', stream),
    new PlayerOriginal('C', stream),
    new PlayerPattern(decodeA, stream),
    new PlayerPattern(decodeB, stream),
    new PlayerPattern(decodeC, stream),
  ].forEach((player) => {
    player.play();
  });

  return Promise.resolve();
}
