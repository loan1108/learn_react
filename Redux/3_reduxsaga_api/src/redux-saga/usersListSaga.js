import{put,takeLatest,call} from "redux-saga/effects"
import actionTypes from "../redux/actionTypes";
import axios from "axios"
function* usersListSaga(){
    yield takeLatest(actionTypes.GET_USERS_REQUEST, fetchUsers)
}
async function getUser(){
    const res = await axios.get("http://localhost:3001/users");
    return res.data
}
function* fetchUsers(action){
    try{
        const data = yield call(getUser);
        yield put({type:actionTypes.GET_USERS_SUCCEEDED, payload:data})
    }catch(e){
        yield put({type:actionTypes.GET_USERS_FAILURE,payload:e.message})
    }
}
export default usersListSaga