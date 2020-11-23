export abstract class Context<T extends WithKey<StateKeys>, StateKeys extends string | number | symbol> {
  protected state: T;

  changeState(state: T) {
      if (state && state !== this.state) { this.state = state; }
  }
}

interface WithKey<T> {
  key: T;
}

interface WithStates<T extends WithKey<StateKeys>, StateKeys extends string | number | symbol> {
  states: Record<StateKeys, T>;
}

export abstract class ContextWithStates<T extends WithKey<StateKeys>, StateKeys extends string | number | symbol> implements WithStates<T, StateKeys> {
  protected state: T;
  states: Record<StateKeys, T>;

  changeState(stateKey: StateKeys) {
      if (this._canChangeState(stateKey)) { this.state = this.states[stateKey]; }
  }
  
  changeStateWithLog(stateKey: StateKeys, message?: string) {
      if (this._canChangeState(stateKey)) {
          console.log(
              `>>>> State change ${message ? `: ${message}` : ''}`,
              `>>>> [${this.state.key}] \u21d2 [${stateKey}]`
          );
          this.changeState(stateKey);
      } else {
          console.log(
              '>>>> No state change', 
              `>>>> [${this.state.key}] \u2261 [${stateKey}]`
          );
      }
  }
  
  private _canChangeState(stateKey: StateKeys) {
      return this.states?.[stateKey] && this.states?.[stateKey] !== this.state;
  }
}
