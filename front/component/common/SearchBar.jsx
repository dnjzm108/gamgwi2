import Styled from "styled-components"

const searchSubmit = (e) => {
    e.preventDefault()

}

const SearchBar = () => {
    return (
        <>
            <SearchBarWrap>
                <form method="POST" action="http://localhost:3500/board/list">
                    <select name="search">
                        <option value="none" disabled>==선택==</option>
                        <option value="writer" selected>작성자</option>
                        <option value="content">내용</option>
                        <option value="title">제목</option>
                    </select>
                    <input type="text" name="searchedValue"/>
                    <button type="submit" onSubmit={searchSubmit}>Search</button>
                </form>
            </SearchBarWrap>
        </>
    )
}

export default SearchBar



const SearchBarWrap = Styled.div`
// 모바일 버전
    width : 100%;
    height: 9.5%;
    text-align : center;
    padding : 10px 0;
    box-sizing : border-box;


    & > form > select{
        width : auto;
        height : 5vh; 
        text-align : center;
    }
    & > form > input{
        width : 189px;
        height : 4vh;
        margin-left : 5px; 
    }
    & > form > button{
        width : 70px;
        height : 5vh;
        border : 1px solid lightgray;
        margin-left : 5px;
    }

    @media only screen and (min-width:768px){
        text-align : right;
        background : green;

        & > form > select{
            
        }
        & > form > input{
            
        }
        & > form > button{
            
        }

    }
`