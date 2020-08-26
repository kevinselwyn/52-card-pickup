// libs
import { PRNG } from '../src/js/utils';

// tests
test('test to make sure the class can even be instantiated', () => {
    const _ = new PRNG();
});

test('to make sure a seeded PRNG always returns the same results', () => {
    let prng = new PRNG(1337);

    expect(prng.random()).toBe(0.010463855239063367);
    expect(prng.random()).toBe(0.8660227473508778);
    expect(prng.random()).toBe(0.24431577440753185);

    prng = new PRNG(1337);

    expect(prng.random()).toBe(0.010463855239063367);
    expect(prng.random()).toBe(0.8660227473508778);
    expect(prng.random()).toBe(0.24431577440753185);

    prng = new PRNG(42);

    expect(prng.random()).not.toBe(0.010463855239063367);
    expect(prng.random()).not.toBe(0.8660227473508778);
    expect(prng.random()).not.toBe(0.24431577440753185);
});
