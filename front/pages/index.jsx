import Head from 'next/head'
import LoginBtn from "../component/common/LoginBtn"
import Logo from "../component/common/Logo"
import BasicLayout from '../component/layout/BasicLayout'
import { useSelector,useDispatch } from 'react-redux';
import {UserCookieCheck} from '../reducers/user'

const Index = () => {
    const dispatch = useDispatch()
    dispatch(UserCookieCheck())


    return (
        <>
            <Head>
                <title>Gamgwi</title>
            </Head>
            <BasicLayout>
                <Logo />
                <LoginBtn />
            </BasicLayout>

        </>
    )
}

export default Index


