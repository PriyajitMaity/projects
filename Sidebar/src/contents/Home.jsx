import React, { useState } from "react";
import{ useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSidebar } from "../redux/sidebarSlice";

const Home = () => {
    const isOpen =useSelector(state =>state.menu.isOpen);
    const dispatch =useDispatch();

    const handleOpenSidebar =() =>{
        dispatch(setSidebar());       
    }

   
   
  return (
  <section className="section">
    <i onClick={handleOpenSidebar} className="fa-solid fa-bars fa-3x"></i>
  </section>
  );
};

export default Home;
