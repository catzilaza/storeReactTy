import { dataProducts } from "../data";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../store/store";
import { useQuery } from "react-query";

interface dessertData {
  dessert_name: string;
  dessert_image: string;
  dessert_price: number;
}

function CardComponent(): JSX.Element {
  // const products = useAppSelector((state) => state.product.products);
  // const dispatch = useAppDispatch();

  // const [dataDessert, setDataDessert] = useState<dessertData[]>([]);
  // const [errorDessert, setErrorDessert] = useState<any>(null);

  //http://localhost:5000/api/desserts
  //https://stormy-teal-prawn.cyclic.app/api/desserts

  // async function getAlldessertData() {
  //   await axios
  //     .get("http://localhost:5000/desserts")
  //     .then((response) => {
  //       setDataDessert(response.data);        
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       setErrorDessert(error);
  //     });
  // }
  // React.useEffect(() => {
  //   getAlldessertData();
  // }, []);

  async function getAxiosDessert() {
    const { data }:any = await axios.get("https://crabby-teal-seal.cyclic.app/desserts")
    return data
  }

  function dessertQuery() {
    const { data, isLoading, isError, error } = useQuery<any>(
      "AxiosDessert",
      getAxiosDessert
    );

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error!</div>;
    }

    return (
      <div className="container">
        <h1>Dessert</h1>
        <Row>
        {data.map((product:any, id:any) => (
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
                <Link to={`product/${id}${product.dessert_name}`}>
                  <div className="d-grid">
                    <Button variant="primary" size="lg">
                      ซื้อ
                    </Button>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    );
  }

  //if (error) return `Error: ${error}`;
  // if (!dataDessert)
  //   return (
  //     <>
  //       "Loading data!"
  //       <div className="spinner-border text-primary" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </div>
  //     </>
  //   );

  //console.log("Card Component : ", data);

  return (
    <>
      {/* <Row>
        {dataDessert.map((product, id) => (
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
                <Link to={`product/${id}${product.dessert_name}`}>
                  <div className="d-grid">
                    <Button variant="primary" size="lg">
                      ซื้อ
                    </Button>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
      {dessertQuery()}
    </>
  );
}

export default CardComponent;
