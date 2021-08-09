import Styled from "styled-components"
import Logo from "../common/Logo"

const HomeContent = () => {
    return (
        <>
            <HomeWrap>
                <Logo />
                <HomeMent>
                    <p>오늘은 어떤 글귀를 발견하셨나요 </p>
                </HomeMent>
            </HomeWrap>
        </>
    )
}

export default HomeContent

const HomeWrap = Styled.div`
    width : 100%;
`
const HomeMent = Styled.div`
    text-align : center;

    & > p {
        width: 100%;
        height: 32vh;
        font-size: 20px;
        padding: 26% 0;
        box-sizing: border-box;
    }

    @media only screen and (min-width:768px){
        & > p{
            font-size: 32px;
            height: 130px;
            padding: 3.5% 0;
            box-sizing: border-box;
        }
    }
`