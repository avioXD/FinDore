import React from "react";
import {
  Button,
  Row,
  Col,
  Card,
  Container,
  Form,
  FloatingLabel,
} from "react-bootstrap";

function RequestToUs() {
  return (
    <Container className="mx-auto mt-4 p-3">
      <h1 className="title-secondary h-2 mb-3 w-100 text-center animate-char-dark">
        Request To Us
      </h1>
      <Row>
        <Col sm={8} className="mx-auto">
          <Card className="p-3 ">
            <p className="text-primary text-center">
              Don’t stress, just secure your financial goals!
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel controlId="floatingName" label="Name">
                  <Form.Control type="text" placeholder="Name" />
                </FloatingLabel>
                <Row>
                  <Col sm={6}>
                    <FloatingLabel controlId="floatingEmail" label="Email">
                      <Form.Control type="mail" placeholder="Email" />
                    </FloatingLabel>
                  </Col>
                  <Col sm={6}>
                    <FloatingLabel controlId="floatingPhone" label="Phone">
                      <Form.Control type="number" placeholder="Phone" />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" className="m-btn" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RequestToUs;
