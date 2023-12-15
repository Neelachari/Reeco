import { Button } from '@chakra-ui/react';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { LuMilk } from "react-icons/lu";
import { GiMilkCarton } from "react-icons/gi";
import { PiBowlFoodLight } from "react-icons/pi";
import { MdAcUnit } from "react-icons/md";
import { Products } from './Products';
import { useSelector } from 'react-redux';

export const Store = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    const data=useSelector((Store)=>Store.productReducer.products)
    

    var Totalprice=0
    for(let el of data ){
      Totalprice+=+(el.price)*(el.qty)
    }
    
  return (
    <div>
    <div style={{width:"100%", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding:"25px 0px", }}>
        <div style={{width:"80%", margin:"auto", marginTop:"5px"}} >
            <div style={{display:"flex", margin:"auto", marginLeft:"20px", alignItems:"center"}}>Order  <div style={{marginLeft:"10px", marginRight:"10px", justifyContent:"center"}}><IoIosArrowForward/></div><span style={{textDecoration:"underline"}}>Order 32457ABC</span></div>
        </div>
        <div style={{width:"80%",marginTop:"10px", marginLeft:"150px", textAlign:"left", display:"flex"}}>
            <div style={{fontWeight:"bold", fontSize:"25px"}}><h1>Order 32457ABC</h1></div>
            <div style={{marginLeft:"60%"}}>
            <Button colorScheme='whatsapp' borderRadius='15px' variant='outline'>
    Back
  </Button>
  <Button colorScheme='whatsapp' borderRadius='15px' variant='solid' br={'50%'} ml={"10px"}>
    Aprove order
  </Button>
            </div>
        </div>
        

       
    </div>
    <div>
    <table style={{ width: '80%', margin: 'auto', border: '2px solid gray', borderCollapse: 'collapse', marginTop:"20px" }}>
      <thead>
        <tr>
          <th style={{ borderRight: '2px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"gray" }}>Supplier</th>
          <th style={{ borderRight: '2px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"gray" }}>Shipping Date</th>
          <th style={{ borderRight: '2px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"gray" }}>Total</th>
          <th style={{ borderRight: '2px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"gray" }}>Category</th>
          <th style={{ borderRight: '2px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"gray" }}>Department</th>
          <th style={{ borderRight: '2px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"gray" }}>Status</th>
        </tr>
      </thead>
      <tbody>
  <tr>
    <td style={{ borderRight: '2px solid gray', padding: '2px', fontWeight:"bold" }}>East Cost Fruits <br /> & vegitables </td>
    <td style={{ borderRight: '2px solid gray', padding: '2px', fontWeight:"bold", fontSize:"small" }}>{formattedDate}</td>
    <td style={{ borderRight: '2px solid gray', padding: '2px', fontWeight:"bold", fontSize:"small" }}>  ${Totalprice}</td>
    <td style={{ borderRight: '2px solid gray', padding: '2px', fontWeight:"bold", fontSize:"small" }}> <div style={{display:"flex", justifyContent:"center"}}><LuMilk style={{fontSize:"20px "}} /> <GiMilkCarton style={{fontSize:"20px "}} /> <PiBowlFoodLight style={{fontSize:"20px "}} /> <MdAcUnit style={{fontSize:"20px "}} />  </div> </td>
    <td style={{ borderRight: '2px solid gray', padding: '2px', fontWeight:"bold", fontSize:"small" }}>300-400-678</td>
    <td style={{ borderRight: '2px solid gray', padding: '2px',  fontWeight:"bold" }}>Awating your <br /> approvel</td>
  </tr>
  
</tbody>
    </table>
    <div>
        <Products/>
    </div>
    </div>
    </div>
  )
}

