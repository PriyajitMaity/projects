import React, { useState } from "react";

const AllProducts = () => {
    const [isShow, setIsShow] =useState(false);
    
    const handleDropdown =() =>{
        setIsShow(!isShow);
    }
  return (
    <div className="category">
        <div onClick={handleDropdown}>
            All Products 
            <i className="fa fa-caret-down"></i>
        </div>
       {isShow && <ul>
           
            <li>Cameras</li>
            <li>Mobiles</li>
            <li>Clothes</li>
            <li>Laptop</li>
        </ul>}
    </div>
  );
};

export default AllProducts;
