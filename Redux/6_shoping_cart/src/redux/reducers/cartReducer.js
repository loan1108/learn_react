import actionTypes from "../actionTypes";
const state = [];
const cartReducer = (initialState = state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
        const index = [...initialState].findIndex(product=>product.id=== action.payload.id)
        if(index !== -1){
            console.log(index);
            [...initialState][index].inventory +=1;
            return [...initialState]
        }else{    
            return [...initialState, {...action.payload, inventory:1}];
        }
    case actionTypes.CHECK_OUT_SUCCEDDED:
      return []
    default:
      return [...initialState];
  }
};
export default cartReducer;
