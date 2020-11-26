/* global Strategy */
export class StrategyA extends Strategy {
  constructor() {
    super()
    console.log(234)
  }
  someWork():number {
    return 123
  }
}

