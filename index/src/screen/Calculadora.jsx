import React, { useState } from 'react';
import DivCalc from '../Styled';
import { Input } from '../components/Input';


export default function Calculadora() {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState();
    const [mensagem, setMensagem] = useState('')

    const calcularIMC = () => {

        const novaAltura = altura / 100
        const imc = peso / (novaAltura ** 2);
        const imcFormatado = imc.toFixed(2);
        setResultado(imcFormatado);

    };

    const handleSubmit = () =>{

        if(calcularIMC){
            if (resultado < 18.5) {
                setMensagem(`Imc ${resultado} - Muito abaixo do peso`)
                return;
            } else if (resultado >= 18.6 && resultado <= 24.9) {
                setMensagem(`Imc ${resultado} - Peso ideal`)
                return;
            } else if (resultado >= 25 && resultado < 30) {
                setMensagem(`Imc ${resultado} - Levemente acima do peso`)
                return;
            } else if (resultado > 30 && resultado < 35) {
                setMensagem(`Imc ${resultado} - Obesidade Grau I`)
                return;
            } else if (resultado > 35 && resultado < 39.9) {
                setMensagem(`Imc ${resultado} - Obesidade Grau II`)
                return;
            } else if (resultado >= 40) {
                setMensagem(`Imc ${resultado} - Obesidade Grau III`)
                return;
            }
        } else {
            setMensagem("Erro ao calcular o imc")
        }

        
    }


    return (
        <DivCalc>
            <div id='container'>
                <div>
                    <label>Altura</label>
                    <Input value={altura} setValue={setAltura} />
                </div>

                <div>
                    <label>Peso</label>
                    <Input value={peso} setValue={setPeso} />
                </div>
                <button onClick={handleSubmit}>Calcular</button>

                <h2>{mensagem}</h2>
            </div>
        </DivCalc>
    )
}