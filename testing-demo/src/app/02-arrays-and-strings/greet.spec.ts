import { greet } from './greet';

describe('greet', () => {
  it('incluindo um nome', () => {
    expect(greet('Rafael')).toContain('Rafael');
  });
});
