import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, PRODUCT_REQUEST, UPDATE_PRODUCT_STATUS, } from "./actiontypes"


const initialState={
    products:[],
    isLoading:false,
    isError:false
}


export const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case PATCH_PRODUCT_SUCCESS:{
      return {...state, isError:false, isLoading:false,  products:[...state.products, payload]}
    }
    case GET_PRODUCT_SUCCESS:{
      return {...state, isError:false, isLoading:false, products:payload}
    }
    case PRODUCT_REQUEST:{
      return {...state, isError:false, isLoading:true}
    }
    case UPDATE_PRODUCT_STATUS:
      const { productId, status } = type;
      const updatedProducts = state.products.map(product => {
        if (product.id === productId) {
          return { ...product, status };
        }
        return product;
      });

      return { ...state, products: updatedProducts };
    default : return state

  }
}
