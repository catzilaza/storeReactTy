import { dataProducts } from "../data";
import { useParams, useLocation } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

function ProductPage() {
  let location = useLocation();
  console.log("ProductPage() location: ", location);
  let { productId } = useParams();
  let productID: string = productId !== undefined ? productId : "";

  return (
    <>
      <h1>Product Page</h1>
      <img src={dataProducts[parseInt(productID)].image} alt="" />
    </>
  );
}

export default ProductPage;
