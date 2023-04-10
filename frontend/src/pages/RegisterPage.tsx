import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";

interface userSchema {
  user_name: string;
  user_firstname: string;
  user_lastname: string;
  user_email: string;
  user_address: string;
  user_telephone: string;
  user_password: string;
  user_token: string;
}

interface dataSchema {
  data: string;
}

function RegisterPage() {
  const [data, setData] = useState<userSchema>();
  const [dataResponse, setDataResponse] = useState<any>();
  const [error, setError] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSchema>();

  const onSubmit = async (data: userSchema) => {
    console.log(data);
    await axios
      .post("https://crabby-teal-seal.cyclic.app/user", data)
      .then((response) => {
        console.log("Response! Register Page() ", response);
        setDataResponse(response.data);
      })
      .catch((error) => {
        console.log("Error! Register Page() ", error);
        //console.log("Error! Register Page() ", error);
        setError(error);
      });
  };

  if (error) {
    alert(`Error : ${error.response.data} `);
    //window.location.href = "http://localhost:5173/";
  } else {
    if (dataResponse) {
      
      alert(`Register success  And Redirect to SignIn Page`);
      window.location.href = "http://localhost:5173/signin";
      //window.location.href = "https://ariya-dessert-online.netlify.app/";
    }
  }

  return (
    <>
      <div
        style={{
          width: "600px",
          height: "50px",
          color: "#fff",
          fontSize: "30px",
          margin: "10px auto",
          backgroundColor: "#373739",
        }}
      >
        RegisterPage
      </div>
      <div
        style={{
          width: "600px",
          margin: "10px auto",
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

          <Form.Group className="mb-3" controlId="formUser_firstname">
            <Form.Label>User First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="user_firstname"
              {...register("user_firstname", { required: true, maxLength: 20 })}
            />
            {errors.user_firstname && (
              <p style={{ color: "red" }}>user_firstname is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_lastname">
            <Form.Label>User Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="user_lastname"
              {...register("user_lastname", { required: true, maxLength: 30 })}
            />
            {errors.user_lastname && (
              <p style={{ color: "red" }}>user_lastname is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_telephone">
            <Form.Label>User Telephone</Form.Label>
            <Form.Control
              type="text"
              placeholder="user_telephone"
              {...register("user_telephone", { required: true, maxLength: 10 })}
            />
            {errors.user_telephone && (
              <p style={{ color: "red" }}>user_telephone is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_address">
            <Form.Label>User Adderss</Form.Label>
            <Form.Control
              type="text"
              placeholder="user_address"
              {...register("user_address", { required: true, maxLength: 60 })}
            />
            {errors.user_address && (
              <p style={{ color: "red" }}>user_address is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_email">
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="user_email"
              {...register("user_email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.user_email && (
              <p style={{ color: "red" }}>user_email is required.</p>
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

export default RegisterPage;
