import image_4_1 from './../../../assets/images/adam-jang-zzn0yD84GkQ-unsplash.jpg';
import image_4_2 from './../../../assets/images/pexels-evgeny-tchebotarev-2235302.jpg';
import image_4_3 from './../../../assets/images/pexels-nien-tran-dinh-1654748.jpg';

const MainSegment4 = () => {

    return (

        <section className="main-container__segment-4">

            <div className="main-segment-4-wrapper">

                <div className="main-segment-4-wrapper__wrap">

                    <img className="main-segment-4-image margin-bottom-xsmall" src={image_4_1} alt="image_4_1" />

                    <h3 className="header-main-3 header-main-3--white margin-bottom-xsmall">History</h3>

                    <p className="paragraph-main paragraph-main--white margin-bottom-xsmall">

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, laboriosam? Illum, sunt recusandae repellat

                    </p>

                    <button className="btn btn--white">check out</button>

                </div>

                <div className="main-segment-4-wrapper__wrap main-segment-4-wrapper__wrap--margin-top">

                    <img className="main-segment-4-image margin-bottom-xsmall" src={image_4_2} alt="image_4_2" />

                    <h3 className="header-main-3 header-main-3--white margin-bottom-xsmall">Culture</h3>

                    <p className="paragraph-main paragraph-main--white margin-bottom-xsmall">

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, laboriosam? Illum, sunt recusandae repellat magnam asperiores nisi recusandae repellat magnam asperiores nisi.

                    </p>

                    <button className="btn btn--white">check out</button>

                </div>

                <div className="main-segment-4-wrapper__wrap">

                    <img className="main-segment-4-image margin-bottom-xsmall" src={image_4_3} alt="image_4_3" />

                    <h3 className="header-main-3 header-main-3--white margin-bottom-xsmall">Beuty</h3>

                    <p className="paragraph-main paragraph-main--white margin-bottom-xsmall">

                        Lorem ipsum, dolor sit amet  elit. Quasi, laboriosam? Illum, sunt recusandae repellat magnam asperiores nisi.

                    </p>

                    <button className="btn btn--white">check out</button>

                </div>

            </div>

        </section>
    )
}

export default MainSegment4