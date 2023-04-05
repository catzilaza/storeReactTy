import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";

interface userData {
  user_name: string;
  user_token: string;
}
function SignInPage() {
  const [dataResponse, setData] = useState<userData>();
  const [error, setError] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    await axios
      .post("http://localhost:5000/api/user/signin", data)
      .then((response) => {
        console.log("Ok! SignInPage() ", response);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error! SignInPage() ", error);
        setError(error);
      });
  };

  if (dataResponse) {
    const username = dataResponse.user_name;
    console.log(
      "Frontend SignIn Page : name = ",
      dataResponse?.user_name,
      "token = ",
      dataResponse?.user_token,
      "dataResponse : ",
      dataResponse
    );
    localStorage.setItem("token", dataResponse.user_token);    
    alert(
      `SingIn success : Welcom ${username} ${dataResponse} And Redirect to Home Page`
    );
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
