import { Count } from 'app/domain/domain';

describe('count', () => {
  test('count up', () => {
    const c = new Count(1);
    expect(c.increment()).toEqual(new Count(2))
  });
})