import { STRICT } from '../helpers/constants.js';

import Symbol from 'core-js-pure/es/symbol';
import filter from 'core-js-pure/es/array/filter';

QUnit.test('Array#filter', assert => {
  assert.isFunction(filter);
  let array = [1];
  const context = {};
  filter(array, function (value, key, that) {
    assert.same(arguments.length, 3, 'correct number of callback arguments');
    assert.same(value, 1, 'correct value in callback');
    assert.same(key, 0, 'correct index in callback');
    assert.same(that, array, 'correct link to array in callback');
    assert.same(this, context, 'correct callback context');
  }, context);
  assert.deepEqual([1, 2, 3, 4, 5], filter([1, 2, 3, 'q', {}, 4, true, 5], it => typeof it == 'number'));
  if (STRICT) {
    assert.throws(() => filter(null, () => { /* empty */ }), TypeError);
    assert.throws(() => filter(undefined, () => { /* empty */ }), TypeError);
  }
  array = [];
  // eslint-disable-next-line object-shorthand -- constructor
  array.constructor = { [Symbol.species]: function () {
    return { foo: 1 };
  } };
  assert.same(filter(array, Boolean).foo, 1, '@@species');
});
