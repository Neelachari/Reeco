import { Button, Img, useDisclosure,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { PiPrinterLight } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, updateProductStatus } from '../Components/Redux/Produx/action';
import { useLocation, useSearchParams } from 'react-router-dom'
import { Store } from './Store';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import { Skeliton } from './Skeliton';

export const Products = () => {
  const [searchParms]=useSearchParams()
  const dispatch=useDispatch()
  const data=useSelector((Store)=>Store.productReducer.products)
  const isLoading=useSelector((Store)=>Store.productReducer.isLoading)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const loction =useLocation()
  const [editedProduct, setEditedProduct] = useState({
    price: "",
    qty: "",
    reason: "",
    name: "",
    brand:"",
    img_url: "https://media.istockphoto.com/id/94929126/photo/avocados-isolated-on-white.jpg?s=612x612&w=0&k=20&c=c0BSuWnUTAkZyj-cYHKzR5dXtZWQ1_3PXcea3M92Z4I="
  });
  const [isEditing, setIsEditing] = useState(false);
  // paramobj passesd in action.js
  const obj={
    params:{
      gender:searchParms.getAll("gender"),
      category:searchParms.getAll("category"),
      _sort:searchParms.get("order") && "price",
      _order:searchParms.get("order"),
     


    }
    
  }

  

//getProduct from action.js
useEffect(()=>{
  dispatch(getProducts(obj))

},[loction.search])

console.log(data)

var Total=data.price*data.qty


const handleYesClick=(productId)=>{
   const status = "Approved"
    console.log(status,"statusss")
    setSelectedProductId(productId)
    dispatch(updateProductStatus(selectedProductId, status));
    dispatch(getProducts())
    setIsDialogOpen(false);
}

const handleNoClick = (productId) => {
 
  setSelectedProductId(productId)
    setIsDialogOpen(true);
};



const handleDialogConfirm = (isUrgent) => {
  const status = isUrgent ? "Missing - Urgent" : "Missing";
  console.log(status,"statusss",selectedProductId)
  dispatch(updateProductStatus(selectedProductId, status));
  dispatch(getProducts())
  setIsDialogOpen(false);
};

const handleEditClick = (productId) => {
  setSelectedProductId(productId);
  setIsEditing(true);
  fillInfo(productId)
};


const fillInfo = (selectedProductId)=>{
  // console.log("edited")
  // console.log("selectedProductId",selectedProductId)
  const selectedProduct = data.find(product => product.id == selectedProductId );
  // console.log(selectedProduct,"selectedProduct")
  if (selectedProduct) {
    setEditedProduct({
      price: selectedProduct.price.toString(),
      qty: selectedProduct.qty.toString(),
      reason: selectedProduct.reason,
      name: selectedProduct.name,
      brand: selectedProduct.brand,
      img_url: selectedProduct.img_url,
    });
  }
}


  return (
    <div>
      <div style={{width:"80%", margin:"auto", border:"1px solid gray", marginTop:"10px", padding:"10px"}}>
         <div style={{display:"flex", margin:"auto"}}>
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
       
         <div style={{width:"100%", margin:"auto", marginTop:"10px", height:"500px", padding:"10px"}} >
          <table style={{ width: '99%', margin: 'auto', border: '0.5px solid gray', borderCollapse: 'collapse', }}>
            <thead>
              <th style={{ borderRight: '0.5px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"black" }}>Product Name</th>
              <th style={{ borderRight: '0.5px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"black" }}>Brand</th>
              <th style={{ borderRight: '0.5px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"black" }}>Price</th>
              <th style={{ borderRight: '0.5px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"black" }}>Quantity</th>
              <th style={{ borderRight: '0.5px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"black" }}>Total</th>
              <th style={{ borderRight: '0.5px solid gray', padding: '5px', fontSize:"medium", fontWeight:"normal", color:"black" }}>Status</th>
            </thead>
           <tbody>
            { data?.map((item)=>
              
              <tr>
                 <td style={{ border: '0.5px solid gray', padding: '2px' }} ><div style={{textAlign:"center"}}>
                  <img width={"50px"} src={item.img_url} alt="" /> <p>{item.name}</p>
                  </div></td>
                 <td style={{ border: '0.5px solid gray', padding: '2px' }} >{item.brand}</td>
                 <td style={{ border: '0.5px solid gray', padding: '2px' }} >{item.price}</td>
                 <td style={{ border: '0.5px solid gray', padding: '2px' }} >{item.qty}</td>
                 <td style={{ border: '0.5px solid gray', padding: '2px' }} >{(item.price)*(item.qty)}</td>
                 <td style={{ border: '0.5px solid gray', padding: '2px' }} > 
                 
                 <div>
                 <Button   colorScheme={item.status=="Approved" ? 'whatsapp' :"red" } borderRadius='15px'  fontSize={"10px"} mr={"15px"}>
                    {item.status}
                  </Button>

                    <CheckIcon onClick={() => handleYesClick(item.id)}   w={6} h={4} mr={'10px'} color="gray.500" />

                  

                   <Button onClick={() => handleNoClick(item.id)}><CloseIcon onClick={ onOpen}  w={6} h={4} color="gray.500" mr={'10px'} /></Button>

                  <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}  >
        <ModalOverlay style={{ backdropFilter : 'blur(2px)',backgroundColor: 'transparent' }} />
        <ModalContent>
          <ModalHeader>Missing Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <p>Is this Product urgent ?</p>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => handleDialogConfirm(true)}  colorScheme='green' mr={3} >
              Yes
            </Button>
            <Button onClick={onClose}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                  

                  <EditIcon onClick={() => handleEditClick(item.id)} w={6} h={4} color="gray.500" />


                 </div>
                 
                 </td>
              </tr>
            )}
           </tbody>
          </table>



          </div>


      </div>
      
      
    </div>
  )
}
