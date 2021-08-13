import Styled from "styled-components"
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import { useDispatch, useSelector } from "react-redux"
import { AddLikes_REQUEST, PostDelete_REQUEST, PostModify_REQUEST } from "../../reducers/post"
import Router from "next/router"
import { useEffect, useState } from "react"

const ViewContent = (props) => {
    let { title, content, nickName, hit, id, likeIdx, date } = props.data
    let contentData = { ...props.data };
    console.log(contentData.date.substring(0,10));
    let YMD = contentData.date.substring(0,10)


    const dispatch = useDispatch()

    const handleModify = (data) => {
        dispatch(PostModify_REQUEST(data))
        Router.push('/board/modify')
    }

    const msg = useSelector(state => state.post.deleteMsg)
    const handleDelete = (idx) => {
        dispatch(PostDelete_REQUEST(idx))

        Router.push('/board/list')

        // if (msg === '삭제 성공') {
        //     Router.push('/board/list')
        // }
    }

    const [likeState, setLikeState] = useState(false)
    const handleLikes = (idx) => {
        setLikeState(!likeState)
        
        // useEffect(()=>{
        //     dispatch(AddLikes_REQUEST(idx))
        // },[likeState])
        const likeData = {idx, likeState}
        dispatch(AddLikes_REQUEST(likeData))
        
    }

    return (
        <>
            <ViewContentWrap>
                <TitleWrap>
                    {title}
                </TitleWrap>
                <DateWrap>
                    <p>작성자 : {nickName}</p>
                    <p> {YMD} </p>
                </DateWrap>
                <ContentWrap>
                    {content}
                </ContentWrap>
                <VeiwIcon>
                    <ul>
                        <li onClick={() => { handleLikes(id) }}>
                            <LikesWrap flag={likeState}>
                                <FavoriteRoundedIcon />
                            </LikesWrap>
                            {/* <FavoriteRoundedIcon flag = {likeState}/> */}
                        </li>
                        <li onClick={() => { handleModify(contentData) }}><CreateRoundedIcon /></li>
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
    // background : #e9a9a9;
`

const TitleWrap = Styled.div`
    width: 100%;
    height: auto;
    font-size: 30px;
    padding: 5% 2%;
    box-sizing: border-box;

    @media only screen and (min-width:768px){
        font-size : 35px;
    }
`
const ContentWrap = Styled.div`
    width: 100%;
    height: 69%;
    font-size: 23px;
    padding: 6% 2%;
    box-sizing: border-box;

    @media only screen and (min-width:768px){
        font-size : 25px;
    }
`
const DateWrap = Styled.div`
    width: 100%;
    height: 13%;
    text-align: right;
    border-top: 1px dotted #6663;
    border-bottom: 1px dotted #6663;
    padding: 2%;
    box-sizing: border-box;

    & > p {
        height : 50%;
    }

    @media only screen and (min-width:768px){
        font-size : 20px;
        padding: 2% 0;
    }
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

    & > ul > li > svg,
    & > ul > li > span > svg
    {
        font-size : 40px;
    }

    @media only screen and (min-width:768px){
        & > ul > li > svg {
            font-size : 40px;
        }
    }
`

const LikesWrap = Styled.span`
    & > svg {
        color : ${props => (props.flag ? '#ff000087' : 'black')};
    }
`