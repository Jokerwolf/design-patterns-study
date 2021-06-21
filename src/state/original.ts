export default class Player {
  private timestamps: Array<number> = [Date.now()];

  private isPlaying: boolean;
  private isStopped: boolean = true;
  private isForwarding: boolean;
  private isRewinding: boolean;

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
    } else if (this.isRewinding) {
      console.log('>>>> [Rewind]: play');
    } else {
      console.log('>>>> [Play]: play');
    }

    if (!this.isPlaying) {
      this.isPlaying = true;
      this.isStopped = false;
      this.isForwarding = false;
      this.isRewinding = false;

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
    } else if (this.isRewinding) {
      console.log('>>>> [Rewind]: stop');
    } else {
      console.log('>>>> [Stop]: stop');
    }

    if (!this.isStopped) {
      this.isStopped = true;
      this.isPlaying = false;
      this.isForwarding = false;
      this.isRewinding = false;

      console.log(`>>>> Time: ${this.time}`);
    }
  }

  forward(): void {
    if (!this.isForwarding) {
      this.time = Date.now();
    }

    if (this.isPlaying) {
      console.log('>>>> [Play]: forward');
    } else if (this.isStopped) {
      console.log('>>>> [Stop]: forward');
    } else if (this.isRewinding) {
      console.log('>>>> [Rewind]: forward');
    } else {
      console.log('>>>> [Forward]: forward');
    }

    if (!this.isForwarding) {
      this.isForwarding = true;
      this.isStopped = false;
      this.isPlaying = false;
      this.isRewinding = false;

      console.log(`>>>> Time: ${this.time}`);
    }
  }

  rewind(): void {
    if (!this.isRewinding) {
      this.time = Date.now();
    }

    if (this.isPlaying) {
      console.log('>>>> [Play]: rewind');
    } else if (this.isStopped) {
      console.log('>>>> [Stop]: rewind');
    } else if (this.isForwarding) {
      console.log('>>>> [Forward]: rewind');
    } else {
      console.log('>>>> [Rewind]: rewind');
    }

    if (!this.isRewinding) {
      this.isRewinding = true;
      this.isStopped = false;
      this.isPlaying = false;
      this.isForwarding = false;

      console.log(`>>>> Time: ${this.time}`);
    }
  }
}
