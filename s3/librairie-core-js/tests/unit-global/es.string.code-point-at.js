import { STRICT } from '../helpers/constants.js';

QUnit.test('String#codePointAt', assert => {
  const { codePointAt } = String.prototype;
  assert.isFunction(codePointAt);
  assert.arity(codePointAt, 1);
  assert.name(codePointAt, 'codePointAt');
  assert.looksNative(codePointAt);
  assert.nonEnumerable(String.prototype, 'codePointAt');
  assert.same('abc\uD834\uDF06def'.codePointAt(''), 0x61);
  assert.same('abc\uD834\uDF06def'.codePointAt('_'), 0x61);
  assert.same('abc\uD834\uDF06def'.codePointAt(), 0x61);
  assert.same('abc\uD834\uDF06def'.codePointAt(-Infinity), undefined);
  assert.same('abc\uD834\uDF06def'.codePointAt(-1), undefined);
  assert.same('abc\uD834\uDF06def'.codePointAt(-0), 0x61);
  assert.same('abc\uD834\uDF06def'.codePointAt(0), 0x61);
  assert.same('abc\uD834\uDF06def'.codePointAt(3), 0x1D306);
  assert.same('abc\uD834\uDF06def'.codePointAt(4), 0xDF06);
  assert.same('abc\uD834\uDF06def'.codePointAt(5), 0x64);
  assert.same('abc\uD834\uDF06def'.codePointAt(42), undefined);
  assert.same('abc\uD834\uDF06def'.codePointAt(Infinity), undefined);
  assert.same('abc\uD834\uDF06def'.codePointAt(Infinity), undefined);
  assert.same('abc\uD834\uDF06def'.codePointAt(NaN), 0x61);
  assert.same('abc\uD834\uDF06def'.codePointAt(false), 0x61);
  assert.same('abc\uD834\uDF06def'.codePointAt(null), 0x61);
  assert.same('abc\uD834\uDF06def'.codePointAt(undefined), 0x61);
  assert.same('\uD834\uDF06def'.codePointAt(''), 0x1D306);
  assert.same('\uD834\uDF06def'.codePointAt('1'), 0xDF06);
  assert.same('\uD834\uDF06def'.codePointAt('_'), 0x1D306);
  assert.same('\uD834\uDF06def'.codePointAt(), 0x1D306);
  assert.same('\uD834\uDF06def'.codePointAt(-1), undefined);
  assert.same('\uD834\uDF06def'.codePointAt(-0), 0x1D306);
  assert.same('\uD834\uDF06def'.codePointAt(0), 0x1D306);
  assert.same('\uD834\uDF06def'.codePointAt(1), 0xDF06);
  assert.same('\uD834\uDF06def'.codePointAt(42), undefined);
  assert.same('\uD834\uDF06def'.codePointAt(false), 0x1D306);
  assert.same('\uD834\uDF06def'.codePointAt(null), 0x1D306);
  assert.same('\uD834\uDF06def'.codePointAt(undefined), 0x1D306);
  assert.same('\uD834abc'.codePointAt(''), 0xD834);
  assert.same('\uD834abc'.codePointAt('_'), 0xD834);
  assert.same('\uD834abc'.codePointAt(), 0xD834);
  assert.same('\uD834abc'.codePointAt(-1), undefined);
  assert.same('\uD834abc'.codePointAt(-0), 0xD834);
  assert.same('\uD834abc'.codePointAt(0), 0xD834);
  assert.same('\uD834abc'.codePointAt(false), 0xD834);
  assert.same('\uD834abc'.codePointAt(NaN), 0xD834);
  assert.same('\uD834abc'.codePointAt(null), 0xD834);
  assert.same('\uD834abc'.codePointAt(undefined), 0xD834);
  assert.same('\uDF06abc'.codePointAt(''), 0xDF06);
  assert.same('\uDF06abc'.codePointAt('_'), 0xDF06);
  assert.same('\uDF06abc'.codePointAt(), 0xDF06);
  assert.same('\uDF06abc'.codePointAt(-1), undefined);
  assert.same('\uDF06abc'.codePointAt(-0), 0xDF06);
  assert.same('\uDF06abc'.codePointAt(0), 0xDF06);
  assert.same('\uDF06abc'.codePointAt(false), 0xDF06);
  assert.same('\uDF06abc'.codePointAt(NaN), 0xDF06);
  assert.same('\uDF06abc'.codePointAt(null), 0xDF06);
  assert.same('\uDF06abc'.codePointAt(undefined), 0xDF06);

  if (typeof Symbol == 'function' && !Symbol.sham) {
    assert.throws(() => codePointAt.call(Symbol('codePointAt test'), 1), 'throws on symbol context');
  }

  if (STRICT) {
    assert.throws(() => codePointAt.call(null, 0), TypeError);
    assert.throws(() => codePointAt.call(undefined, 0), TypeError);
  }
});
