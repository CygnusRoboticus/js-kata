class SpeshulArray {
  constructor(...numbers) {
    this.numbers = numbers;
  }

  push(...numbers) {
    this.numbers.push(...numbers);
  }

  sum() {
    if(!this.numbers.length) {
      return NaN;
    }
    return this.numbers.reduce((sum, n) => sum + n);
  }

  average() {
    if (!this.numbers.length) {
      return NaN;
    }
    return this.sum() / this.numbers.length;
  }
}

export default SpeshulArray;
