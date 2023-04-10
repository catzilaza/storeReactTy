import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../store/store";
import { loginUser } from "../store/userFeature/userSlice";

export interface User {
  _id: string;
  user_name: string;
  user_firstname: string;
  user_lastname: string;
  user_telephone: string;
  user_address: string;
  user_email: string;
  user_password: string;
  user_token: string;
  user_level: string;
}

function SignInPage() {
  const [dataResponse, setResData] = useState<User>();
  const [error, setError] = useState<any>(null);

  const user = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();
  //const userStore: User[] = [];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    await axios
      .post("http://localhost:5000/user/signin", data)
      .then((response) => {
        console.log("Ok! SignInPage() ", response);
        setResData(response.data);
        dispatch(loginUser(response.data));
      })
      .catch((error) => {
        console.log("Error! SignInPage() ", error);
        setError(error);
      });
  };

  if (dataResponse) {    
    localStorage.setItem("token", dataResponse.user_token);
    alert(`SingIn success : Welcom  ${dataResponse.user_name}  And Redirect to Home Page`);
    //window.location.href = "http://localhost:5173/";
    //window.location.href = "https://ariya-dessert-online.netlify.app/";
  }

  //console.log("Frontend SignIn Page : ", data?.user_name,data?.user_token);

  return (
    <>
      <div
        style={{
          width: "600px",
          height: "50px",
          color: "#fff",
          fontSize: "30px",
          margin: "40px auto",
          backgroundColor: "#373739",
        }}
      >
        SignIn Page
      </div>
      <div
        style={{
          width: "600px",
          margin: "20px auto",
          padding: "50px",
          backgroundColor: "#373739",
          color: "#fff",
          textAlign: "left",
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formUser_name">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              placeholder="user_name"
              {...register("user_name", { required: true, maxLength: 15 })}
            />
            {errors.user_name && (
              <p style={{ color: "red" }}>name is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_emai">
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="user_emai"
              {...register("user_emai", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.user_emai && (
              <p style={{ color: "red" }}>user_emai is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-5" controlId="formUser_password">
            <Form.Label>User Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="user_password"
              {...register("user_password", {
                required: true,
                maxLength: 15,
                minLength: 6,
              })}
            />
            {errors.user_password && (
              <p style={{ color: "red" }}>user_password is required.</p>
            )}
          </Form.Group>

          <Form.Group className="d-grid">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default SignInPage;
