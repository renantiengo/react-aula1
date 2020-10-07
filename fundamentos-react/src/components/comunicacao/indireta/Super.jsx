import React, { useState } from 'react';
import Sub from "./Sub";


export default (props) =>{
    //useState permite mudar valores que são readOnly através do estado
    // useState(valorInicial)
    //callback - componente pai passa funcao para componente filho retornar dados
    const [texto, setTexto] = useState ('Valor') 
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto){
        setTexto(texto)
        setNum(valorGerado)
    }

    return(
        <div>
            <h4>{texto}: {num}</h4>
            <Sub onClicar= {quandoClicar}></Sub>
        </div>

    );
    
};
