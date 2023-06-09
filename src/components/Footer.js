import { Container, Row, Col } from "react-bootstrap";

import { MailchimpForm } from "./MailChimpForm";

import logo from "../assets/img/bmw_logo.png";

import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/bmw-group/"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Mike Bou Semaan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}