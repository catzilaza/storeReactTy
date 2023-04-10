import Table from "react-bootstrap/Table";
import { useAppSelector } from "../store/store";
import CartList from "../components/CartListComponent";

function CartPage() {
  const products = useAppSelector((state) => state.product.products);

  console.log("CartPage() : ", products);

  return (
    <>
      <CartList />
    </>
  );
}

export default CartPage;
