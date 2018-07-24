import assert from 'assert';
import { describe, it } from 'mocha';
import CleverArray from './index';

describe('CleverArray is so smart it can even', () => {
  describe('#sum', () => {
    it('all items together', () => {
      const cleverArray = new CleverArray(1, 2, 3, 4);
      assert.equal(cleverArray.sum, 10);
    });

    it('with updates to the array', () => {
      const cleverArray = new CleverArray(1, 2, 3);
      assert.equal(cleverArray.sum, 6);
      cleverArray.push(4, 5);
      assert.equal(cleverArray.sum, 15);
    });

    it('an empty array', () => {
      const cleverArray = new CleverArray();
      assert.ok(isNaN(cleverArray.sum));
    });
  });

  describe('#average', () => {
    it('all array items', () => {
      const cleverArray = new CleverArray(1, 2, 3, 4);
      assert.equal(cleverArray.average, 2.5);
    });

    it('with updates to the array', () => {
      const cleverArray = new CleverArray(1, 2, 3);
      assert.equal(cleverArray.average, 2);
      cleverArray.push(4, 5);
      assert.equal(cleverArray.average, 3);
    });

    it('an empty array', () => {
      const cleverArray = new CleverArray();
      assert.ok(isNaN(cleverArray.average));
    });
  });
});
