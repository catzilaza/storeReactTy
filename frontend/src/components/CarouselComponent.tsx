import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  return (
    <>
      <div
        style={{
          color: "white",
          fontSize: "50px",
          borderBlock: "2px solid gray",
          backgroundColor: "#2A3439",
        }}
      >
        ยินดีต้อนรับ
      </div>
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="../images/carouselImages/view1.jpg"
              alt="First slide"
              width={"800px"}
              height={"400px"}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="../images/carouselImages/view2.jpg"
              alt="Second slide"
              width={"800px"}
              height={"400px"}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/carouselImages/view4.jpg"
              alt="Third slide"
              width={"800px"}
              height={"400px"}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselComponent;
