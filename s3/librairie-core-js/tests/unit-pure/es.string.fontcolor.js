import fontcolor from 'core-js-pure/es/string/fontcolor';

QUnit.test('String#fontcolor', assert => {
  assert.isFunction(fontcolor);
  assert.same(fontcolor('a', 'b'), '<font color="b">a</font>', 'lower case');
  assert.same(fontcolor('a', '"'), '<font color="&quot;">a</font>', 'escape quotes');

  /* eslint-disable es/no-symbol -- safe */
  if (typeof Symbol == 'function') {
    const symbol = Symbol('fontcolor test');
    assert.throws(() => fontcolor(symbol, 'b'), 'throws on symbol context');
    assert.throws(() => fontcolor('a', symbol), 'throws on symbol argument');
  }
});
