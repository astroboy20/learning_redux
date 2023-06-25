import CarContainer from "./components/CarContainer";
import NavBar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals,getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const { cartItems,isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if(isLoading){
    return <div className="loading">
      <h1>Loading...</h1>
    </div>
  }

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CarContainer />
    </main>
  );
}
export default App;
