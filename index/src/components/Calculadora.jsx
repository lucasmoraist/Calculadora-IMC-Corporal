import React, { useState } from 'react';
import styled from 'styled-components';

const DivCalc = styled.div`
    button{
        border:none;
        padding: 8px;
        border-radius: 30px;
        margin-top: 10px;
        background-color: #836FFF;
        color: white;
    }

    button:hover{
        box-shadow: 10px 10px 0px #ff96ad;
        top: -5px;
        left:-5px;
        transition: 0.5s;
        cursor: pointer;
    }

    label{
        display: block;
        margin-top: 15px;
        font-weight: bold;
    }
    #container{
        background-color: #ADD8E6;
        padding-left:40%;
        padding-top: 17%;
        padding-bottom: 13%;
    }

    input{
        background-color: #ADD8E6;
        border:none;
        border-bottom: solid 2px black;
        border-radius: 5px;
        font-weight: bold;
        
    }
    
    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
        
    }

    #container div{
        margin-bottom: 30px;
    }
    
`

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
        <DivCalc>
            <div id='container'>
                <div>
                    <input
                        type="number"
                        placeholder='Altura'
                        onChange={(e) => setAltura(e.target.value)}
                        value={altura}
                    />
                </div>

                <div>
                    <input
                        type="number"
                        placeholder='Peso'
                        onChange={(e) => setPeso(e.target.value)}
                        value={peso}
                    />
                </div>
                <button onClick={calcularIMC}>Calcular</button>
                <h2>Seu IMC corporal: {resultado}</h2>
            </div>
        </DivCalc>
    )
}