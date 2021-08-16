import Styled from "styled-components"
import useInput from '../../hooks/useInput'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogin_REQUEST } from "../../reducers/user"

const Login_form = () => {
    const dispatch = useDispatch();

    const userid = useInput('')
    const userpw = useInput('')

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            userid: userid.value,
            userpw: userpw.value
        }
        console.log(userid.value, userpw.value);

        dispatch(UserLogin_REQUEST(data))

        // userid.value === "web7722" && userpw.value === "1234"
        // ? Router.push('/')
        // : alert('아이디와 패스워드가 다릅니다.')
    }

    return (
        <>
            <Form>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text"  {...userid} placeholder="아이디를입력해주세요." />
                    <input type="password" {...userpw} placeholder="패스워드를 입력해주세요." />
                    <button type="submit">로그인</button>
                </form>

                <Link href='/user/join'>
                    <a>회원가입</a>
                </Link>
            </Form>
        </>
    )
}

export default Login_form

const Form = Styled.div`
      width : 40vw;
      height : 65vh;
      border: 1px solid black;
      margin : 10vh auto;

      & >h2{
          width: 20vw;
          font-size:4rem;
        margin: 5vh auto;
      }
      & > a{
          display: block;
          text-align: center;
        margin : 0 auto;
         font-size:3rem;
         text-decoration: none;
      }
      & > a :hover{
          color:white;
          background: black;
      }
      & > form > input{
          display:block;
          width : 80%;
          height : 5vh;
          margin: 4vh 10%; 
          font-size:2rem;
      }
      & > form > button{
          display:block;
          font-size: 2rem;
          background:white;
          width:40%;
          height:5vh;
          margin: 10vh auto 5vh;
      }
      & > form > button:hover{
    background: black;
    color:white;
    }

      @media only screen and (max-width:768px){
        width:80vw;   

        & >h2{
          width: 30vw;
          font-size:1.6rem;
        margin: 5vh auto;
        text-align: center;
      }
      & > form > input{
        font-size:1rem;
      }
      & > form > button{
        font-size: 1rem;
    }
    
    }
      }
`