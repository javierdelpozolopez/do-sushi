import React from 'react';

const Ecologia = () => (
    <div className="content" id="ecologico">
    <div className="grid-40-60">
        <div className="left-content">
            <img src="assets/img/eco-3-image.png" alt="ecologico"/>
        </div>
        <div className="right-content">
            <div className="headline-content">
                <h2 className="content__title--left">120% ecológico</h2>
                <h3 className="content__subtitle color_primary text-align-left">Nos preocupamos de nuestro impacto medioambiental, amamos tanto el mar y nuestra tierra, que lo cuidamos y protejemos con distintos actos.</h3>
            </div>
            <div className="grid-20-80">
                <img src="assets/img/icon-fish.png" alt="fish"></img>
                <p className="body02"><span>Apoyamos la pesca artesanal</span><br></br>no acudimos a grandes cadenas, ni menos salmoneras, de esta forma cuidamos el equilibrio y la sobre explotación de nuestras costas.</p>
                <img src="assets/img/icon-fresh.png" alt="fresh"></img>
                <p className="body02"><span>Nuestras hierbas y condimentos son 100%  organicas</span><br></br>Tenemos huertos limpios de cualquier tipo de pesticidas o contaminación.</p>
                <img src="assets/img/icon-eco.png" alt="eco"></img>
                <p className="body02"><span>Somos pioneros en utilizar envases reciclables</span><br></br>en todos nuestros pedidos, así generamos impacto en tu experiencia y no en el medio ambiente.  </p>
            </div>
        </div>
    </div>
    </div>
)

export default Ecologia