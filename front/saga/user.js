import axios from "axios";
import cookie from 'react-cookies';
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
    return axios.post('http://localhost:3500/user/login',data,{ withCredentials: true })
}

function* login(action){
    let result = yield call(loginAPI,action.data)
    let {data} = result
    console.log('saga_data++++++++++',data.login_info);

    // if (data.login_info !== null) {
    //     yield put({
    //         type: 'USER_LOGIN_SUCCESS',
    //         data: 'OK'
    //     })
    // } else {
    //     yield put({
    //         type: 'USER_LOGIN_ERROR',
    //         data: 'FAIL'
    //     })
    // }
    
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