"use client";
import { useState } from 'react';
import { calcularMedia } from '../utils/calculadora';

export default function Home() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [n4, setN4] = useState('');
  const [resultado, setResultado] = useState(null);

  const lidarComCalculo = () => {
    const media = calcularMedia(Number(n1), Number(n2), Number(n3), Number(n4));
    setResultado(media);
  };

  return (
    <main className="calculator-page">
      <section className="calculator-panel">
        <h2 className="calculator-title">Calculadora de Média</h2>
        <div className="calculator-form">
          <input className="calculator-input" type="number" placeholder="Nota 1" value={n1} onChange={e => setN1(e.target.value)} />
          <input className="calculator-input" type="number" placeholder="Nota 2" value={n2} onChange={e => setN2(e.target.value)} />
          <input className="calculator-input" type="number" placeholder="Nota 3" value={n3} onChange={e => setN3(e.target.value)} />
          <input className="calculator-input" type="number" placeholder="Nota 4" value={n4} onChange={e => setN4(e.target.value)} />
          
          <button className="calculator-button" onClick={lidarComCalculo}>
            Calcular
          </button>
        </div>
        
        {resultado !== null && (
          <div className="calculator-result">
            <strong>Média Final: {resultado}</strong>
          </div>
        )}
      </section>
    </main>
  );
}
