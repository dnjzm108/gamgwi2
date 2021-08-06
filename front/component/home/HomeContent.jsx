import Styled from "styled-components"
import Logo from "../common/Logo"

const HomeContent = () => {
    return (
        <>
            <HomeWrap>
                <Logo />
                <HomeMent>
                    <p>오늘은 어떤 글귀를 발견하셨나요 </p>
                    <div>광고</div>
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
`