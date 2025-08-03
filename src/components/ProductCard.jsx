
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';


const ProductCard = ({product}) => {
  const navigate = useNavigate()
   // console.log(product);

   const {addToCart , cartItem} = useCart()
   console.log(cartItem);
   
      
  return (
    <div>
      <div className='border relative border-gray-200 rounded-2xl cursor-pointer w-[200px] hover:scale-105 hover:shadow-2xl transition-all p-1 h-[300px] m-6'>
      <img src={product.image} alt=""  className='bg-gray-100 aspect-square' onClick={()=>navigate(`/products/${product.id}`)}/>
      <h1  className='line-clamp-2 p-2 font-semibold'> {product.title} </h1>
      <p className='my-2 text-lg text-gray-800 font-bold'> ${product.price} </p>
        <button   onClick={()=>addToCart(product)}
        className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer  flex gap-1 items-center justify-center font-semibold mt-4'> <IoCartOutline  className='w-6 h-6' /> Add To Cart </button>
      </div>
    </div>
  )
}

export default ProductCard
