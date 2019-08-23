import React from 'react';
//import { hasBasename } from 'history/PathUtils';


const Quecomemos = () => (
    <div className="container" id="que-comemos">
        <div className="content">
            <div className="content__head">
                <h2 className="content__title">¿Qué comemos?</h2>
                <h3 className="content__subtitle"><span>En DO no tenemos carta fija,  trabajamos con ingredientes que cambian diariamente, </span>día a día la mar manda la frescura de sus productos y los potenciamos con hierbas y condimentos orgánicos.</h3>
            </div>

            <div className="content__head">
                <h2 className="headline-2 color_white">SUSHI</h2>
                <h3 className="subtitle">OMAKASE 30/50 piezas</h3>
                <p className="body01"><span>Nuestra máxima esencia Do</span>, Variedad  de Makis, nigiris y sashimis, mariscos</p>
                <h2 className="body01"><span>50 piezas: $24.000 30 piezas: $15.000</span></h2>
            </div>
            <div className="content__grid grid-4-col">
                <img className="grid__image" src="assets/img/makis.jpg" alt="Makis"></img>
                <img className="grid__image" src="assets/img/nigiris.jpg" alt="Nigiris"></img>
                <img className="grid__image" src="./assets/img/sashimi.jpg" alt="Sashimi"></img>
                <img className="grid__image" src="./assets/img/mariscos.jpg" alt="Mariscos"></img>
            </div>
            <div className="content__head">
                <h3 className="subtitle">MORIAWASE 30 piezas</h3>
                <p className="body01">10 Sashimis, 10Nigiris, Mariscos y crustáceos</p>
                <h2 className="body01"><span>$17.500</span></h2>
            </div>
            <div className="content__grid grid-3-col">
                <img className="grid__image" src="assets/img/sashimi-02.jpg" alt="Sashimi"></img>
                <img className="grid__image" src="assets/img/niguiri-02.jpg" alt="Niguiri"></img>
                <img className="grid__image" src="assets/img/mariscos-rustaceos.jpg" alt="Mariscos"></img>
            </div>
            <div className="content__head">
                <h3 className="subtitle">SASHIMI</h3>
                <p className="body01">5/9/15 Cortes de Pescado, Pulpo o Locos</p>
                <h2 className="body01"><span>5 piezas: $5.000 - 9 piezas: $8.200 - 15 piezas: $13.500</span></h2>
            </div>
            <div className="content__grid grid-1-col">
                <img className="grid__image grid__image-max" src="./assets/img/sashimi-03.jpg" alt="Sashimi"></img>
            </div>

            <div className="content__head">
                <h2 className="headline-2 color_white">GOHAN</h2>
                <h3 className="body01 color-primary">Sashimis, ostión, mariscos, palta, encurtidos, salta Tare, arroz avinagrado condimentado con sésamo y algas Ajitsuke tamago (huevo)</h3>
                <h2 className="body01"><span>$9.000</span></h2>
            </div>
            <div className="content__grid grid-3-col">
                <img className="grid__image" src="assets/img/gohan-02.jpg" alt="Gohan"></img>
                <img className="grid__image" src="assets/img/gohan-01.jpg" alt="Gohan"></img>
                <img className="grid__image" src="assets/img/gohan-03.jpg" alt="Gohan"></img>
            </div>

            <div className="content__head">
                <h2 className="headline-2 color_white">SHIO RAMEN</h2>
                <h3 className="body01 color-primary">Caldo de pescado y cerdo, noodles frescos, pescado y mariscos, Ajitsuke tamago (huevo)  garnituras, nori, limón de Pica, aceite  de ajo y rica rica, salsa Tare.</h3>
                <h2 className="body01"><span>$8.500</span></h2>
            </div>
            <div className="content__grid grid-4-col">
                <img className="grid__image" src="assets/img/shio-ramen-02.jpg" alt="Shio Ramen"></img>
                <img className="grid__image" src="assets/img/shio-ramen-01.jpg" alt="Shio Ramen"></img>
                <img className="grid__image" src="assets/img/shio-ramen-03.jpg" alt="Shio Ramen"></img>
                <img className="grid__image" src="assets/img/shio-ramen-04.jpg" alt="Shio Ramen"></img>
            </div>

            <div className="content__head">
                <h3 className="content__subtitle">Acompaña tu pedido con jugos naturales bless o agua mineral.</h3>
            </div>
        </div>
    </div>
)

export default Quecomemos