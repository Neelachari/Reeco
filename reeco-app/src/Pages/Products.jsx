import { Button } from '@chakra-ui/react'
import React from 'react'
import { PiPrinterLight } from "react-icons/pi";


export const Products = () => {



  return (
    <div>
      <div style={{width:"80%", margin:"auto", border:"1px solid gray", marginTop:"10px", height:"300px", padding:"10px", display:"flex", margin:"auto"}}>
         <div style={{marginLeft:"20px"}}>
            <input style={{width:"200px", borderRadius:"15px", border:"1px solid gray"}} type="text" placeholder='  Search'   />
         </div>
         <div style={{marginLeft:"60%", justifyContent:"center"}} >
           <div style={{display:"flex", justifyContent:"space-evenly"}}>
           <Button colorScheme='whatsapp' borderRadius='15px' variant='outline' fontSize={"10px"}>
    Add item
  </Button>
  <PiPrinterLight style={{fontSize:"30px", marginLeft:"100px", color:"#22c35e"}} />
           </div>


           


         </div>
        

      </div>
      
    </div>
  )
}
