import Styled from "styled-components"

const Logo = () => {
    return (
        <>
            <LogoWrap>
                <LogoImg src="/logo.png" alt="로고" />
            </LogoWrap>
        </>
    )
}
export default Logo


const LogoWrap = Styled.div`
    width : 100%;
    height : auto;
    padding-top : 20%;
    box-sizing : border-box;
    //background : #dfdfb6;

    @media only screen and (min-width:768px){
        // PC 버전
        padding-top : 0;
        //min-height : 500px;
        
    }
`

const LogoImg = Styled.img`
    display : block;
    margin : 0 auto;
    width : 100%;
    height : auto;
    @media only screen and (min-width:768px){
        // PC 버전
        width: 57%;
        min-height: 500px;
        height: 50%;
    }
`
