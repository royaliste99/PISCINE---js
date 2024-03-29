import { DESCRIPTORS, FREEZING } from '../helpers/constants.js';

import preventExtensions from 'core-js-pure/es/reflect/prevent-extensions';
import isExtensible from 'core-js-pure/es/object/is-extensible';

QUnit.test('Reflect.preventExtensions', assert => {
  assert.isFunction(preventExtensions);
  assert.arity(preventExtensions, 1);
  if ('name' in preventExtensions) {
    assert.name(preventExtensions, 'preventExtensions');
  }
  const object = {};
  assert.true(preventExtensions(object));
  if (DESCRIPTORS) {
    assert.false(isExtensible(object));
  }
  assert.throws(() => preventExtensions(42), TypeError, 'throws on primitive');
});

QUnit.test('Reflect.preventExtensions.sham flag', assert => {
  assert.same(preventExtensions.sham, FREEZING ? undefined : true);
});
