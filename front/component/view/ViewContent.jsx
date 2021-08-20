import Styled from "styled-components"
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import { useDispatch, useSelector } from "react-redux"
import { AddLikes_REQUEST, PostDelete_REQUEST, PostModify_REQUEST } from "../../reducers/post"
import Router from "next/router"
import { useEffect, useState } from "react"
import GoBack from "../common/GoBack"
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded';
import AcUnitIcon from '@material-ui/icons/AcUnit';


const ViewContent = (props) => {
    let { title, content, nickName, hit, id, likeIdx, date, weather } = props.viewData
    let contentData = { ...props.viewData };
    // let YMD = contentData.date.substring(0, 10)

    const userid = useSelector(state => state.user.user_info.userid)
    const {addLike} = useSelector(state=>state.post)
    console.log(addLike,'addmlike')

    const dispatch = useDispatch()

    const handleModify = (data) => {
        dispatch(PostModify_REQUEST(data))
        Router.push('/board/modify')
    }

    const msg = useSelector(state => state.post.deleteMsg)
    const handleDelete = (idx) => {
        dispatch(PostDelete_REQUEST(idx))
        Router.push('/board/list')
    }

    const [likeState, setLikeState] = useState(likeIdx)

    const handleLikes = (idx) => {
        if(addLike==undefined){
            console.log('addlike-undefined')
            setLikeState(!likeIdx)
            const likeData = {idx,likeState,likeIdx}
            dispatch(AddLikes_REQUEST(likeData))
        }else{
            console.log('addlikeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
            setLikeState(!likeState)
            const likeData = {idx,likeState}
            dispatch(AddLikes_REQUEST(likeData))
        }
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
                    {/* <p> {date} </p> */}
                </DateWrap>
                <ContentWrap>
                    {content}
                </ContentWrap>
                <VeiwIcon>
                    <ul>
                        <li onClick={() => { handleLikes(id) }}>
                            {
                                addLike
                                ?
                                <LikesWrap flag={likeState}>
                                    <FavoriteRoundedIcon />
                                </LikesWrap>
                                :
                                <LikesWrap flag={likeIdx}>
                                    <FavoriteRoundedIcon />
                                </LikesWrap>
                            }
                        </li>
                        <li></li>
                        {
                            nickName === userid 
                            ? <>
                                <li onClick={() => { handleModify(contentData) }}><CreateRoundedIcon /></li>
                                <li onClick={() => { handleDelete(id) }}><DeleteRoundedIcon /></li>
                            </>
                            : <></>
                        }
                        
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
`

const TitleWrap = Styled.div`
    width: 100%;
    height: auto;
    font-size: 30px;
    padding: 5% 2%;
    box-sizing: border-box;

    @media only screen and (min-width:768px){
        font-size : 35px;
        padding: 3% 1% 3% 7%;
    }
`
const ContentWrap = Styled.div`
    width: 100%;
    height: 64%;
    font-size: 23px;
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
        padding: 2%;
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
        text-align: center;
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