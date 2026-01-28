import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <footer className="footer">
     
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="footer-logo">
              <h3>Tebatso Sophy</h3>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/tebatso-mahlathini-30864b256/"><span>LinkedIn</span></a>
              <a href="https://github.com/tebatsoSophy"><span>GitHub</span></a>
             
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}