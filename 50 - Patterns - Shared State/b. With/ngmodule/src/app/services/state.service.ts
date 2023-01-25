/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

export class StateService {
  // State
  color: string = 'red';

  // State Updaters
  switchColor() {
    this.color = this.color === 'red' ? 'green' : 'red';
  }
}
