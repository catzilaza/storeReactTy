import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
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
        RegisterPage
      </div>
      <div
        style={{
          width: "600px",
          margin: "20px auto",
          padding: "50px",
          backgroundColor: "#373739",
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formUser_name">
            <Form.Control
              placeholder="user_name"
              {...register("user_name", { required: true })}
            />
            {errors.user_name && (
              <p style={{ color: "red" }}>name is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_firstname">
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
            <Form.Control
              type="text"
              placeholder="user_lastname"
              {...register("user_lastname", { required: true })}
            />
            {errors.user_lastname && (
              <p style={{ color: "red" }}>user_lastname is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_age">
            <Form.Control
              type="text"
              placeholder="user_age"
              {...register("user_age", { required: true, pattern: /\d+/ })}
            />
            {errors.user_age && (
              <p style={{ color: "red" }}>user_age is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_telephone">
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
            <Form.Control
              type="text"
              placeholder="user_address"
              {...register("user_address", { required: true })}
            />
            {errors.user_address && (
              <p style={{ color: "red" }}>user_address is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_emai">
            <Form.Control
              type="email"
              placeholder="user_emai"
              {...register("user_emai", { required: true })}
            />
            {errors.user_emai && (
              <p style={{ color: "red" }}>user_emai is required.</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUser_password">
            <Form.Control
              type="password"
              placeholder="user_password"
              {...register("user_password", { required: true })}
            />
            {errors.user_password && (
              <p style={{ color: "red" }}>user_password is required.</p>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default RegisterPage;
