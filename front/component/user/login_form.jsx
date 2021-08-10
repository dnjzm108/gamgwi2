import Styled from "styled-components"

const handleSubmit = e => {
    e.preventDefault()
    
    dispatch({type:"USER_LOGIN"})

    userid.value === "web7722" && userpw.value === "1234"
    ? Router.push('/')
    : alert('아이디와 패스워드가 다릅니다.')
}

const Login_form = () =>{
    return(
        <>
        <Form>
            <h2>로그인</h2>
                <form onSubmit={handleSubmit}>                                  
                    <input type="text"   placeholder="아이디를입력해주세요." />
                    <input type="password"   placeholder="패스워드를 입려해주세요."/>
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