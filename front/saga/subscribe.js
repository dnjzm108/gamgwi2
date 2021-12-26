import axios from 'axios';
import {all, call, takeLatest, fork, put} from 'redux-saga/effects';
import {url} from './url';

function subscribeAPI(data){
    if(data.data.state){
        return axios.post(`${url}/board/subscribe/writer`,data)
    }else{
        return axios.post(`${url}/board/subscribe/post`,data)
    }
    
}

function* getSubscribe(data){
    
    const result = yield call(subscribeAPI,data);
    if(result.data.result == 'OK'){
        yield put ({
            type:'GET_SUBSCRIBE_SUCCESS',
            data : result.data.list
        })
    }else if(result.data.result == 'OK2'){
        yield put ({
            type:'GET_SUBSCRIBE_SUCCESS2',
            data : result.data.list
        })
    }else if(result.data.result == 'Fail'){
        yield put ({
            type:'GET_SUBSCRIBE_ERROR',
        })
    }
}

function* getSubscribeList(){
    yield takeLatest('GET_SUBSCRIBE_REQUEST',getSubscribe)
} 

function addFriendAPI(data){
    return axios.post(`${url}/board/friend`,data)
}

function* AddFriend(data){
    const result = yield call(addFriendAPI,data)
    if(result.data.result=='OK'){
        yield put({
            type:'ADD_FRIEND_SUCCESS',
            data:result.data.data
        })
    }else{
        yield put ({
            type:'ADD_FRIEND_ERROR'
        })
    }
}

function* reqAddFriend(){
    yield takeLatest('ADD_FRIEND_REQUEST', AddFriend)
}

function AllSubscribeAPI(data){
    return axios.post(`${url}/board/follow`,data)
}

function* AllSubscribe(data){
    const result = yield call(AllSubscribeAPI,data)
    if(result.data.result=='OK'){
        yield put({
            type:'GET_ALL_SUBSCRIBE_SUCCESS',
            data:result.data.data
        })
    }else{
        yield put ({
            type:'GET_ALL_SUBSCRIBE_ERROR'
        })
    }
}

function* reqAllSubscribe(){
    yield takeLatest('GET_ALL_SUBSCRIBE_REQUEST', AllSubscribe)
}


function CancelSubscribeAPI(data){
    return axios.post(`${url}/board/cancel`,data)
}

function* CancelSubscribe(data){
    const result = yield call(CancelSubscribeAPI,data)
    if(result.data.result=='OK'){
        yield put({
            type:'CANCEL_SUBSCRIBE_SUCCESS',
            data:result.data.data
        })
    }else{
        yield put ({
            type:'CANCEL_SUBSCRIBE_ERROR'
        })
    }
}

function* reqCancelSubscribe(){
    yield takeLatest('CANCEL_SUBSCRIBE_REQUEST', CancelSubscribe)
}


function CancelPostAPI(data){
    return axios.post(`${url}/board/cancel/post`,data)
}

function* CancelPost(data){
    const result = yield call(CancelPostAPI,data)

    if(result.data.result=='OK'){
        yield put({
            type:'CANCEL_POST_SUCCESS',
            data:result.data.data
        })
    }else{
        yield put ({
            type:'CANCEL_POST_ERROR'
        })
    }
}

function* reqCancelPost(){
    yield takeLatest('CANCEL_POST_REQUEST', CancelPost)
}


export default function* subscribeSaga(){
    yield all([
        fork(getSubscribeList),
        fork(reqAddFriend),
        fork(reqAllSubscribe),
        fork(reqCancelSubscribe),
        fork(reqCancelPost)
    ])
}