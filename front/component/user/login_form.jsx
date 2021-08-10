import Styled from "styled-components"
import Router from 'next/router'
import useInput from '../../hooks/useInput'
import {useDispatch,useSelector} from 'react-redux'
import { UserLogin_REQUEST } from "../../reducers/user"
import {useEffect} from "react"

const Login_form = () =>{
  const dispatch = useDispatch();

  const userid = useInput('')
  const userpw = useInput('')

    const handleSubmit = e => {
        e.preventDefault()

        const data ={
            userid:userid.value,
            userpw:userpw.value
        }
        console.log(userid.value , userpw.value);

         dispatch(UserLogin_REQUEST(data))
    
        // userid.value === "web7722" && userpw.value === "1234"
        // ? Router.push('/')
        // : alert('아이디와 패스워드가 다릅니다.')
    }
    
    return(
        <>
        <Form>
            <h2>로그인</h2>
                <form onSubmit={handleSubmit}>                                  
                    <input type="text"  {...userid }  placeholder="아이디를입력해주세요." />
                    <input type="password" {...userpw }   placeholder="패스워드를 입려해주세요."/>
                    <button type="submit">로그인</button>
                </form>
        </Form>
        </>
    )
}

export default Login_form

const Form = Styled.div`
      width : 80vw;
      height : 80vh;
      background : yellow;
      margin : auto
`