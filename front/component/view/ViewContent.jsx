import Styled from "styled-components"
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'

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
               <VeiwIcon>
                   <ul>
                       <li><FavoriteRoundedIcon/></li>
                       <li><CreateRoundedIcon/></li>
                       <li><DeleteRoundedIcon/></li>
                   </ul>
               </VeiwIcon>
            </ViewContentWrap>
        </>
    )
}
export default ViewContent

const ViewContentWrap = Styled.div`
    width : 100%;
    height : 100%;
    background : #e9a9a9;
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

const VeiwIcon = Styled.div`
    & > ul, & > ul > li {
        list-style : none;
    }

    & > ul {
        display : flex
    }

    & > ul > li {
        width : 50px;
    }

    & > ul > li > svg {
        font-size : 30px;
    }
`