import { greet } from './greet';

describe('greet', () => {
  it('incluindo um nome', () => {
    // const result = greet('Rafael');
    // expect(result).toBe('Bem vindo Rafael');
    expect(greet('Rafael')).toContain('Rafael');
  });
});
