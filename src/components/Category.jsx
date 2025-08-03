
//import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {  getData } from '../Context/DataContext'

 const Category = () => {
      // const { categoryOnlyData} = getData();
      const navigate = useNavigate();
      const {data} = getData() 
     
        const getUniqueCategory = (data, property)=>{
       let newVAl = data?.map((curElm) =>{ 
         return curElm[property];
       })
        newVAl = [...new Set(newVAl)];
        return newVAl ;
     }
      const categoryOnlyData = getUniqueCategory(data,"category" )

//     const getUniqueCategory = (data, property)=>{
//       let newVAl = data?.map((curElm) =>{ 
//         return curElm[property];
//       })
//        newVAl = [...new Set(newVAl)];
//        return newVAl ;
//     }
//     const categoryOnlyData = getUniqueCategory(data,"category")
//     console.log(categoryOnlyData);

    // useEffect(() =>{
    //   fetchAllProducts();
    // },[])
  return (
    <div className='bg-[#101829]'>
      <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center   justify-center md:justify-around   py-7 px-4'>
          {
            categoryOnlyData?.map((item,index) =>{
              return <div key={index}>
                  <button onClick={()=>navigate(`/category/${item}`)}
                   className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-md cursor-pointer'> {item}</button>
                  </div>
            })
          }
      </div>
      
    </div>
  )
}

export default Category
