import axios from "axios";
import { all, call, takeLatest,fork } from "redux-saga/effects";

function loginAPI(data){
    console.log(data);
    return axios.post('http://localhost:3500/user/login',data)
}

function* login(action){
    console.log(action);
    const result = yield call(loginAPI,action.data)
    console.log("++++++++++++result",result);
    const {data} = result
    console.log(data);
}

function* watchUser(){
    yield takeLatest('USER_LOGIN_REQUEST',login)
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}