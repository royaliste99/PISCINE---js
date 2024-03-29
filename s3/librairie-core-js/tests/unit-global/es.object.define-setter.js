import { DESCRIPTORS, STRICT } from '../helpers/constants.js';

if (DESCRIPTORS) {
  QUnit.test('Object#__defineSetter__', assert => {
    const { __defineSetter__ } = Object.prototype;
    assert.isFunction(__defineSetter__);
    assert.arity(__defineSetter__, 2);
    assert.name(__defineSetter__, '__defineSetter__');
    assert.looksNative(__defineSetter__);
    assert.nonEnumerable(Object.prototype, '__defineSetter__');
    let object = {};
    assert.same(object.__defineSetter__('key', function () {
      this.foo = 43;
    }), undefined, 'void');
    object.key = 44;
    assert.same(object.foo, 43, 'works');
    object = {};
    object.__defineSetter__('key', function () {
      this.foo = 43;
    });
    object.__defineGetter__('key', () => 42);
    object.key = 44;
    assert.same(object.key, 42, 'works with setter #1');
    assert.same(object.foo, 43, 'works with setter #2');
    if (STRICT) {
      assert.throws(() => __defineSetter__.call(null, 1, () => { /* empty */ }), TypeError, 'Throws on null as `this`');
      assert.throws(() => __defineSetter__.call(undefined, 1, () => { /* empty */ }), TypeError, 'Throws on undefined as `this`');
    }
  });
}
