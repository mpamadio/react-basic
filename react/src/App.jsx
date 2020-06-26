import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from  './components/ComParametro'

import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import './App.css'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'


export default (props) => (
    <div className="App">

        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao/>
        </Card>

        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Marcola</li>
                    <li>Frajola</li>
                    <li>Perna Longa</li>
                    <li>Strepcious</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente Com Parametro">
            <ComParametro titulo="Esse é o titulo" 
            subtitulo="Esse é o subtitulo" />  
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>       
        
        
        
           
    </div>
)
