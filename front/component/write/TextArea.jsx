import useInput from '../../hooks/useInput'
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import { useDispatch, useSelector } from 'react-redux'
import { PostInsert_REQUEST } from '../../reducers/post'
import { useEffect, useState } from 'react'
import TodayWeather from './TodayWeather'
import Link from 'next/link'
import { WriteWrap, InputTitle, InputContent, ButtonBox } from './TextAreaCss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const TextArea = () => {
    const dispatch = useDispatch()
    const userinfo = useSelector(state=>state.user.user_info)
    
    /* 글 작성 */
    const writeTitle = useInput('')
    const writeContent = useInput('')
    const writeSource = useInput('')

    /* 오늘 날씨 */
    const [todayWeather, setTodayWeather] = useState('')
    const weatherChange = (e) => {
        setTodayWeather(e.target.value)
    }

    const hadleSubmit = (e) => {
        e.preventDefault()

        const data = {
            todayWeather: todayWeather,
            writeTitle: writeTitle.value,
            writeContent: writeContent.value,
            writeSource: writeSource.value,
            useridx:userinfo.userIdx,
            userpw:userinfo.userpw,
            userid:userinfo.userid
        }

        dispatch(PostInsert_REQUEST(data))
    }

    return (
        <>
            <form onSubmit={hadleSubmit}>
                <TodayWeather weatherChange={weatherChange} />
                <WriteWrap>
                    <div>
                        <InputTitle type="text"  {...writeTitle} />
                        <InputContent  {...writeContent} />
                        <label htmlFor="source">어디에서 발견하셨나요? (출처를 남겨주세요!)</label>
                        <InputTitle type="text" id="source" {...writeSource}/>
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

export default TextArea
