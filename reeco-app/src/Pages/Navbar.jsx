import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import styled from "styled-components"
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { PiUserCircle } from "react-icons/pi";

 const Navbar = () => {
  const [query,setQuery]=useState("")
  const dispatch=useDispatch()
  let ref=useRef()


  
  

  useEffect(()=>{
   

  },[])

  
  return (
    <DIV>
      <Link to="/">𝑅𝑒𝑒𝒸𝑜</Link>
      <Link to="/">Store</Link>
      <Link to='/Orders'>Orders</Link>
      <Link to="/Analytics">Analytics</Link>
      
      <div id="search">
      <Link to='/Cart'><PiShoppingCartSimpleLight style={{fontSize:"30px "}} /></Link>
      </div> 
      <div id="Login">
      <Link to='/user'> <  PiUserCircle style={{fontSize:"30px "}} /></Link>
      </div>
    </DIV>
  )
}

export default  Navbar

const DIV=styled.div`
   display: flex;
    align-items:center;
    justify-content:space-evenly;
    text-decoration: none;
    gap: 25px;
    height: 45px;
    /* margin: 10px; */
    border-bottom:1px solid gray;
    background-color: #22c35e;
    color: white;
    #search{
      display: flex;
      justify-content: space-around;
      width: 40%;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
      
    }
    #search input{
      width: 80%;
      height: 25px;
      background-color:#e9e5e7;
      color: #0f0f0f;
      
      border: 2px solid #e03e59;
      font-size: medium;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    }
    input:hover{
      background-color:white;
      color:black;
    }
  
   
h3{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #e03e59;
  font-weight:1000;
  font-size: large;
}

`