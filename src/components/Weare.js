import { Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { WeareCard } from "./weareCard";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import germany from "../assets/img/germany.png";
import world from "../assets/img/language.png";
import lebanon from "../assets/img/lebanon.png";


export const Weare = () => {


    const countries = [
        {
          title: "We are from",
          description: "Germany",
          imgUrl: germany,
        },
        {
          title: "We are from",
          description: "The whole World",
          imgUrl: world,
        },
        
        {
            title: "We are from",
            description: "Lebanon",
            imgUrl: lebanon,
          },
      ];


    return (
        <section className="weare" id="weare">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>What we do</h2>
                    <p>Discover where we are from and what we do at Think Tank.</p>
                    <Tab.Container id="weare-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Where we're from</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">What we do</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              countries.map((country, index) => {
                                return (
                                  <WeareCard
                                    key={index}
                                    {...country}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>We are an innovations team called “ Think Tank” that is part of the Supply Chain department at BMW. We solve the hardest challenges related to supply chain and digitilazation. Our team is a diverse team, where we have students and full timers from different countries around the world.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
}