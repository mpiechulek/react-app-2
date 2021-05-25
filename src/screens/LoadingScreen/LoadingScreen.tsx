import React from 'react';
import backImageOne from './../../assets/svg/torii-gate-white.svg';

const LoadingScreen = () => {

    return (

        <div className="loading-screen ">

            <div className="">

                <h3 className="header-main-3 header-main-3--white margin-bottom-medium ">Loading...</h3>

                <img src={backImageOne} className="rotating-element" alt="tori"/>                  

            </div>

        </div>
    )
}

export default LoadingScreen
