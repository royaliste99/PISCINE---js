import { REDEFINABLE_ARRAY_LENGTH_DESCRIPTOR, STRICT } from '../helpers/constants.js';

import unshift from 'core-js-pure/es/array/virtual/unshift';
import defineProperty from 'core-js-pure/es/object/define-property';

QUnit.test('Array#unshift', assert => {
  assert.isFunction(unshift);

  assert.same(unshift.call([1], 0), 2, 'proper result');

  if (STRICT) {
    if (REDEFINABLE_ARRAY_LENGTH_DESCRIPTOR) {
      assert.throws(() => unshift.call(defineProperty([], 'length', { writable: false }), 1), TypeError, 'non-writable length, with arg');
      assert.throws(() => unshift.call(defineProperty([], 'length', { writable: false })), TypeError, 'non-writable length, without arg');
    }

    assert.throws(() => unshift.call(null), TypeError);
    assert.throws(() => unshift.call(undefined), TypeError);
  }
});
