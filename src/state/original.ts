import _ from 'lodash';

export default class Player {
  private timestamps: Array<number> = [];

  private isPlaying: boolean;
  private isStopped: boolean;

  constructor() {
      this.isStopped = true;
      this.isPlaying = false;
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

  play() {
      if (this.isStopped) {
          this.time = Date.now();

          this.isPlaying = true;
          this.isStopped = false;

          console.log('>>>> [Stop]: play');
          console.log(`>>>> Time: ${this.time}`);
      } else {
          console.log('>>>> [Play]: play');
      }
  }

  stop() {
      if (this.isPlaying) {
          this.time = Date.now();

          this.isStopped = true;
          this.isPlaying = false;

          console.log('>>>> [Play]: stop');
          console.log(`>>>> Time: ${this.time}`);
      } else {
          console.log('>>>> [Stop]: stop');
      }
  }
}