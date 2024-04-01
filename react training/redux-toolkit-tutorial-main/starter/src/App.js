import Navbar from "./components/Navbar";
import CartConatiner from "./components/CartConatiner";
import { useDispatch, useSelector } from "react-redux";
import { calculateState, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";


function App() {
  const dispatch = useDispatch()
  const {isOpen} = useSelector(store=>store.modal)
  const { cartItems, isLoading } = useSelector(store=> store.cart)
  
  useEffect(()=>{
    dispatch(getCartItems())
  },[])

  useEffect(()=>{
    dispatch(calculateState())
  }, [cartItems])

  if(isLoading){
    return (
      <div className="loading">
        <h4>Loading...</h4>
      </div>
    )
  }
  return <main>
    {isOpen && <Modal/>}
    <Navbar/>
    <CartConatiner/>
  </main>;
}
export default App;
