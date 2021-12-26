import Head from 'next/head'
import WebLayout from "../../component/layout/WebLayout"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FaceIcon from '@material-ui/icons/Face';
import Styled from 'styled-components'
import { useDispatch , useSelector } from "react-redux"
// import { useEffect,useCallback } from 'react'
import { User_Logout } from "../../reducers/user"
import Router from "next/router"

const Info = () => {
    const userInfo = useSelector(state => state.user.user_info)

    const dispatch = useDispatch()

    const onLogout = () =>{
        dispatch(User_Logout())
        Router.push('/user/login')
    }

    const onSubscribe = () =>{
        Router.push('/board/subscribe')
    }

    return (
        <>
            <Head>
                <title>Gamgwi | 회원정보</title>
            </Head>
            <WebLayout>
                <AccountCircleWrap>
                    <FaceIcon />
                </AccountCircleWrap>
                <UserInfoWrap>
                    <div>
                        Hello, <span> {userInfo.userid} </span>
                    </div>
                    <div>
                        <p>책을 읽다가,</p>
                        <p>혹은 우연히 발견한 문구를</p>
                        <p>기록해보세요.</p>
                    </div>

                    <LogoutBtn onClick={onLogout}>Logout</LogoutBtn>
                    <LogoutBtn onClick={onSubscribe}>ILike..</LogoutBtn>

                </UserInfoWrap>
            </WebLayout>
        </>
    )
}

export default Info

const AccountCircleWrap = Styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    padding: 10% 0;
    box-sizing: border-box;

    & > svg {
        width: 20vw;
        height : auto;
    }

    @media only screen and (min-width:768px){
        padding: 2% 0;

        & > svg {
            width: 12vw;
            height: 15vh;
        }
    }
`
const UserInfoWrap = Styled.div`
    width : 100%;
    height : auto;

    & > div:nth-child(1) {
        font-size: 35px;
        padding: 5%;
        height: 65px;
        text-align: center;
    }

    & > div:nth-child(1) > span {
        color : #45c9ce;
    }

    & > div:nth-child(2){
        padding: 0 16%;
        text-align: center;
        font-size: 17px;
        color: #666;
    }
    & > div:nth-child(2) > p {
        padding : 10px 0;
    }
`
const LogoutBtn = Styled.button`
    float : right;
    background : none;
    border : none;
    border-bottom : 2px solid #d0d0d0;
    padding-bottom : 3px;
    margin: 13vh 1vh 0 0;
    font-family: 'IM_Hyemin-Bold';
    cursor : pointer;

    @media only screen and (min-width:768px){
        margin: 10vh 2vh 0 0;
        font-size : 20px;
        
    }
`