import { put, call, takeLatest } from "redux-saga/effects";
import actionTypes from "../redux/actionTypes";
import axios from "axios";
function* checkoutSaga() {
  yield takeLatest(actionTypes.CHECK_OUT_REQUEST, updateProductsWorker);
}
async function updateProducts() {
  const res = await axios.put("http://localhost:3001/products", { products });
  return res.data;
}
function* updateProductsWorker(action) {
  try {
    const products = yield call(updateProducts, action.payload.products);
    yield put ({type:actionTypes.CHECK_OUT_SUCCEDDED, payload: action.payload.cartProducts})
  } catch (e) {
    yield put({ type: actionTypes.CHECK_OUT_FAILURE, payload:e.message });
  }
}
export default checkoutSaga;
