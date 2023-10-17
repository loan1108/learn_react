import {put, takeLatest} from "redux-saga/effects"
import actionTypes from "../redux/actionTypes"
function* changePageSagaWatcher(){
    yield takeLatest(actionTypes.CHANGE_PAGE, changePageWorker)
}
function* changePageWorker(action){
    try{
        yield put({type:actionTypes.CHANGE_PAGE_SUCCEEDED, payload:action.payload})
    }catch(e){
        yield put({type:actionTypes.CHANGE_PAGE_FAILURE, payload:e.message})
    }
}
export default changePageSagaWatcher;