import React from 'react';
import MainScreen from './screens/MainScreen/MainScreen';
import './App.scss';
import katagana_ing from './assets/images/800px-Shodō.svg.png';

function App() {
  return (

    <main className="main">

      <div className="main-background-shadow"></div>

      <img className='letters-image-top' src={katagana_ing} alt="letters" />

      <MainScreen />      

    </main>

  );
}

export default App;
