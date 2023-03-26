import Table from "react-bootstrap/Table";

function CartPage() {
  return (
    <>
      <div
        style={{
            width: "100%",
            height: "50px",
            color: "#fff",
            fontSize: "30px",
            margin: "10px auto",
            backgroundColor: "#373739",
          }}
      >
        CartPage
      </div>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CartPage;
