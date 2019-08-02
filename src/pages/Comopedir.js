import React from 'react';

const ComoPedir = () => (
    <div className="container como-pedir__container" id="como-pedir">
        <div className="content">
            <div className="content__head">
                <h2 className="content__title">Como Pedir</h2>
                <h3 className="content__subtitle color_white">Sólo tenemos delivery, por lo que debes hacer tu pedido en cualquier de estos canales de martes a sábado de 13.00 a 21.00 hrs.</h3>
            </div>
            <div className="grid-2-col">
                <div className="grid-item__vertical">
                    <img src="assets/img/icon-instagram.png" alt="Instagram DoSushiArtesanal"/>
                    <a href="https://www.instagram.com/dosushiartesanal/"><p className="paragraph color_white">DoSushiArtesanal</p></a>
                </div>
                <div className="grid-item__vertical">
                    <img className="icon" src="assets/img/icon-phone.png" alt="+56 9 4850 2969"/>
                    <p className="paragraph color_white">+56 9 4850 2969</p>
                </div>
            </div>
        </div>
    </div>
)

export default ComoPedir