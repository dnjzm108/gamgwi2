import Styled from "styled-components"
import useInput from '../../hooks/useInput'
import {useDispatch, useSelector} from 'react-redux'
import {PostSearch_REQUEST} from '../../reducers/post'
import { useEffect,useState } from "react"
import Link from 'next/link'
import Router from 'next/router'


const SearchBar = () => {
    const dispatch = useDispatch()
    const searchedValue = useInput('')
    const [search,setSearch] = useState('')
    
    

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            search:search,
            searchedValue:searchedValue.value,
            test:'test'
        }
        dispatch(PostSearch_REQUEST(data))
        Router.push(`/searches/search?category=${search}`)
    }

    useEffect(()=>{

    },[])

    return (
        <>
            <SearchBarWrap>
                <form onSubmit={handleSubmit}>
                    <select name="search" onChange={handleChange}>
                        <option value="none">==선택==</option>
                        <option value="nickName"  >작성자</option>
                        <option value="content">내용</option>
                        <option value="title">제목</option>
                    </select>
                    <input type="text" name="searchedValue" {...searchedValue} />
                    <button type="submit">Search</button>
                </form>
            </SearchBarWrap>
        </>
    )
}

export default SearchBar



const SearchBarWrap = Styled.div`
// 모바일 버전
    position: fixed;
    bottom: 13vh;
    display : flex;
    justify-content : center;
    padding: 0 5vw;
    /* padding: 0px 15px; */
    /* width: 100%; */
    /* height: 9.5%; */
    /* text-align: center; */
    /* box-sizing: border-box;*/
    & > form > select{
        width: 20%;
        height: 5vh;
        text-align: center;
        font-size: 12px;
        font-family: 'IM_Hyemin-Bold';
    }
    & > form > select:focus{
        outline : none;
    }
    & > form > input{
        width : 50vw;
        height : 4vh;
        margin-left : 5px; 
    }
    & > form > input:focus{
        outline : none;
    }
    & > form > button{
        width: 60px;
        height : 5vh;
        border : 1px solid lightgray;
        margin-left : 5px;
        font-weight: bold;
        font-size: 13px;
        font-family: 'IM_Hyemin-Bold';
        cursor : pointer;
    }
    @media only screen and (max-width:375px){
        & > form > input{
            width : 45vw;
        }
    }
    @media only screen and (min-width:768px){
        text-align : right;
        right: 18vw;
        padding : 20px 0;
        & > form > select{
            width: 17%;
            height : 3.1vh; 
        }
        & > form > input{
            width : 250px;
            height : 2.5vh; 
        }
        & > form > select:focus,
        & > form > input:focus{
            outline : none;
        }
        & > form > button{
            width: 85px;
            height : 3.2vh; 
        }
    }
`