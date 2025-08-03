import Lottie from "lottie-react"; // Add this line at the top
import React, { useEffect } from "react";
import FilterSection from "../components/FilterSection";
import Loading from '../assets/Loading4.webm'
import {  getData } from '../Context/DataContext'
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Pagination from "../components/Pagination";
import notfound from '../assets/notfound.json'
import MobileFilter from "../components/MobileFilter";


const Products = () => {
     // Use to this functionality another Components it FilterSection 
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] =useState("All");
  const [brand ,setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0,5000])
  const [page, setPage] = useState(1)
  const   [openFilter, setOpenFilter] = useState(false)

  const handleCategoryChange = (e)=>{
      setCategory(e.target.value)
      setPage(1)
    // console.log(category); 
  } ;

   const handleBrandChange = (e)=>{
     setBrand(e.target.value) 
     setPage(1) 
     window.scrollTo(0,0)
  } ;
    const filterData =  data?.filter((item) => 
    item.title.toLowerCase().includes(search.toLowerCase()) && 
    (category === "All" || item.category === category) &&
    (brand === "All" || item.brand === brand) && 
    (item.price >= priceRange[0] && item.price <= priceRange[1]) 
    ) ;

    const pageHandler = (selectedPage) => {
      setPage(selectedPage)
    }

    const dynamicPage = Math.ceil(filterData?.length/8)

// ******************************************  use the Components FilterSection ************************************
   useEffect(() => {
     fetchAllProducts();
     window.scroll(0,0)
   }, []);
     
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
       <MobileFilter openFilter={openFilter} setOpenFilter={setOpenFilter}  search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleBrandChange={handleBrandChange} handleCategoryChange={handleCategoryChange}   />

        {data?.length > 0 ? (

          <>  
          {/* *****************************************    Filter Section Components******************************** */}
          <div className="flex gap-8">
            <FilterSection  search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleBrandChange={handleBrandChange} handleCategoryChange={handleCategoryChange}    />

            {
              filterData.length > 0 ? (
               <div className="flex flex-col justify-center items-center "> 
                 <div className="grid grid-cols-2  md:grid-cols-4 md:gap-6 gap-30   mt-10">
              {  
              // ************************************** before use in data then use to  filterData ******************************
              filterData?.slice(page * 8-8 ,page *8).map((product, index ) =>{
                  return <ProductCard key={index}  product={product}/>
                })
              }
              </div>
               <Pagination dynamicPage={dynamicPage} pageHandler={pageHandler} page={page} />
               </div> 
               ) :
                (
                <div className="flex justify-center items-center md:h-[600px ] md:w-[900px] mt-15 "> 
                <Lottie animationData={notfound} className='w-[500px]' />
                   </div>
              )
            }
           
             
          </div>
          
          </>
          
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
