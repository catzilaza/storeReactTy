import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

interface userSchema {
  user_name: string;
  user_firstname: string;
  user_lastname: string;    
  user_email: string; 
  user_address: string;
  user_telephone: string;
  user_password: string;
}

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSchema>();

  const onSubmit = async (data:userSchema) => {
    console.log(data); 
    await axios
    .post("http://localhost:5000/api/user/", data)
    .then((response) => {
      console.log(" Ok! registerDataOne() ", response);
    })
    .catch((error) => {
      console.log("Error! registerDataOne() ", error);        
    });
  };

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
              {...register("user_name", { required: true })}
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
              {...register("user_firstname", { required: true })}
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
              {...register("user_lastname", { required: true })}
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
              {...register("user_telephone", { required: true })}
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
              {...register("user_address", { required: true })}
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
              {...register("user_email", { required: true })}
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
              {...register("user_password", { required: true })}
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
