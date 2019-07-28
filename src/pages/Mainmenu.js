import React from 'react';

const Mainmenu = () => (
    <header>
        <div className="menu__content">
          <div className="menu__logo">
            <img src="assets/svg/logo.svg" alt="Do Sushis Logo"></img>
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