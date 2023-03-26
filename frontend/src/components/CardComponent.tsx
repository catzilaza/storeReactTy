import { dataProducts } from "../data";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";

interface dessertData {
  dessert_name: string;
  dessert_image: string;
  dessert_price: number;
}

function CardComponent() {
  //const [data, setData] = useState<any>([]);
  const [data, setData] = useState<dessertData[]>([]);  
  const [error, setError] = useState<any>(null);
  //http://localhost:5000/api/desserts
  async function getAlldata() {
    await axios
      .get("https://blue-jolly-snail.cyclic.app/api/desserts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      });
  }
  React.useEffect(() => {
    getAlldata();
  }, []);

  //console.log("Front : ", data)
  // data.map((item)=>{
  //   console.log("item : ", item.dessert_image)
  // })

  if (error) return `Error: ${error}`;
  if (!data)
    return (
      <>
        "Loading data!"
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );

  return (
    <>
      <Row>
        {data.map((product, id) => (
          <Col key={id}>
            <Card
              border="info"
              style={{ width: "18rem", height: "25rem", margin: "10px" }}
            >
              <Card.Img
                variant="top"
                src={product.dessert_image}
                alt={product.dessert_name}
                width="100%"
                height="100%"
              />
              <Card.Body>
                <Card.Title>{product.dessert_name}</Card.Title>
                <Card.Text>ราคา {product.dessert_price} บาท</Card.Text>
                <div className="d-grid">
                  <Button href={`product/${id}`} variant="primary" size="lg">
                    ซื้อ
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CardComponent;
