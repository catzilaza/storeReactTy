import React from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useAppDispatch } from "../store/store";
import { addProductToCart } from "../store/feature/dessert/dessertSlice";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Add = (props: any) => {
  const dispatch = useDispatch();

  // const token: any = localStorage.getItem("token");
  // const expirationDate = localStorage.getItem("expiresIn");
  // const user_email = localStorage.getItem("user_email");

  // console.log("Add Component : Token  = ", token);
  // console.log("Add Component : expirationDate  = ", expirationDate);
  // console.log("Add Component : user_email  = ", user_email);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    dispatch(
      addProductToCart({ name: props.productName, quantity: data.productQuantity, price:(59 * data.productQuantity), image:"" })
    );
  };

  // function VerifyToken() {
  //   jwt.verify(token, "123456", function (err: any, decoded: any) {
  //     if (!err) {
  //       console.log("Add Component : VerifyToken()  = ", decoded);
  //     } else {
  //       console.log("Add Component : VerifyToken()  = ", err);
  //     }
  //   });
  // }
  // VerifyToken();
  return (
    <>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="m-3" controlId="formUser_name">
            <Form.Label>{props.productName}</Form.Label>
            <Form.Control
              placeholder="จำนวน"
              {...register("productQuantity", { required: true })}
            />
            {errors.productQuantity && (
              <p style={{ color: "red" }}>productQuantity is required.</p>
            )}
          </Form.Group>

          <Form.Group className="d-grid">
            <Button variant="primary" type="submit">
              Add to Cart
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Add;
