import React, { useEffect, useState } from 'react';
import MainScreen from './screens/MainScreen/MainScreen';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import './App.scss';
import katagana_ing from './assets/images/800px-Shodō.svg.png';

function App() {

  let [isLoading, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {

    console.log('use layout  effect');

    setIsLoading(false);

  }, [isLoading]);

  return (

    <main className="main">     

      {isLoading &&  <LoadingScreen/>}

      <MainScreen />

      <div className="main-background-shadow"></div>    

      <img className='letters-image-top' src={katagana_ing} alt="letters" />

    </main>

  );
}

export default App;


