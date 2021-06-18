import React from 'react'
import Img from '../../assets/netflix.svg'

import './styles.css'

const Banner = () =>{
    return (
        <div className="main">
            <div>
                <h1>App divertido</h1>
                <p>Um projetinho para treinar reactjs, react-router-dom e axios</p>
            </div>
            <img src={Img} alt="menina lendo"/>
        </div>
    )
}

export default Banner