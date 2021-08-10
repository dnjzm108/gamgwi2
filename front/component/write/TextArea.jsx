import Styled from 'styled-components'
import useInput from '../../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { PostInsert_REQUEST } from '../../reducers/post'
import { useEffect } from 'react'
import TodayWeather from './TodayWeather'


const TextArea = () => {
    const dispatch = useDispatch()
    //const { loading } = useSelector((state) => state.user)
    const writeTitle = useInput('')
    const writeContent = useInput('')
    

    const hadleSubmit = (e) => {
        e.preventDefault()
        console.log(writeTitle.value);
        console.log(writeContent.value);
        

        /*const data = {
            writeTitle: writeTitle.value,
            writeContent: writeContent.value
        }

        dispatch(PostInsert_REQUEST(data))*/
    }

    useEffect(() => {

    }, [])

    const handleCreate = (data) => {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={hadleSubmit}>
                <TodayWeather onCreate={handleCreate}/>
                <WriteWrap>
                    <div>
                        <InputTitle type="text" {...writeTitle} />
                        <InputContent {...writeContent} />
                    </div>

                    <ButtonBox>
                        <button>취소</button>
                        <button type='submit'>저장</button>
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
    
    :focus {
        outline:none;
    }
    @media only screen and (min-width:768px){
        width: 99.5%;
    }

`
const InputContent = Styled.textarea`
    //margin: 0px;
    width: 100%;
    height: 340px;
    margin-top: 30px;
    border : 1px solid lightgray;
    border-radius: 5px;
    font-size : 20px;

    :focus {
        outline:none;
    }

    @media only screen and (min-width:768px){
        width: 99.5%;
        height: 47vh;
    }
`

const ButtonBox = Styled.div`
    text-align : right;
    @media only screen and (min-width:768px){
        height : auto;
        padding: 100px 0 0 0;
    }
`