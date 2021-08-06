import Head from 'next/head'
import Styled from 'styled-components'
import LoginBtn from "../component/common/LoginBtn"
import Logo from "../component/common/Logo"

const Index = () => {
    return (
        <>
            <Head>
                <title>Gamgwi</title>
            </Head>
            <MainLayout>
                <MainInnerLayout>
                    <Logo />
                    <LoginBtn />
                </MainInnerLayout>
            </MainLayout>
        </>
    )
}

export default Index


const MainLayout = Styled.div`
    // 모바일 버전
    width : 100%;
    //height: 100vw;
    min-height : 600px;
    
    @media only screen and (min-width:768px){
        // PC 버전
        width : 100%;
        
    }
`

const MainInnerLayout = Styled.div`
    // 모바일 버전
    width: 100vw;
    height: 100vh;
    //background : #afa6a6;
    
    @media only screen and (min-width:768px){
        // PC 버전
        width : 1200px;
        height: 100vh;
        margin : 0 auto;
    }
`