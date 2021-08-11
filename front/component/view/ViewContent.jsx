import Styled from "styled-components"
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'

const ViewContent = (props) => {
    return (
        <>
            <ViewContentWrap>
               <TitleWrap>
                   title <br />
                   {props.post} 번째 글
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
    width: 100%;
    background: cadetblue;
    height: 69%;

`

const DateWrap = Styled.div`
    width : 100%;
    height : 10%;
    background : #dfdfab;
`

const VeiwIcon = Styled.div`
    width : 100%;
    height : auto;

    & > ul, & > ul > li {
        list-style : none;
    }

    & > ul {
        width: 210px;
        display : flex;
        height: auto;
        float: right;
        text-align: right;
    }

    & > ul > li {
        width : 70px;
    }

    & > ul > li > svg {
        font-size : 35px;
    }

    @media only screen and (min-width:768px){
        & > ul > li > svg {
            font-size : 40px;
        }
    }
`