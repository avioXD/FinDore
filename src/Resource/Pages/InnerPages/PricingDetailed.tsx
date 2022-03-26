import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Other_Service } from "../../../content/OtherServices";

function PricingDetailed() {
  let { _id } = useParams();
  let content = Other_Service.filter((x) => x._id === _id)[0];
  return (
    <Container fluid className=" ">
      <Container className="mx-auto mt-5 p-2">
        <Row>
          <Col sm={12} className="doted-background p-3 flex-center flex-column">
            <p className="title-primary h-1 animate-char-dark text-center">
              {content.label}
            </p>
            {/* <h1 className=" text-primary h-2   text-center">
              {" "}
              @ ₹ {content.price}
            </h1> */}
          </Col>
          <Col sm={6}>
            <Card className="card-list-group">
              <Card.Header className="flex-start">
                <i className="pi pi-eye"></i>
                About This Plan
              </Card.Header>

              <Card.Body className="p-2">
                <p className=" text-secondary  ">{content.about}</p>
              </Card.Body>
            </Card>
            <Card className="card-list-group">
              <Card.Header className="flex-start">
                <i className="pi pi-tags"></i>
                Services Covered
              </Card.Header>
              <Card.Body className="p-2">
                {content.service.map((x) => (
                  <p className="text-secondary ">
                    <i className="pi pi-box"></i>
                    {x.label}
                  </p>
                ))}
              </Card.Body>
            </Card>
            <Card className="card-list-group">
              <Card.Header className="flex-start">
                <i className="pi pi-credit-card"></i>
                Who Should Buy
              </Card.Header>
              <Card.Body className="p-2">
                {content.who_should_buy.map((x) => (
                  <p className="text-secondary ">
                    <i className="pi pi-box"></i>
                    {x.label}
                  </p>
                ))}
              </Card.Body>
            </Card>
            <Card className="card-list-group">
              <Card.Header className="flex-start">
                <i className="pi pi-file"></i>
                Documents Required
              </Card.Header>
              <Card.Body className="p-2">
                {content.doc_required.map((x) => (
                  <p className="text-secondary ">
                    <i className="pi pi-box"></i>
                    {x.label}
                  </p>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PricingDetailed;
