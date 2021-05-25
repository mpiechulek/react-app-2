import React, { lazy, Suspense, useEffect, useState } from 'react';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import './App.scss';

const MainScreen = lazy(() => import('./screens/MainScreen/MainScreen'));

function App() {

  let [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {

    const interval = setInterval(() => {

      setIsLoading(false);

    }, 500);

    return () => clearInterval(interval);

  }, []);

  return (

    <main className="main">

      {/* {isLoading && <LoadingScreen />}      */}

      <Suspense fallback={<LoadingScreen />}>

        <MainScreen />        

      </Suspense>

      <div className="main-background-shadow"></div>

    </main>

  );

}

export default App;


