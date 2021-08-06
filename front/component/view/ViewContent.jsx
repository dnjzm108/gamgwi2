import Styled from "styled-components"

const ViewContent = () => {
    return (
        <>
            <ViewContentWrap>
               <TitleWrap>
                   title
               </TitleWrap>
               <DateWrap>
                   date and time
               </DateWrap>
               <ContentWrap>
                   content
               </ContentWrap>
               <div>
                   <ul>
                       <li>likes</li>
                       <li>comments</li>
                       <li>modify</li>
                       <li>delete</li>
                   </ul>
               </div>
            </ViewContentWrap>
        </>
    )
}
export default ViewContent

const ViewContentWrap = Styled.div`
    width : 100%;
    height : 100%;
    background : red;
`

const TitleWrap = Styled.div`
    width : 100%;
    height : 15%;
    background : yellow;
`

const ContentWrap = Styled.div`

`

const DateWrap = Styled.div`
    width : 100%;
    height : 10%;
    background : #dfdfab;
`