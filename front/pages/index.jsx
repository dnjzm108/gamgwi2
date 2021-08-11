import Head from 'next/head'
import LoginBtn from "../component/common/LoginBtn"
import Logo from "../component/common/Logo"
import BasicLayout from '../component/layout/BasicLayout'

const Index = () => {

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


