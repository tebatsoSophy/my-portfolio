import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('Subscribing...');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="newsletter-bx">
              <Row>
                <Col lg={12} md={6} xl={5}>
                  <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
                </Col>
                <Col md={6} xl={7}>
                  <form onSubmit={handleSubmit}>
                    <div className="new-email-bx">
                      <input 
                        value={email}
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address" 
                        required
                      />
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                  {message && (
                    <div className={`newsletter-message ${status}`}>
                      {message}
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}