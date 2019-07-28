import React from 'react';


const Esenciado = () => (
    <div className="container esenciado__container">
        <div className="content">
            <div className="content__head">
                <h2 className="content__title">Esencia Do</h2>
                <h3 className="content__subtitle">Aburridos de lo convencional,  creamos un nuevo concepto de Sushi en Chile, <span>rescatamos la verdadera tradición del sushi, pero con productos originarios de nuestras costas</span>, explorando altas técnicas de elaboración, respetando sus procesos y por sobre todo respetando lo que <span>la mar manda día a día</span>, para que llegue a tu mesa un producto <span>único, fresco y de autor.</span></h3>
            </div>
            <div className="grid-3-col">
                <div className="grid-item__vertical">
                    <img className="icon" src="assets/img/icon-fish.png" alt="Pesca Fresca y Artesanal"/>
                    <p className="paragraph">Pesca fresca y artesanal</p>
                </div>
                <div className="grid-item__vertical">
                    <img className="icon" src="assets/img/icon-fresh.png" alt="Hierbas y condimentos orgánicos"/>
                    <p className="paragraph">Hierbas y condimentos orgánicos</p>
                </div>
                <div className="grid-item__vertical">
                    <img className="icon" src="assets/img/icon-eco.png" alt="Envase reciclable"/>
                    <p className="paragraph">Envase reciclable</p>
                </div>
            </div>
        </div>
    </div>
)


export default Esenciado