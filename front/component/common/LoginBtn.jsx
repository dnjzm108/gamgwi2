import Link from 'next/link'
import Styled from "styled-components"

const LoginBtn = () => {
    return (
        <>
            <LoginWrap>
                <div>
                    <Link href='/user/kakao'>
                        <a>
                            <img src="/kakao_login_medium_wide.png" alt="카카오로그인" />
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href='/user/google'>
                        <a>구글로그인</a>
                    </Link>
                </div>
            </LoginWrap>
        </>
    )
}

export default LoginBtn

const LoginWrap = Styled.div`
    &{
        width: 100%;
        height: auto;
        padding-top: 40%;
    }
    & > div {
        width : 100%;
        height : auto;
        //background : #70ac70;
        text-align : right;
    }
    & > div >a>img{
        display : block;
        margin : 0 auto;
    }

    @media only screen and (min-width:768px){
        &{
            padding-top: 10%;
        }
        // PC 버전   
        & > div {
            width : 100%;
            margin : 0 auto;
            min-height : 50px;
            text-align : center;
        }
    }
`