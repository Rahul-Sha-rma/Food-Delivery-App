import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              Experience the joy of every bite - our burgers are made with love, just for you.
              </p>
              <ul>
                <li>
                  <p>
                  Taste happiness in every bite. Our burgers bring people together.
                  </p>
                </li>
                <li>
                  <p>Savor the love and care in every bite of our delicious burgers.</p>
                </li>
                <li>
                  <p>
                  Indulge in a burger that feels like a warm hug from home.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
