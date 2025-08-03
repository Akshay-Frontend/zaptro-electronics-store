import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const ProductListView = ({product}) => {
const navigate = useNavigate()
const {addToCart} = useCart();


  return (
    <div className='space-y-4 m-3 rounded  '>
    <div className='bg-gray-100 flex gap-9 items-center p-3 rounded '> 
     <img src={product.image} alt={product.title} className=' md:h-60  md:w-60  h-25 w-25   rounded  cursor-pointer' onClick={()=> navigate(`/products/${product.id}`)} />
     <div className='space-y-2'> 
      <h1 className='font-bold  md:text-xl text-lg md:line-clamp-3 line-clamp-2 hover:text-red-400  md:w-full '> {product.title } </h1>
      <p className=' font-semibold flex items-center md:text-lg text-sm  '> <span className=' md:text-4xl text-2xl'> ${product.price } </span>  ( {product.discount}%off ) </p>
      <p> FREE  delivery <br /> 
         <h1 className=' hover:text-red-400 cursor-pointer'>{new Date().toUTCString().slice(0, 17)}</h1> 
          Or fastest <span className='font-bold text-gray-700'> delivery Tomorrow....   </span>  </p> 
      <button  onClick={() => addToCart(product)}
       className='bg-red-500 text-white px-4 py-2 rounded cursor-pointer'> Add to Cart </button>
     </div>
     </div>
    </div>
  )
}

export default ProductListView
