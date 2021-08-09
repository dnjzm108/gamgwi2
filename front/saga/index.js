import {all, fork} from 'redux-saga/effects'
import writeSaga from './post'

export default function* rootSaga(){
    yield all([
       fork(writeSaga)
    ])
}