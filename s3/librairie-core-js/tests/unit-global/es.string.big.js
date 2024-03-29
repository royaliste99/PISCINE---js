QUnit.test('String#big', assert => {
  const { big } = String.prototype;
  assert.isFunction(big);
  assert.arity(big, 0);
  assert.name(big, 'big');
  assert.looksNative(big);
  assert.nonEnumerable(String.prototype, 'big');
  assert.same('a'.big(), '<big>a</big>', 'lower case');

  if (typeof Symbol == 'function' && !Symbol.sham) {
    assert.throws(() => big.call(Symbol('big test')), 'throws on symbol context');
  }
});
