import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

function SignInPage() {
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
              {...register("user_name", { required: true })}
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
              {...register("user_emai", { required: true })}
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

export default SignInPage;
