import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import ComFilhos from './components/basicos/ComFilhos.jsx'
import Card from './components/layout/Card.jsx'
import Repeticao from './components/basicos/Repeticao.jsx'
import Condicional from './components/basicos/Condicional.jsx'
import CondicionalComIf from './components/basicos/CondicionalComIf.jsx'
import Pai from './components/comunicacao/direta/Pai.jsx'
import Super from './components/comunicacao/indireta/Super.jsx'
import Input from './components/form/Input.jsx'
import Contador from './components/contador/Contador.jsx'
import Mega from './components/mega/Mega.jsx'



export default props => 
  <div className ="App">
    <h1>Fundamentos de React</h1>

    <div className="Cards">

      <Card titulo=" #11 - Mega-Sena" color="#293E6A">
          <Mega qtdNumero={8}></Mega> 
      </Card>

      <Card titulo=" #10 - Contador" color="#293E6A">
        <Contador passo={10} valor={100}></Contador>      
      </Card>

      <Card titulo=" #09 - Input" color="#9C0F5F">
        <Input></Input>      
      </Card>

      <Card titulo=" #08 - Comunicacao Indireta" color="#000">
        <Super></Super>      
      </Card>

      <Card titulo=" #07 - Comunicacao Direta" color="#4298B5">
        <Pai sobrenome="Freitas"></Pai>
      </Card>

      <Card titulo=" #06 - Condicional v2" color="#FA6900">
        <CondicionalComIf numero={10}></CondicionalComIf>
      </Card>

      <Card titulo = " #05 - Condicional v1" color="#E94C6F">
        <Condicional numero={11}></Condicional>
      </Card>
      
      <Card titulo = " #04 - Repetição" color= "#008BBA">
        <Repeticao></Repeticao>
      </Card>
      
      <Card titulo = " #03 - Componente com Filhos" color="#D96459">
        <ComFilhos>
          <ul>
            <li>Ana </li>
            <li>Bia </li>
            <li>Carlos </li>
            <li>Daniel </li>
          </ul>
        </ComFilhos>
      </Card>
    
      <Card titulo = " #02 - Componente com Parametro" color="#FF85CB">
        <ComParametro titulo= "Esse é o titulo"
            subtitulo = "Esse é o subtitulo" /> 
      </Card>

      <Card titulo = " #01 - Primeiro Componente" color="#92B06A">
        <Primeiro />
      </Card> 

    </div>

  </div>





