const SearchBar = () => {
    return (
        <>
            <div>
                <form>
                    <select name="search">
                        <option value="noen" disabled>==선택==</option>
                        <option value="writer" selected>작성자</option>
                        <option value="content">내용</option>
                        <option value="title">제목</option>
                    </select>
                    <input type="text" />
                    <button>검색</button>
                </form>
            </div>
        </>
    )
}

export default SearchBar