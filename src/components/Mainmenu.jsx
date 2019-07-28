import React from 'react';
import logo from '../logo.svg';

const Mainmenu = () => (
    <header>
        <div className="menu__content">
          <div className="menu__logo">
            <img src={logo} alt="Do Sushi Logo"></img>
          </div>
          <ul className="menu__nav">
            <a className="menu__item" href="#inicio">INICIO</a>
            <a className="menu__item" href="#esencia-do">ESENCIA DO</a>
            <a className="menu__item" href="#carta-do">CARTA DO</a>
            <a className="menu__item" href="#comopedir">CÓMO PEDIR</a>
            <a className="menu__item" href="#120-eco">120% ECO</a>
            <a className="menu__item" href="#hablemos">HABLEMOS</a>
          </ul>
        </div>
    </header>
)

export default Mainmenu;