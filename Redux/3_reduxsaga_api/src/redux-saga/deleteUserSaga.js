import actionTypes from "../redux/actionTypes";
import{put,takeLatest,call} from "redux-saga/effects"; 
import axios from "axios"
function* deleteUserSaga(){
    yield takeLatest(actionTypes.DELETE_USER_REQUEST,deleteUserWorker)

}
async function deleteUser(id){
   const res= await axios.delete(`http://localhost:3001/users/${id}`);
   return res.data
}
function* deleteUserWorker(action){
    try{
        if(window.confirm("Do you want to delete this user?")){
            yield call(()=>deleteUser(action.payload))
            yield put({type:actionTypes.DELETE_USER_SUCCEEDED,payload:action.payload})
        }
       
    }catch(e){
        yield put({type:actionTypes.DELETE_USERS_FAILURE,payload:e.message})
    }
}
export default deleteUserSaga;