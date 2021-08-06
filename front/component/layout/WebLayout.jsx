import Styled from "styled-components"
import MobileMenuBar from "../common/MobileMenuBar"

const WebLayout = ({ children }) => {
    return (
        <>
            <WebWrap>
                <WebInnerWrap>
                    <WebHeight>
                        aaa
                        {children}
                    </WebHeight>
                    <MobileMenuBar />

                </WebInnerWrap>
            </WebWrap>
        </>
    )
}

export default WebLayout


const WebWrap = Styled.div`
    // 모바일 버전
    width : 100%;
    //height: 100vw;
    min-height : 600px;
    
    @media only screen and (min-width:768px){
        // PC 버전
        width : 100%;
        
    }
`

const WebInnerWrap = Styled.div`
    // 모바일 버전
    width: 100%;
    height: 100vh;
    //background : #afa6a6;
    
    @media only screen and (min-width:768px){
        // PC 버전
        width : 1200px;
        height: 100vh;
        margin : 0 auto;
    }
`

const WebHeight = Styled.div`
    width: 100%;
    height: 85vh;
    background : #bbb4b4;
`

/* web ver 1200 margin 0 auto */