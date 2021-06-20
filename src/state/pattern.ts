import { Context } from './state-types';

type PlayerStateKey = 'stop' | 'play';

interface PlayerState {
  key: PlayerStateKey;
  play: () => PlayerState | void;
  stop: () => PlayerState | void;
  forward: () => PlayerState | void;
  backward: () => PlayerState | void;
}

class Stop implements PlayerState {
  key: PlayerStateKey = 'stop';

  constructor(private context: Player) {}

  play() {
    console.log('>>>> [Stop]: play');
    this.context.time = Date.now();
    this.context.changeState(new Play(this.context));
    console.log(`>>>> Time: ${this.context.time}`);
  }

  stop() {
    console.log('>>>> [Stop]: stop');
    return;
  }

  forward: () => void | PlayerState;
  backward: () => void | PlayerState;
}

class Play implements PlayerState {
  key: PlayerStateKey = 'play';

  constructor(private context: Player) {}

  play() {
    console.log('>>>> [Play]: play');
    return;
  }
  stop() {
    console.log('>>>> [Play]: stop');
    this.context.time = Date.now();
    this.context.changeState(new Stop(this.context));
    console.log(`>>>> Time: ${this.context.time}`);
  }

  forward: () => void | PlayerState;
  backward: () => void | PlayerState;
}

export default class Player extends Context<PlayerState, PlayerStateKey> {
  private timestamps: Array<number> = [Date.now()];

  constructor(state?: PlayerState) {
    super();
    this.state = state || new Stop(this);
  }

  get time(): number {
    if (this.timestamps.length === 0) {
      return -1;
    }

    return this.timestamps
      .slice(-2)
      .reduce((acc: number, x: number) => x - acc);
  }

  set time(val: number) {
    this.timestamps = [...this.timestamps, val];
  }

  play = () => this.state.play();
  stop = () => this.state.stop();
  forward = () => this.state.forward();
  backward = () => this.state.backward();
}
