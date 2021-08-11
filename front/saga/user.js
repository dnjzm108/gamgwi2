import axios from "axios";
import { all, call, takeLatest,fork } from "redux-saga/effects";

function loginAPI(data){
    console.log(data);
    return axios.post('http://localhost:3500/user/login',data)
}

function* login(action){
    console.log(action);
    let result = yield call(loginAPI,action.data)
    console.log("++++++++++++result",result);
    let {data} = result
    console.log(data);
    
}

function joinAPI(data){
    console.log(data);
    return axios.post('http://localhost:3500/user/join',data)
}
function* join(action){
    console.log(action);
    let result = yield call(joinAPI,action.data)
    console.log("++++++++++++result",result);
    let {data} = result
    console.log(data);

}

function* watchUser(){
    yield takeLatest('USER_LOGIN_REQUEST',login)
    yield takeLatest('USER_JOIN_REQUEST',join)
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}