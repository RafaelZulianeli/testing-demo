import { compute } from './compute';

describe('compute', () => {
  it('teste com valor negativo, deve retornar 0', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('teste com valor positivo, deve retornar o valor + 1', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
