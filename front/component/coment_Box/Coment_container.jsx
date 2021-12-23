import Styled from "styled-components"

const Coment_container = () => {

    return (
        <>
            <Wrap>
                <Containder>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <span>내용입니다.내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다</span>
                        <h3>시간입니다.내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다</h3>
                        <h4>버튼입니다.내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다</h4>
                    </div>
                </Containder>
                <Containder>
                    <div>
                        <div></div>
                    </div>
                    <div></div>
                </Containder>

            </Wrap>
        </>
    )
}

export default Coment_container

const Wrap = Styled.div`
width: 100%;
padding-bottom: 70px;
@media only screen and (min-width:768px){
    padding-bottom: 90px;

}
`

const Containder = Styled.div`
&{
    width: 100%;
    /* height: 100px; */
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
}
& > div:nth-child(1){
    width: 30%;
    height: 100px;
    padding: 10px;
}
& > div:nth-child(1) > div {
    width: 100px;
    height: 100px;
    background: #ffffff;
    border-radius:100%;
    margin: auto;
    position:relative;
    top:50%;
    transform:translateY(-50%);
    border: 1px solid black;
}
& > div:nth-child(2){
    width: 70%;
    /* height: 100px; */
    background: red;
}
`

