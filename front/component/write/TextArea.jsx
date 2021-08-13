import useInput from '../../hooks/useInput'
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'
import { useDispatch, useSelector } from 'react-redux'
import { PostInsert_REQUEST } from '../../reducers/post'
import { useEffect, useState } from 'react'
import TodayWeather from './TodayWeather'
import Link from 'next/link'
import { WriteWrap, InputTitle, InputContent, ButtonBox } from './TextAreaCss'

const TextArea = () => {
    const dispatch = useDispatch()

    /* 글 작성 */
    const writeTitle = useInput('')
    const writeContent = useInput('')

    /* 오늘 날씨 */
    const [todayWeather, setTodayWeather] = useState('')
    const weatherChange = (e) => {
        console.log(e.target.value);
        setTodayWeather(e.target.value)
    }

    const hadleSubmit = (e) => {
        e.preventDefault()

        const data = {
            todayWeather: todayWeather,
            writeTitle: writeTitle.value,
            writeContent: writeContent.value
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

export default TextArea
