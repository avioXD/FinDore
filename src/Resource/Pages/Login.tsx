import React, { useState } from "react";
import { default as heroImg } from "../../assets/images/loginHero.svg";
import { default as googleLogin } from "../../assets/images/google-login.svg";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";

function Login() {
  return (
    <Container fluid className="doted-background">
      <Container className="mx-auto h-100  p-2   ">
        <Row>
          <Col sm={12}>
            <Card className="card-list-group">
              <Card.Header>
                <h2 className="h-2">Login</h2>
              </Card.Header>

              <Card.Body>
                <Row>
                  <Col sm={6}>
                    <img src={heroImg} alt="" />
                  </Col>
                  <Col sm={6} className=" mt-4">
                    <div className="mx-auto m-w-30 mt-4">
                      <Form>
                        <Form.Group className="" controlId="formBasicEmail">
                          <FloatingLabel
                            className="mb-3"
                            controlId="floatingEmail"
                            label="Email"
                          >
                            <Form.Control type="mail" placeholder="Email" />
                          </FloatingLabel>
                          <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                          >
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />
                          </FloatingLabel>
                        </Form.Group>
                        <div className="flex-center flex-column p-3">
                          <Button
                            variant="primary"
                            className="m-btn  "
                            type="submit"
                          >
                            Login
                          </Button>
                          <p className="text-between mt-3">Forgot Password?</p>
                        </div>
                      </Form>
                      <p className="text-divider text-primary">OR</p>
                      <img
                        className="m-btn cursor-pointer"
                        src={googleLogin}
                        alt=""
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
