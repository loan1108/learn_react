import { put, takeLatest,call } from "redux-saga/effects";
import actionTypes from "../redux/actionTypes";
import axiosClient from "../api/axiosClient";
function* addCartSagaWatcher() {
  yield takeLatest(actionTypes.ADD_TO_CART_REQUEST, addCartWorker);
}
async function updateCartProducts(product) {
 const data = await axiosClient.post("/cartProducts", {
    id: product.id,
    image: product.image,
    title: product.title,
    author: product.author,
    price: product.price,
    inventory: product.inventory,
    quantity: product.quantity,
    star:product.star,
    category: product.category,
  });
  console.log(data)
}
function* addCartWorker(action) {
    console.log("acs")
  try {
    yield call(()=> updateCartProducts(action.payload))
    yield put({type:actionTypes.ADD_TO_CART_SUCCEEDED, payload:action.payload})
  } catch (e) {
    yield put({ type: actionTypes.ADD_TO_CART_FAILURE, payload: e.message });
  }
}
export default addCartSagaWatcher