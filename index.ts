class SpeshulArray {
  private numbers: number[];
  constructor(...numbers: number[]) {
    this.numbers = numbers;
  }

  push(...numbers: number[]) {
    this.numbers.push(...numbers);
  }

  get sum() {
    if (!this.numbers.length) {
      return NaN;
    }
    return this.numbers.reduce((sum, n) => sum + n);
  }

  get average() {
    if (!this.numbers.length) {
      return NaN;
    }
    return this.sum / this.numbers.length;
  }
}

export default SpeshulArray;
