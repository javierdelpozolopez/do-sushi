import React, { Fragment } from "react"

import './../assets/css/index.scss';

import Mainmenu from './Mainmenu';
import Main from './Main';
import Esenciado from './Esenciado';
import Nosembarcamos from './Nosembarcamos';
import Quecomemos from './Quecomemos';
import ComoPedir from './ComoPedir';
import Ecologia from './ecologia';
import Hablemos from './hablemos';
import Footer from './footer';

const IndexPage = () => (
  <Fragment>
    <Mainmenu />
    <Main />
    <Esenciado />
    <Nosembarcamos />
    <Quecomemos />
    <ComoPedir />
    <Ecologia />
    <Hablemos />
    <Footer />
  </Fragment>
)

export default IndexPage
