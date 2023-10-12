import actionTypes from "../redux/actionTypes";
import{put,call,takeLatest} from "redux-saga/effects"; 
import axios from "axios"
function* listSaga(){
yield takeLatest(actionTypes.GET_USERSLIST_REQUEST, fetchUsersWorker)
}
async function fetchUsers(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data)
    return res.data
}
function* fetchUsersWorker(){
    try{
        const users = yield call(fetchUsers);
        yield put({type:actionTypes.GET_USERSLIST_SUCCEEDED, payload:users})
    }catch(e){
        yield put({type:actionTypes.GET_USERSLIST_FAILURE, payload:e.message})
    }
}
export default listSaga