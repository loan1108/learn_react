import{put, takeLatest} from "redux-saga/effects"; 
import actionTypes from "../redux/actionTypes";
function* loginSaga(){
    yield takeLatest(actionTypes.LOGIN, authLogin)
}
function* authLogin(action){
    try{
        const user = action.payload;
        if(user.userName ==="admin"&& user.password==="letmein"){
            yield put({type:actionTypes.LOGIN_SUCCEEDED, payload:user})
        }else{
            yield put({type:actionTypes.LOGIN_AUTH_FAILURE, payload:user})
        }

    }catch(e){
        yield put({type:actionTypes.LOGIN_FAILURE, payload:e.message})

    }
}
export default loginSaga;