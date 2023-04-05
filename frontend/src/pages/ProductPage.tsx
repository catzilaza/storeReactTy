import { dataProducts } from "../data";
import { useParams, useLocation } from "react-router-dom";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import React, { useRef, useState } from "react";
import { addProduct } from "../store/dessertFeature/productSlice";
import Add from "../components/AddComponent";
import List from "../components/ListComponent";
import jwt from "jsonwebtoken";
import axios from "axios";

interface userData {
  user_name: string;
  user_firstname: string;
  user_lastname: string;
  user_email: string;
  user_level: string;
  user_timeStamp: string;
}
function ProductPage() {
  // let location = useLocation();
  // console.log("ProductPage() location: ", location);
  let { productId } = useParams();
  console.log("ProductPage() location: ", useParams());
  let productID: string = productId !== undefined ? productId : "";
  let userToken: any = localStorage.getItem("token");
  
  const [data, setData] = useState<userData[]>([]);
  const [error, setError] = useState<any>(null);
  //"https://uninterested-fawn-bathing-suit.cyclic.app/api/user"
  //http://localhost:5000/api/desserts
  //,{headers: {'Authorization': localStorage.getItem('token')}}
  async function getAlldata() {
    await axios
      .get("http://localhost:5000/api/user")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {        
        setError(error);
      });
  }
  React.useEffect(() => {
    getAlldata();
  }, []);

  return (
    <>
      <div style={{
          width: "100%",
          margin: "20px auto",
          padding: "50px",
          backgroundColor: "white",
          color: "black",    
          textAlign: "center",     
        }}>
        <Row>
          <Col>
            <h1>Product Page</h1>
            <img src={dataProducts[parseInt(productID)].image} alt="" />
          </Col>
          <Col>
            <Add productName={productId} />
            <List />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProductPage;
