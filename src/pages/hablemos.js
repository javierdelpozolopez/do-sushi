import React from 'react';


const Hablemos = () => (
    <div className="container hablemos__container" id="hablemos">
        <div className="content">
            <div className="content__head">
                <h2 className="content__title">Hablemos</h2>
                <h3 className="content__subtitle">Además de nuestro servicio tenemos un <span>área de eventos</span>, con demostraciones en vivo, Si quieres que conversemos de nuestra idea o generar alguna alianza… hablemos…</h3>
            </div>
            <div className="grid-3-col">
                <div className="grid-item__vertical">
                    <p className="subtitle strong">Mauricio Fuentes</p>
                    <p className="body01">Peje Rey Brand Bussines</p>
                    <a href="mailto:mauricio@dosushi.cl" className="paragraph">mauricio@dosushi.cl</a>
                </div>
                <div className="grid-item__vertical">
                    <p className="subtitle strong">Jorge Godoy</p>
                    <p className="body01">Cardumen Manager</p>
                    <a href="mailto:jorge@dosushi.cl" className="paragraph">jorge@dosushi.cl</a>
                </div>
                <div className="grid-item__vertical">
                    <p className="subtitle strong">Gonzalo Peñafiel</p>
                    <p className="body01">Lenguado Public Relations</p>
                    <a href="mailto:gonzalo@dosushi.cl" className="paragraph">gonzalo@dosushi.cl</a>
                </div>
            </div>
        </div>
    </div>
)


export default Hablemos