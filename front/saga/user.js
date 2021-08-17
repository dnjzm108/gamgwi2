import axios from "axios";
import { all, call, takeLatest,fork,put} from "redux-saga/effects";



// import { NextApiRequest, NextApiResponse } from 'next'
// import axios from 'axios'

// import { User } from '@src/types'

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const loginData = req.body

//   const response = await axios.post(
//     'http://localhost:3001/api/login',
//     loginData
//   )

//   const { user }: { user: User } = response.data

//   const token = response.headers['set-cookie']

//   res.setHeader('Set-Cookie', `token=${token}; path=/;`)
//   res.status(200).json(user)
// }


function loginAPI(data){
    console.log(data);
    return axios.post('http://localhost:3500/user/login',data,{ withCredentials: true }) //
}

function* login(action){
    let result = yield call(loginAPI,action.data)
    let {data} = result
    console.log('saga_data++++++++++',data.login_info);

    if (data.login_info !== undefined) {
        yield put({
            type: 'USER_LOGIN_SUCCESS',
            data: 'OK',
            user_info:data.login_info
        })
    } else {
        yield put({
            type: 'USER_LOGIN_ERROR',
            data: '아이디와 비밀번호를 확인해주세요'
        })
    }
    
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
    if (data !== null) {
        yield put({
            type: 'USER_JOIN_SUCCESS',
            data: 'OK',
            user_info:data
        })
    } else {
        yield put({
            type: 'USER_JOIN_ERROR',
            data: '아이디와 비밀번호를 확인해주세요'
        })
    }

}

function cookieAPI(data){
    console.log('cookie_data+++++++',data);
    return axios.get('http://localhost:3500',{ withCredentials: true })
}

function* cookie_check(action){
    console.log('action+++++++',action);
    let result = yield call(cookieAPI,action)
    let {data} = result;

    if (data.cookie == 'success') {
        yield put({
            type: 'USER_COOKIE_SUCCESS',
            data: data.cookie,
            user_info:data.user_info
        })
    } else {
        yield put({
            type: 'USER_COOKIE_ERROR',
            data: data.cookie,
        })
    }
}

function logoutAPI(){
    return axios.get('http://localhost:3500/user/logout',{ withCredentials: true })
}
function* logout(){
    let result = yield call(logoutAPI)
    console.log(result);
}

function id_check_API(data){
    console.log('id_check_data',data);
    return axios.post('http://localhost:3500/user/id_check',data)
}

function* id_check(action){
    console.log('saga_실행');
    console.log('id_check_action',action);
    let result = yield call(id_check_API,action)
    if(result.data.Id_check == false){
        yield put({
            type: 'USER_ID_SUCCESS',
            data: result.data.Id_check,
        })
    }else{
        yield put({
            type: 'USER_ID_ERROR',
            data: result.data.Id_check,
        })
    }
}
function* watchUser(){
    yield takeLatest('USER_LOGOUT',logout)
    yield takeLatest('USER_LOGIN_REQUEST',login)
    yield takeLatest('USER_JOIN_REQUEST',join)
    yield takeLatest('USER_COOKIE_CHECK',cookie_check)
    yield takeLatest('USER_ID_CHECKE',id_check)
}

export default function* userSaga(){
    yield all([
        fork(watchUser)
    ])
}