import React, { useState } from 'react';

export default function Calculadora() {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState();

    const calcularIMC = () => {
        const novaAltura = altura / 100
        const imc = peso / (novaAltura ** 2);
        const imcFormatado = imc.toFixed(2);
        setResultado(imcFormatado);
    };

    return (
        <div>
            <div>
                <label htmlFor="idAltura">Altura</label>
                <input
                    type="number"
                    placeholder="ex: 170"
                    onChange={(e) => setAltura(e.target.value)}
                    value={altura}
                />
            </div>

            <div>
                <label htmlFor="idPeso">Peso</label>
                <input
                    type="number"
                    placeholder="ex: 60"
                    onChange={(e) => setPeso(e.target.value)}
                    value={peso}
                />
            </div>
            <button onClick={calcularIMC}>Calcular</button>
            <h2>Seu IMC corporal: {resultado}</h2>
        </div>
    )
}