

 //************************************** first ********************************* */
 import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

 export const CartContext = createContext(null);

 export const CartProvider = ({ children }) => {
   const [cartItem, setCartItem] = useState([]);

   const addToCart = (product) => {
     // agar ak hi product bar bar add kar ra hai hai to quantity bad jay e ngi  product same rah e nga okk ...
     const itemInCart = cartItem.find((item) => item.id === product.id);
     if (itemInCart) {
      //  increase Quantity
       const updatedCart = cartItem.map((item) =>
         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
     setCartItem(updatedCart);
     toast.success("Product quantity Increased ")
     }  else{    
       setCartItem([...cartItem, {...product, quantity: 1}]);
       toast.success("Product is Added  to cart ")
     }//console.log(cartItem);
   };

//   // increase item 1234

   const updatedQuantity = (productId, action) =>{
     setCartItem(     
     cartItem.map(item =>{
    if(item.id === productId) {
     let newUnit  = item.quantity;
     if(action === "increase") {
       newUnit = newUnit +1 
       toast.success("Quantity is increase")
     } else if (action === "decrease") {
       newUnit = newUnit -1 ; 
          toast.success("Quantity is decrease")
     }
     return newUnit > 0 ?{...item, quantity:newUnit} : null
    }
    return item ;
    }).filter(item   => item != null) // 0  no use this is delete product item 
  
   )
   }
    const deleteItem = (productId) => {
     setCartItem(cartItem.filter(item => item.id !== productId))
      toast.success("Product is deleted from cart  ")
    }
   return (
     <CartContext.Provider value={{ cartItem, setCartItem, addToCart,updatedQuantity, deleteItem}}>
     {children}
   </CartContext.Provider>
  );
 };

 export const useCart = () => useContext(CartContext);
