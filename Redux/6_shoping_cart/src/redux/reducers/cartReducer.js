import actionTypes from "../actionTypes";
const state = [];
const cartReducer = (initialState = state, action) => {
  console.log(action.payload, initialState)
  switch (action.type) {
    case actionTypes.ADD_TO_CART_REQUEST:
        const index = [...initialState].findIndex(product=>product.id=== action.payload.id)
        console.log(index);
        if(index === -1){
            // [...initialState][index].inventory +=1;
            return [...initialState, {...action.payload}]
        }else{    
          [...initialState][index].quantity = action.payload.quantity;
            return [...initialState];
        }
    case actionTypes.CHECK_OUT_SUCCEDDED:
      return []
    default:
      return [...initialState];
  }
};
export default cartReducer;
