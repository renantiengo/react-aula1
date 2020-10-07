import React from 'react'
import Filho from './Filho'


export default props =>
<div>
    <Filho {...props}>João</Filho>  {/* cria novo objeto passando propriedades do pai pro filho*/}
    <Filho sobrenome ={props.sobrenome}>Maria</Filho> {/* pega diretamente as propriedades do pai pro filho*/}
    <Filho sobrenome ="Silva">Pedro</Filho>
</div>