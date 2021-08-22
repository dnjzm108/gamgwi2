import useInput from '../../hooks/useInput'
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import { useDispatch, useSelector } from 'react-redux'
import { PostModifySubmit_REQUEST , PostView_REQUEST } from '../../reducers/post'
import { useEffect, useState } from 'react'
import TodayWeather from './TodayWeather'
import Link from 'next/link'
import Router from "next/router"
import { WriteWrap, InputTitle, InputContent, ButtonBox } from './TextAreaCss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const ModifyArea = () => {
    const modifyData = useSelector(state => state.post.modifyData)
    const dispatch = useDispatch()

    /* 오늘 날씨 */
    const [todayWeather, setTodayWeather] = useState('')
    const weatherChange = (e) => {
        setTodayWeather(e.target.value)
    }

    /* 수정 부분 */
    let { id, title, content } = modifyData
    const modifyTitle = useInput(title)
    const modifyContent = useInput(content)

    const modifiedResult = useSelector(state => state.post.modifiedResult)
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
    }

    return (
        <>
            <form onSubmit={hadleSubmit}>
                <TodayWeather weatherChange={weatherChange} />
                <WriteWrap>
                    <div>
                        <InputTitle type="text" {...modifyTitle} />
                        <InputContent {...modifyContent} />
                        <label htmlFor="source">어디에서 발견하셨나요? (출처를 남겨주세요!)</label>
                        <InputTitle type="text" id="source"/>
                    </div>

                    <ButtonBox>
                        <Link href="/board/list">
                            <a><ArrowBackIcon /></a>
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

