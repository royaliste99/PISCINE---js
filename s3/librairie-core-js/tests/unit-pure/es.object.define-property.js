import { DESCRIPTORS } from '../helpers/constants.js';

import create from 'core-js-pure/es/object/create';
import defineProperty from 'core-js-pure/es/object/define-property';

QUnit.test('Object.defineProperty', assert => {
  assert.isFunction(defineProperty);
  assert.arity(defineProperty, 3);
  const source = {};
  const result = defineProperty(source, 'q', {
    value: 42,
  });
  assert.same(result, source);
  assert.same(result.q, 42);

  if (DESCRIPTORS) {
    // eslint-disable-next-line prefer-arrow-callback -- required for testing
    assert.same(defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false,
    }).prototype, 42, 'function prototype with non-writable descriptor');
  }

  assert.throws(() => defineProperty(42, 1, {}));
  assert.throws(() => defineProperty({}, create(null), {}));
  assert.throws(() => defineProperty({}, 1, 1));
});

QUnit.test('Object.defineProperty.sham flag', assert => {
  assert.same(defineProperty.sham, DESCRIPTORS ? undefined : true);
});
