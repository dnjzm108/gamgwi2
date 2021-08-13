import Styled from 'styled-components'
import useInput from '../../hooks/useInput'
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import { useDispatch, useSelector } from 'react-redux'
import { PostModifySubmit_REQUEST , PostView_REQUEST } from '../../reducers/post'
import { useEffect, useState } from 'react'
import TodayWeather from './TodayWeather'
import Link from 'next/link'
import Router from "next/router"

const ModifyArea = () => {
    const modifyData = useSelector(state => state.post.modifyData)
    console.log("modifyData!!!!!=======", modifyData);
    const dispatch = useDispatch()

    /* 오늘 날씨 */
    const [todayWeather, setTodayWeather] = useState('')
    const weatherChange = (e) => {
        console.log(e.target.value);
        setTodayWeather(e.target.value)
    }

    /* 수정 부분 */
    let { id, title, content } = modifyData
    const modifyTitle = useInput(title)
    const modifyContent = useInput(content)

    const modifiedResult = useSelector(state => state.post.modifiedResult)
    console.log("modifiedLoading ==== ",modifiedResult);
    const hadleSubmit = (e) => {
        e.preventDefault()

        const data = {
            id,
            todayWeather: todayWeather,
            writeTitle: modifyTitle.value,
            writeContent: modifyContent.value
        }
        dispatch(PostModifySubmit_REQUEST(data))
        
        Router.push('/board/list')
        // if(modifiedResult === "POST_MODIFY_SUCCESS"){
        //     // console.log("id ====",id);
        //     // dispatch(PostView_REQUEST(id))
        //     // Router.push('/board/view')
            
        // }
    }

    return (
        <>
            <form onSubmit={hadleSubmit}>
                <TodayWeather weatherChange={weatherChange} />
                <WriteWrap>
                    <div>
                        <InputTitle type="text" {...modifyTitle} />
                        <InputContent {...modifyContent} />
                    </div>

                    <ButtonBox>
                        <Link href="/board/list">
                            <a><DeleteForeverRoundedIcon /></a>
                        </Link>
                        <button type='submit'>
                            <DoneOutlineRoundedIcon />
                        </button>
                    </ButtonBox>
                </WriteWrap>
            </form>
        </>
    )
}

export default ModifyArea

const WriteWrap = Styled.div`
    width : 100%;
    height : 70vh;
    margin : 0;
`

const InputTitle = Styled.input`
    width : 100%;
    height : 35px;
    border : 1px solid lightgray;
    border-radius: 5px;
    font-size : 20px;
    font-family: 'IM_Hyemin-Bold';
    
    :focus {
        outline:none;
    }
    @media only screen and (min-width:768px){
        width: 99.5%;
    }

`
const InputContent = Styled.textarea`
    width: 100%;
    height: 320px;
    margin-top: 30px;
    border : 1px solid lightgray;
    border-radius: 5px;
    font-size : 20px;
    font-family: 'IM_Hyemin-Bold';

    :focus {
        outline:none;
    }

    @media only screen and (min-width:768px){
        width: 99.5%;
        height: 47vh;
    }
`

const ButtonBox = Styled.div`
    text-align: right;
    padding-top: 20px;
    box-sizing: border-box;

    & > button,
    & > a
    {
        width: 70px;
        height: 32px;
        background: black;
        border: none;
        color: white;
        border-radius: 12px;
        padding-top: 3px;
        box-sizing: border-box;
    }
    & > a{
        display : inline-block;
        text-align: center;
    }

    & > button{
        margin-left : 10px;
    }

    & > button > svg {
        font-size : 25px;
    }
    & > a > svg {
        font-size : 25px;
    }

    @media only screen and (min-width:768px){
        height : auto;
        padding: 100px 0 0 0;


        & > button,
        & > a{
            width: 100px;
            height: 40px;
            margin-left: 10px;
            line-height: 20px;
        }

        & > button > svg {
            font-size: 33px;
        }
        & > a > svg {
            font-size : 33px;
        }
    }

    
`