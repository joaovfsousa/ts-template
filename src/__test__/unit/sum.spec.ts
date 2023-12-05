import { sum } from '@src/sum';

describe('sum', () => {
  it('should return 3 when sum(1, 2)', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
