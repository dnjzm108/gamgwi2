import Styled from "styled-components"
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import { useDispatch, useSelector } from "react-redux"
import { AddLikes_REQUEST, PostDelete_REQUEST, PostModify_REQUEST, GetLikes_REQUEST,Delete_LIKES_REQUEST } from "../../reducers/post"
import Router from "next/router"
import { useEffect, useState } from "react"
import GoBack from "../common/GoBack"
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/Ai'
import Coment_containder from "../coment_Box/Coment_container"
import { AddFriend_REQUEST,CancelSubscribe_Request } from '../../reducers/subscribe'


const ViewContent = (props) => {
    let { title, content, nickName, hit, id, likeIdx, date, weather } = props.viewData
    let contentData = { ...props.viewData };

    let ymd
    if (contentData.date !== undefined) {
        ymd = contentData.date.substring(0, 10)
    }

    const userid = useSelector(state => state.user.user_info.userid)
    const post = useSelector(state => state.post)
    const friend = useSelector(state => state.post.friend)
    const dispatch = useDispatch()

    const info = {
        board_id: post.viewIdx,
        userid
    }
    useEffect(() => {
        dispatch(GetLikes_REQUEST(info))
    }, [])

    const handleModify = (data) => {
        dispatch(PostModify_REQUEST(data))
        Router.push('/board/modify')
    }

    const msg = useSelector(state => state.post.deleteMsg)
    const handleDelete = (idx) => {
        dispatch(PostDelete_REQUEST(idx))

        Router.push('/board/list')
    }

    // const [likeState, setLikeState] = useState(false)
    // const handleLikes = (idx) => {
    //     setLikeState(!likeState)
    //     const likeData = { idx, likeState }
    //     dispatch(AddLikes_REQUEST(likeData))
    // }

    const add_like = () => {
        dispatch(AddLikes_REQUEST(info))
    }
    const del_like = () => {
        dispatch(Delete_LIKES_REQUEST(info))
    }

    if (post.like.count == null) {
        return (
            <>로딩중</>
        )
    }

    const addFriendBtn = () =>{
        const friendData = {
            userid,
            nickName
        }
        dispatch(AddFriend_REQUEST(friendData))
    }

    const cancelFriendBtn = () => {
        let data = {
            userid,
            nickName
        }
        dispatch(CancelSubscribe_Request(data))
    }

    return (

        <>
            <ViewContentWrap>
                <GoBack />
                <TitleWrap>
                    {title}
                    <WeatherPosition>
                        {weather !== 'cloud' && weather !== 'snow' && weather == 'sun' ? <WbSunnyRoundedIcon /> : weather == 'cloud' && weather !== 'snow' && weather !== 'sun' ? <FilterDramaRoundedIcon /> : weather == 'snow' && weather !== 'sun' && weather !== 'cloud' ? <AcUnitIcon /> : <span></span>}
                    </WeatherPosition>
                </TitleWrap>
                <DateWrap>
                    <p>작성자 : {nickName}</p>
                    {
                        friend
                        ? <p onClick={cancelFriendBtn} className="addFriendDiv">칭구칭구</p>
                        :<p className="addFriendDiv" onClick={addFriendBtn}>친구추가</p>
                    }
                    <p> {ymd} </p>
                </DateWrap>
                <ContentWrap>
                    {
                        contentData.content !== undefined &&
                        content.split('\n').map(line => {
                            return (<span key={line}>{line}<br /></span>)
                        })
                    }
                </ContentWrap>
                <VeiwIcon>
                    <ul>
                        {/* <li onClick={() => { handleLikes(id) }}>
                            <LikesWrap flag={like.likeStatus}>
                                <FavoriteRoundedIcon />
                            </LikesWrap>
                        </li> */}
                        {/* <li></li> */}
                        {
                            nickName == userid
                                ? <>
                                <li><AiOutlineHeart size='30' />{post.like.count}</li>
                                    <li onClick={() => { handleModify(contentData) }}><CreateRoundedIcon /></li>
                                    <li onClick={() => { handleDelete(id) }}><DeleteRoundedIcon /></li>
                                </>
                                : <>
                                    {post.like.check ?
                                        <li onClick={() => { del_like() }}>
                                            <AiFillHeart size='30' />
                                            {post.like.count}
                                        </li>
                                        :
                                        <li onClick={() => { add_like() }}>
                                            <AiOutlineHeart size='30' />
                                            {post.like.count}
                                        </li>
                                    }
                                </>
                        }

                    </ul>
                </VeiwIcon>
            </ViewContentWrap>
            <Coment_containder />
        </>
    )
}
export default ViewContent

const ViewContentWrap = Styled.div`
    width : 100%;
    height : 100%;
    
    @media only screen and (min-width:768px){
        margin: 0 0 30px 0 ;
    }
`

const TitleWrap = Styled.div`
    width: 100%;
    height: auto;
    font-size: 22px;
    padding: 5% 2%;
    box-sizing: border-box;

    @media only screen and (min-width:768px){
        font-size : 35px;
        padding: 3% 1% 3% 7%;
    }
`
const ContentWrap = Styled.div`
    width: 100%;
    height: 40vh;
    overflow-y: scroll;
    font-size: 15px;
    padding: 6% 2%;
    box-sizing: border-box;
    word-break:break-all;

    @media only screen and (min-width:768px){
        font-size : 25px;
        padding: 5% 7%;
        
    }
`
const DateWrap = Styled.div`
    width: 100%;
    height: 15%;
    text-align: right;
    border-top: 1px dotted #6663;
    border-bottom: 1px dotted #6663;
    box-sizing: border-box;

    & > p {
        height : 30%;
        margin : 1%
    }

    @media only screen and (min-width:768px){
        font-size : 20px;
    }
`

const VeiwIcon = Styled.div`
    width : 100%;
    /* height : auto; */

    & > ul, & > ul > li {
        list-style : none;
    }

    & > ul {
        width: 210px;
        display : flex;
        height: auto;
        float: right;
        flex-direction: row-reverse;
        text-align: center;
        margin-top: 10px;
    }

    & > ul > li {
        width : 70px;
    }
    /* 임시 */
    & > ul > li:nth-child(2),
    & > ul > li:nth-child(3){
        cursor : pointer;
    }

    & > ul > li > svg,
    & > ul > li > span > svg
    {
        font-size : 35px;
    }

    @media only screen and (min-width:768px){
        & > ul {
            margin-top: 30px;
        }
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
const WeatherPosition = Styled.span`
    float : right;
    padding-top : 2%;
    & > svg {
        font-size : 25px;
    }
    @media only screen and (min-width:768px){
        padding-top : 1%;
        & > svg {
            font-size : 30px;
        }
    }
`
const LikeButton = Styled.button`
 &{
     padding: 8px;
     background: #ffff;
     border-radius: 10px;
     box-sizing:border-box;
 }
 &:hover{
     background: red;
 }
`