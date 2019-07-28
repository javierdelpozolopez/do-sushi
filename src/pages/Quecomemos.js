import React from 'react';
// import { Glide } from 'react-glide';
import "react-glide/lib/reactGlide.css";


// const props: GlideProps = {
//     height: 600,
//     width: 600,
//     autoPlay: true,
//     autoPlaySpeed: 2000,
//     onSlideChange: () => console.log('slide changed'),
//     infinite: true,
//     dots: true
// }

const Quecomemos = () => (
    <div className="container">
        <div className="content">
            <div className="content__head">
                <h2 className="content__title">¿Qué comemos?</h2>
                <h3 className="content__subtitle"><span>En DO no tenemos carta fija,  trabajamos con ingredientes que cambian diariamente, </span>día a día la mar manda la frescura de sus productos y los potenciamos con hierbas y condimentos orgánicos.</h3>
            </div>
        </div>
        <div>
            {/* <Glide
                height={400}
                width={1200}
                autoPlay={false}
                dots={true}
                infinite={true}
            >
                <div><img src="assets/img/carrousel-image.png" alt="testimg" />asdf</div>
                <div><img src="assets/img/carrousel-image.png" alt="testimg" />fdsa</div>
                <div><img src="assets/img/carrousel-image.png" alt="testimg" />fdsa</div>
            </Glide> */}
        </div>
    </div>
)

export default Quecomemos