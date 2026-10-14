import { calcularMedia } from '../utils/calculadora';

describe('Regra de Negócio: Calculadora', () => {
  it('deve calcular a média corretamente utilizando as 3 notas', () => {
    // 10 + 8 + 6 = 24 / 3 = 8
    const resultado = calcularMedia(10, 8, 6);
    expect(resultado).toBe(8);
  });
});
