import Styled from 'styled-components'


const BasicLayout = ({ children }) => {

    return (
        <>
            <MainLayout>
                <MainInnerLayout>
                    {children}
                </MainInnerLayout>
            </MainLayout>
        </>
    )
}

export default BasicLayout

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