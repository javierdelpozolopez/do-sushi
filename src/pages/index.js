import React, { Fragment } from "react"

import './../assets/css/index.scss';

import Mainmenu from './Mainmenu';
import Main from './Main';
import Esenciado from './Esenciado';
import Nosembarcamos from './Nosembarcamos';
import Quecomemos from './Quecomemos';
import ComoPedir from './ComoPedir';
import Ecologia from './Ecologia';
import Hablemos from './Hablemos';
import Call from './Call';
import Footer from './footer';

const IndexPage = () => (
  <Fragment>
    <Mainmenu />
    <Main />
    <Call />
    <Quecomemos />
    <ComoPedir />
    <Esenciado />
    <Nosembarcamos />
    <Ecologia />
    <Hablemos />
    <Footer />
  </Fragment>
)

export default IndexPage
