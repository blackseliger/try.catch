import numberOfGoods from '../app';

describe('check numberOfGoods', () => {
  test('should be a number', () => {
    const received = numberOfGoods(4);
    expect(received).not.toBeNaN();
  });
  test('should be a throw', () => {
    const received = numberOfGoods('f');
    expect(received).toEqual(expect.any(String));
  });
});
