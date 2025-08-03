import React from "react";
import { getData } from "../Context/DataContext";

const FilterSection = ({search, setSearch, brand, setBrand, priceRange, setPriceRange, setCategory, category,handleCategoryChange, handleBrandChange}) => {
  const { categoryOnlyData, brandOnlyData } = getData();
  return (
    <div>
      <div className="bg-gray-100 mt-12 p-4 rounded-md h-max hidden md:block">
        <input onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="Search..."
          className="bg-white p-2 rounded-md border-gray-500"
        />
        {/*  Category Details  */}
        <h1 className="mt-5 font-semibold  text-xl"> Category </h1>
        <div className="flex flex-col gap-4 mt-3 ">
          
          {categoryOnlyData?.map((item, index) => {
            return (
              <div key={index} className="flex gap-3 ">
                <input type="checkbox" name={item} checked={category === item} value={item} onChange={handleCategoryChange}  />
                <button className="cursor-pointer uppercase "> {item} </button>
              </div>
            );
          })}
        </div>
        {/* Brand Name Data  */}
        <h1 className="mt-5 font-semibold  text-xl mb-4"> Brand </h1>
         
         
          {/* First time make then change //  <div className="flex flex-col gap-4 mt-3 ">
          {brandOnlyData?.map((item, index) => {
            return (
              <div key={index} className="flex gap-3 ">
                <input type="checkbox"/>
                <button className="cursor-pointer uppercase "> {item} </button>
              </div>
            );
          })}
        </div> */}

        <select name="" id="" className="bg-white w-full  p-2 border-3 border-gray-200  rounded-md"
         value={brand} onChange={handleBrandChange} >
            {
                brandOnlyData?.map((item,index) =>{  //
                    return <option className="font-semibold text-gray-600 font-serif " key={index}  value={item} > {item} </option>  
                     //  item ke name if to change .toUpperCase() u can use this method 
                })
            }

        </select>
          {/*  Price range  */}

           <h1 className="mt-5 font-semibold  text-xl mb-4"> Price Range  </h1>
            <div className="flex flex-col gap-3 "> 
                <label htmlFor=""> Price Range : ${priceRange[0]} - ${priceRange[1]} </label>
                <input type="range" min='0' max='5000' onChange={(e)=> setPriceRange([priceRange[0] , Number(e.target.value)])} value={priceRange[1]}   className="w-[100px]" />
            </div>
            <button className="bg-red-500 text-white rounded-md px-3 py-2 mt-6 cursor-pointer"
              onClick={() => {setSearch('') ;setCategory('All') ; setBrand('All') ; setPriceRange([0,5000])}} 
               >
              
              Reset Filters </button>
     </div>
    </div>
  );
};

export default FilterSection;
4