import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { default as HeroImg } from "../../assets/images/hero-img.svg";
import { default as whyUs } from "../../assets/images/why-us.svg";
import { default as Pricing } from "../../assets/images/pricing.svg";
import { hero_swiper_content } from "../../assets/content/content";

const CardComp = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.value.label}</Card.Title>
        <Card.Text>{props.value.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export const Home = () => {
  const [radioValue, setRadioValue] = useState("1");

  const radios: any = [
    { name: "Personal", value: "1" },
    { name: "Business", value: "2" },
  ];

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center flex-column c-background"
      >
        <Container className="mx-auto">
          <Row>
            <Col sm={12} className="mx-auto d-flex justify-content-center">
              <img src={HeroImg} alt="" />
            </Col>
            <Col sm={12} className="d-flex justify-content-center">
              <div className="p-3 my-auto mt-4 ">
                <p className="title-primary text-warp text-center animate-char">
                  Welcome to FinDoor
                </p>
                <p className="text-white text-center">
                  Committed towards eminent tax & financial assistance!
                </p>
                <div className=" flex-center">
                  <Button variant="thin" className="m-btn">
                    Plans and Pricing
                  </Button>
                  <Button
                    variant="outline-light"
                    className="m-btn-outline mx-2"
                  >
                    Get Quotation
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="p-3 mx-auto mt-5">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            freeMode={true}
            autoplay={true}
            pagination={{ clickable: true }}
          >
            {hero_swiper_content.map((x) => (
              <>
                {" "}
                <SwiperSlide className="flex-center">
                  <CardComp value={x} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Container>
      </Container>
      <Container className="mx-auto mt-5">
        <Row>
          <Col sm={6} className="flex-center">
            <div className="p-2">
              <img src={whyUs} alt="" />
            </div>
          </Col>
          <Col sm={6} className="flex-center">
            <Container className="text-start  ">
              <h1 className="title-secondary mb-2 animate-char-dark">
                Who We are?
              </h1>
              <h5 className="subtitle-primary mt-2">
                Focused on trouble free Fin-ancial solutions!
              </h5>
              <p className="text-sm">
                FinTaxTic is a finance and tax advisory start-up conceived and
                founded with a vision of making India more Tax & Financially
                literate. As a financial advisory, we feel that knowledge should
                be free and everyone should have access to it. It is in fact
                said that none of school/college teaches us the basics of tax
                returns and tax savings although everyone has to ultimately
                manage their finance and pay taxes after a certain age. Because
                of lack of knowledge and awareness related to tax and finance,
                either people become too conservative and park their savings in
                bank accounts or fixed deposits yielding real negative return
                after adjusting tax and inflation; or invest in risky assets
                (such as shares, mutual funds) without prior knowledge and later
                end up making losses...{" "}
                <a className="text-link" href="#">
                  {"Learn More >>"}
                </a>
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container className="p-3 mx-auto">
        <Row>
          <Col sm={6} className="flex-center flex-column text-center">
            <h1 className="title-secondary animate-char-dark">
              Pricing Plans!
            </h1>
            <h5 className="subtitle-primary  ">
              Explore our range of affordable service plans
            </h5>
            <ButtonGroup className="mt-3">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={
                    radioValue === idx
                      ? "primary m-btn"
                      : "outline-primary m-btn-outline"
                  }
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
          <Col sm={6} className=" flex-center flex-column">
            <div className="p-4 mx-auto">
              <img src={Pricing} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mx-auto">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          autoplay={true}
          pagination={{ clickable: true }}
        >
          {hero_swiper_content.map((x) => (
            <>
              {" "}
              <SwiperSlide className="flex-center">
                {/* <CardService value={x} /> */}
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </Container>
    </>
  );
};
