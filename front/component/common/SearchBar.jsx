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
                    <input type="text" name="searchedValue" />
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
        width: 20%;
        height: 5vh;
        text-align: center;
        font-size: 12px;
    }
    & > form > input{
        width : 50vw;
        height : 4vh;
        margin-left : 5px; 
    }
    & > form > button{
        width: 60px;
        height : 5vh;
        border : 1px solid lightgray;
        margin-left : 5px;
    }

    @media only screen and (min-width:768px){
        text-align : right;
        
        padding : 20px 0;

        & > form > select{
            height : 3.1vh; 
        
        }
        & > form > input{
            width : 250px;
            height : 2.5vh; 
        }
        & > form > button{
            height : 3.2vh; 
        }

    }
`