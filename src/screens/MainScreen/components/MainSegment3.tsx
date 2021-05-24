import image_1 from './../../../assets/images/pexels-felipe-alves-4179793.jpg';
import icon_1_black from './../../../assets/svg/torii-gate-black.svg';

const MainSegment3 = () => {

    return (

        <section className="main-container__segment-3">

            <div className="main-segment-3-wrapper">

                <img className="main-segment-icon-3 margin-bottom-small " src={icon_1_black} alt="icon" />

                <h1 className="header-main-2 margin-bottom-small ">

                    The journey

                </h1>

                <p className="paragraph-main margin-bottom-small ">

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quam cumque consequatur vitae non, aliquid perspiciatis quis iusto unde voluptates

                </p>

            </div> 

            <img className="main-segment-image-3" src={image_1} alt="image_2" />

        </section>
    )
}

export default MainSegment3