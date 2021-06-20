export default class Player {
  private timestamps: Array<number> = [Date.now()];

  private isPlaying: boolean;
  private isStopped: boolean = true;
  private isForwarding: boolean;
  private isBackwarding: boolean;

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

  play(): void {
    if (!this.isPlaying) {
      this.time = Date.now();
    }

    if (this.isStopped) {
      console.log('>>>> [Stop]: play');
    } else if (this.isForwarding) {
      console.log('>>>> [Forward]: play');
    } else if (this.isBackwarding) {
      console.log('>>>> [Backwards]: play');
    } else {
      console.log('>>>> [Play]: play');
    }

    if (!this.isPlaying) {
      this.isPlaying = true;
      this.isStopped = false;
      this.isForwarding = false;
      this.isBackwarding = false;

      console.log(`>>>> Time: ${this.time}`);
    }
  }

  stop(): void {
    if (!this.isStopped) {
      this.time = Date.now();
    }

    if (this.isPlaying) {
      console.log('>>>> [Play]: stop');
    } else if (this.isForwarding) {
      console.log('>>>> [Forward]: stop');
    } else if (this.isBackwarding) {
      console.log('>>>> [Backwards]: stop');
    } else {
      console.log('>>>> [Stop]: Stop');
    }

    if (!this.isStopped) {
      this.isStopped = true;
      this.isPlaying = false;
      this.isForwarding = false;
      this.isBackwarding = false;

      console.log(`>>>> Time: ${this.time}`);
    }
  }

  forward(): void {}
  backward(): void {}
}
