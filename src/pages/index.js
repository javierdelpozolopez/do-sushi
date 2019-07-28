import React, { Fragment } from "react"

import './../assets/css/index.scss';

import Mainmenu from './Mainmenu';
import Main from './Main';
import Esenciado from './Esenciado';
import Nosembarcamos from './Nosembarcamos';
import Quecomemos from './Quecomemos';

const IndexPage = () => (
  <Fragment>
    < Mainmenu />
    <Main />
    <Esenciado />
    <Nosembarcamos />
    <Quecomemos />
  </Fragment>
)

export default IndexPage
