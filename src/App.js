import React from 'react';
import Mainmenu from './components/Mainmenu.jsx';
import Main from './components/Main.jsx';
import Esenciado from './components/Esenciado.jsx';
import Nosembarcamos from './components/Nosembarcamos.jsx';
import Quecomemos from './components/Quecomemos.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Mainmenu />
      <Main/>
      <Esenciado/>
      <Nosembarcamos/>
      <Quecomemos/>
    </div>
  );
}

export default App;
