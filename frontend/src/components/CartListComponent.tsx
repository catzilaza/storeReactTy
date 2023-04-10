
import Table from "react-bootstrap/Table";
import { useAppSelector } from "../store/store";
import { Button } from "react-bootstrap";

const List = () => {
  const products = useAppSelector((state) => state.product.products);
 
  let sumTotal = 0;
  
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
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{index}</td>                
                <td>{index}</td>
                <td>{item.dessert_name}</td>
                <td>{item.dessert_price * item.dessert_quantity}</td>
                <td>{item.dessert_quantity}</td>
                <td>{sumTotal += item.dessert_price * item.dessert_quantity}</td>
              </tr>              
            ))}
            <tr>
              <td colSpan={6}> Total : {sumTotal}</td>
            </tr>
          </tbody>
        </Table>
        <div>
          <Button className="mt-3" size="lg"> Payment By Internet Banking</Button>
        </div>
        <div>
          <Button className="mt-3" size="lg"> Payment By Credit Card</Button>
        </div>
        
      </div>
    </>
  );
};

export default List;
