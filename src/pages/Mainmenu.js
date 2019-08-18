import React from 'react';

const Mainmenu = () => (
    <header>
        <div className="menu__content">
          <div className="menu__logo">
            <img className="logo" src="assets/img/logo-do-sushi-main.png" alt="Do Sushi branding"></img>
          </div>
    <a href="#main-menu"
     id="main-menu-toggle"
     className="menu-toggle"
     aria-label="Open main menu">
    <span className="sr-only"></span>
    <span aria-hidden="true"><img className="menu-icon" src="assets/img/menu.png" alt="Menu"></img></span>
    </a>
  <nav id="main-menu" className="main-menu" aria-label="Main menu">
    <a href="#main-menu-toggle"
       id="main-menu-close"
       className="menu-close"
       aria-label="Close main menu">
      <span className="sr-only"></span>
      <span aria-hidden="true"><img className="menu-icon" src="assets/img/cancel.png" alt="close"></img></span>
    </a>
      <ul>
        
            <li><a className="menu__item" href="#inicio">INICIO</a></li>
            <li><a className="menu__item" href="#que-comemos">QUÉ COMEMOS</a></li>
            <li><a className="menu__item" href="#como-pedir">CÓMO PEDIR</a></li>
            <li><a className="menu__item" href="#esencia-do">ESENCIA DO</a></li>
            <li><a className="menu__item" href="#ecologico">120% ECO</a></li>
            <li><a className="menu__item" href="#hablemos">HABLEMOS</a></li>
      </ul>
  </nav>
    <a href="#main-menu-toggle"
     className="backdrop"
     tabIndex="-1"
     aria-hidden="true" hidden>
    </a>
    </div>  
    </header>
)

export default Mainmenu;