import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import smart from "../assets/img/idea.png";
import innovative from "../assets/img/rocket.png";
import supply from "../assets/img/supply-chain.png";
import family from "../assets/img/teamwork.png";
import colorsharp from "../assets/img/color-sharp.png";


export const Team = () => 
{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="team" id="teams">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="team-bx wow zoomIn">
                            <h2>Team</h2>
                            <p>As an innovations team, we are a group of individuals tasked with identifying, developing, and implementing new ideas or technologies to improve our company's products, services, or processes.<br></br> We work collaboratively to foster a culture of innovation and drive business growth through creativity and strategic thinking.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme team-slider">
                                <div className="item">
                                    <img src={smart} alt="Image" />
                                    <h5>Smart</h5>
                                </div>
                                <div className="item">
                                    <img src={supply} alt="Image" />
                                    <h5>Link Everything</h5>
                                </div>
                                <div className="item">
                                    <img src={innovative} alt="Image" />
                                    <h5>Innovative</h5>
                                </div>
                                <div className="item">
                                    <img src={family} alt="Image" />
                                    <h5>Family</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorsharp} alt="Image" />
        </section>
      )
}