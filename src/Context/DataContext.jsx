import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);


export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  //   fetching all Products api
  const fetchAllProducts = async () => {
    try {
        const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')  // "https://fakestoreapi.com/products?limit=150"
         console.log(res);
        const productsData = res.data.products ;
        setData(productsData)  
    } catch (error) {
      console.log(error);
    }
  }  
  //  // category me se la ya data  ab yaha se all option hata diya hai or code category.jsx me send kiya
     const getUniqueCategory = (data, property)=>{
       let newVAl = data?.map((curElm) =>{ 
         return curElm[property];
       })
        newVAl = [  "All",...new Set(newVAl)];
        return newVAl ;
     }
      const categoryOnlyData = getUniqueCategory(data,"category" )
 // *****************************************   //   ***************************************************** // 
    const brandOnlyData = getUniqueCategory(data, 'brand')
  //  console.log(categoryOnlyData);
   
    

  return (
    <DataContext.Provider value={{data, setData , fetchAllProducts,categoryOnlyData,brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};


export const getData = () => useContext(DataContext); 