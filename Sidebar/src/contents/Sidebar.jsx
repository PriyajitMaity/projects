import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../redux/sidebarSlice";
import AllProducts from "./AllProducts";

const Sidebar = () => {
    const isOpen =useSelector(state =>state.menu.isOpen);

    
    const dispatch =useDispatch();

    const handleCloseSideBar =() =>{
        dispatch(closeSidebar());
    } 

  return (
  <aside className={isOpen? "sidebar open" : "sidebar"}>
    
        <div className="bar-heading">
            <h1>My Shop </h1>
            <i onClick={handleCloseSideBar} className="fa-solid fa-xmark fa-3x"></i>
        </div>
        <div className="list-items">
            <ul>
                <li>
                    
                    <i className="fa-solid fa-house"></i>Home
                    
                </li>
                <li>
                    <span>
                <i className="fa-solid fa-shop"></i><AllProducts />
                </span> 
                </li>
                <li>
                    
                    <i className="fa-solid fa-house"></i>My Order
                    
                </li>
                <li>
                    
                    <i className="fa-solid fa-user"></i>My Account
                    
                </li>
                <li>
                    
                    <i className="fa-solid fa-car"></i>
                    Order Tracking
                    
                </li>
                <li>
                <i className="fa-brands fa-hire-a-helper"></i>Help & Suport    
                </li>
            </ul>
        </div>
        
  </aside>
)};

export default Sidebar;
