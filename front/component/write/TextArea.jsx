import Styled from 'styled-components'
import useInput from '../../hooks/useInput'
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { useDispatch, useSelector } from 'react-redux'
import { PostInsert_REQUEST } from '../../reducers/post'
import { useEffect, useState } from 'react'
import TodayWeather from './TodayWeather'
import Link from 'next/link'


const TextArea = () => {
    const dispatch = useDispatch()
    //const { loading } = useSelector((state) => state.user)
    const writeTitle = useInput('')
    const writeContent = useInput('')

    const [todayWeather, setTodayWeather] = useState('')

    const weatherChange = (e) =>{
        console.log(e.target.value);
        setTodayWeather(e.target.value)
    }

    const hadleSubmit = (e) => {
        e.preventDefault()
        console.log(writeTitle.value);
        console.log(writeContent.value);

        const data = {
            todayWeather : todayWeather,
            writeTitle: writeTitle.value,
            writeContent: writeContent.value
        }

        dispatch(PostInsert_REQUEST(data))
    }

    useEffect(() => {
        
    }, [])

    return (
        <>
            <form onSubmit={hadleSubmit}>
                <TodayWeather weatherChange={weatherChange}/>
                <WriteWrap>
                    <div>
                        <InputTitle type="text" {...writeTitle} />
                        <InputContent {...writeContent} />
                    </div>

                    <ButtonBox>
                        <Link href="/board/list">
                           <a><DeleteForeverRoundedIcon/></a>
                        </Link>
                        <button type='submit'>
                            <DoneOutlineRoundedIcon/>
                        </button>
                    </ButtonBox>
                </WriteWrap>
            </form>
        </>
    )
}

export default TextArea

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