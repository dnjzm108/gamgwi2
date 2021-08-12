import Styled from "styled-components"
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import { useDispatch, useSelector } from "react-redux"
import { PostDelete_REQUEST } from "../../reducers/post"
import Router from "next/router"

const ViewContent = (props) => {
    //console.log(props.data);
    let { title, content, nickName, hit, id, likeIdx } = props.data

    const dispatch = useDispatch()
    const handleModify = (idx) => {

    }

    const data = useSelector(state => state.post.deleteMsg)
    // console.log('viewcontent.jsx =====', data);

    const handleDelete = (idx) => {
        dispatch(PostDelete_REQUEST(idx))

        if (data === '삭제 성공') {
            Router.push('/board/list')
        }
    }

    return (
        <>
            <ViewContentWrap>
                <TitleWrap>
                    {title}
                </TitleWrap>
                <DateWrap>
                    date and time
                </DateWrap>
                <ContentWrap>
                    {content}
                </ContentWrap>
                <VeiwIcon>
                    <ul>
                        <li><FavoriteRoundedIcon /></li>
                        <li onClick={() => { handleModify(id) }}><CreateRoundedIcon /></li>
                        <li onClick={() => { handleDelete(id) }}><DeleteRoundedIcon /></li>
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