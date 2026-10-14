import { calcularMedia } from '../utils/calculadora';

describe('Regra de Negócio: Calculadora', () => {
  it('deve calcular a média corretamente utilizando as 4 notas', () => {
    const resultado = calcularMedia(10, 8, 6, 4);
    expect(resultado).toBe(7);
  });
});
