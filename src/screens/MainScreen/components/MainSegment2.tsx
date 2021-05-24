import backImageOne from './../../../assets/svg/torii-gate-white.svg';

const MainSegment2 = () => {

    return (

        <section className="main-container__segment-2">

            <img className="main-segment-icon-2 margin-bottom-small " src={backImageOne} alt="icon" />

            <h2 className="header-main-2 header-main-2--white main-segment-2-wrapper-header-margin-bottom">

                Tour information's

            </h2>

            <div className="main-segment-2-wrapper">

            
                <div className="main-segment-2-wrapper__wrap main-segment-2-wrapper__wrap--margin-bottom main-segment-2-wrapper__wrap--margin-right ">

                    <p className="paragraph-main paragraph-main--white margin-bottom-xsmall">
                        
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, repellat. Ipsam cupiditate suscipit doloremque repellendus aliquam. Pariatur.
                        
                    </p>

                    <p className="paragraph-main paragraph-main--white">

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, repellat. Ipsam cupiditate suscipit doloremque repellendus aliquam. Pariatur.
                        
                    </p>

                </div>

                <div className="main-segment-2-wrapper__wrap">

                    <p className="paragraph-main paragraph-main--white margin-bottom-xsmall ">

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, repellat. Ipsam cupiditate suscipit doloremque repellendus aliquam. Pariatur.

                    </p>

                    <p className="paragraph-main paragraph-main--white margin-bottom-xsmall ">
                        
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, repellat. Ipsam cupiditate suscipit doloremque repellendus aliquam. Pariatur.
                        
                    </p>

                    <button className="btn btn--dark">Check more</button>

                </div> 

            </div>

            {/*  */}          

        </section>

    )
}

export default MainSegment2