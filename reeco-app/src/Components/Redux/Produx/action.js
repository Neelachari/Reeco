import axios from "axios"
import { EDIT_PRODUCT_FAILURE, EDIT_PRODUCT_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, UPDATE_PRODUCT_STATUS } from "./actiontypes"


//get Products
export const getProducts=(paramObj)=> (dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios
    .get(`https://react-deployeement-server.onrender.com/products`,paramObj)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })

}


export const updateProductStatus = (productId, status) => {
    console.log(productId)
    return async (dispatch) => {
      try {
        const response = await axios.patch(`https://react-deployeement-server.onrender.com/products/${productId}`, { status });
        dispatch({
          type: UPDATE_PRODUCT_STATUS,
          payload: { productId, status: response.data.status },
        });
      } catch (error) {
        console.error('Error updating product status:', error.message);
      }
    };
  }

  export const editProductSuccess = () => ({
    type: EDIT_PRODUCT_SUCCESS,
  });
  
  export const editProductFailure = (error) => ({
    type: EDIT_PRODUCT_FAILURE,
    payload: error,
  });
  



