import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Newsletter />
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="footer-logo">
              <h3>Tebatso</h3>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><span>LinkedIn</span></a>
              <a href="#"><span>GitHub</span></a>
              <a href="#"><span>Twitter</span></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}