import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('retorna as moedas suportadas', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
