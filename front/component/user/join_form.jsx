import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserJoin_REQUEST, User_Id_Checke } from "../../reducers/user"
import useInput from '../../hooks/useInput'
import { Form } from './join_login_css'
// import Styled from 'styled-components'
import Link from 'next/link'


const Join_form = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.user)

    const userid = useInput('')
    const userpw = useInput('')


    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const handlePassword = e => {
        const { value } = { ...e.target }
        setPasswordError(userpw.value !== value) // 1234 === 1234 ture
        setPasswordCheck(value)
    }


    const handleSubmit = e => {
        e.preventDefault()
        const user_data = {
            userid: userid.value,
            userpw: userpw.value
        }
        if (userid.value == '') {
            alert('아이디와 비밀번호를 확인해주세요')
            return;
        } else {

            if (userpw.value !== passwordCheck) {
                alert('비밀번호가 같지 않습니다.')
                setPasswordError(true)
                return
            } else {
                setPasswordError(false)
                if (data.Id_check == false) {
                    dispatch(UserJoin_REQUEST(user_data))
                } else {
                    alert('사용 불가능한 아이디 입니다.');
                }
            }
        }



    }
    const idCheck = e => {
        let { value } = e.target;
        if (value == '') {
            return;
        } else {

            dispatch(User_Id_Checke(value))
        }
    }

    return (
        <>
            <Form>
                <h2>JOIN</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} onMouseOut={idCheck} placeholder="아이디를 입력해주세요." />
                    {/* {data.Id_check ? <div style={{ color: 'red' }}>사용 불가능한 아이디 입니다.</div> : <div style={{ color: 'blue' }}>사용가능한 아이디 입니다.</div>} */}
                    {data.Id_check ==='' ? '':(data.Id_check ?  <div style={{ color: 'red' }}>사용 불가능한 아이디 입니다.</div>: <div style={{ color: 'blue' }}>사용가능한 아이디 입니다.</div> )}
                    <input type="password" {...userpw} placeholder="패스워드를 입력해주세요." />
                    <input type="password" value={passwordCheck} onChange={handlePassword} placeholder="패스워드를 다시 입력해주세요." />
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    <button type="submit">회원가입</button>
                </form>
                <Link href='/user/login'>
                    <a>로그인</a>
                </Link>
            </Form>
        </>
    )
}

export default Join_form

