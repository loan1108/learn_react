import{call, put, takeLatest} from "redux-saga/effects"
import actionType from "../redux/actionTypes"
import axios from "axios"
function* productsSaga(){
    yield takeLatest(actionType.LOAD_PRODUCTS,productsWorker)
}
async function fetchProducts(){
    const res = await axios.get("http://localhost:3001/products");
    return res.data;
}
function* productsWorker(){
    try{
        const products = yield call(fetchProducts); 
        yield put({type:actionType.PRODUCTS_FETCH_SUCCEEDED, payload:products})
    }catch(e){
        yield put({type:"PRODUCTS_FETCH_FAILED", message:e.message})
    }
}
export default productsSaga;