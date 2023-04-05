
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../store/store";

const List = () => {
  const products = useAppSelector((state) => state.product.products);

  console.log("List = () : ", products)

  return (
    <>
      <div>
        <p>List Component</p>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Items</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>1</td>                
                <td>---</td>
                <td>{item.name}</td>
                <td>---</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default List;
