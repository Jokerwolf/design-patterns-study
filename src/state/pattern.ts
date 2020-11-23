import _ from 'lodash';
import { ContextWithStates } from './state-types';

type PlayerStateKey = 'stop' | 'play';

interface PlayerState {
  key: PlayerStateKey;
  play: () => PlayerState | void;
  stop: () => PlayerState | void;
}

class Stop implements PlayerState {
  key: PlayerStateKey = 'stop';
  
  constructor(private context: Player) { }

  play() {
      console.log('>>>> [Stop]: play');
      this.context.time = Date.now();
      this.context.changeStateWithLog('play');
      console.log(`>>>> Time: ${this.context.time}`);
  }

  stop() { 
      console.log('>>>> [Stop]: stop'); 
      return; 
  }
}

class Play implements PlayerState {
  key: PlayerStateKey = 'play'

  constructor(private context: Player) { }

  play() {
      console.log('>>>> [Play]: play');
      return;
  }
  stop() {
      console.log('>>>> [Play]: stop');
      this.context.time = Date.now();
      this.context.changeStateWithLog('stop');
      console.log(`>>>> Time: ${this.context.time}`);
  }
}

export default class Player extends ContextWithStates<PlayerState, PlayerStateKey> {
  private timestamps: Array<number> = [];

  states: Record<PlayerStateKey, PlayerState> = {
      play: new Play(this),
      stop: new Stop(this),
  };

  constructor(state?: PlayerState) {
      super();
      this.state = state || this.states.stop;
  }

  get time() {
      if (_.size(this.timestamps) > 1) {
          return _.chain(this.timestamps).takeRight(2).reduce((acc, x) => x - acc).value();
      }

      return -1;
  }

  set time(val: number) {
      this.timestamps = [...this.timestamps, val];
  }

  play = () => this.state.play();
  stop = () => this.state.stop();
}