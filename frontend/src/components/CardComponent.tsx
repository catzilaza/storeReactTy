import { dataProducts } from "../data";
import { Card, Button, Row, Col } from "react-bootstrap";
function CardComponent() {
  return (
    <>
      <Row>
        {dataProducts.map((product, id) => (
          <Col key={id}>
            <Card
              border="info"
              style={{ width: "18rem", height: "25rem", margin: "10px" }}
            >
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                width="100%"
                height="100%"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>ราคา {product.price} บาท</Card.Text>
                <div className="d-grid">
                  <Button href={`product/${id}`} variant="primary" size="lg" >
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
