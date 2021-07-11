import PlayerOriginal from './original';
import PlayerPattern from './pattern';

export default function () {
  console.log('Running State example');
  return new Promise<void>((resolve) => {
    [new PlayerOriginal(), new PlayerPattern()].forEach((player) => {
      player.play();
      setTimeout(() => {
        player.stop();
        setTimeout(() => {
          player.stop();
          setTimeout(() => {
            player.play();
            resolve();
          }, 1000);
        }, 2000);
      }, 5000);
    });
  });
}
