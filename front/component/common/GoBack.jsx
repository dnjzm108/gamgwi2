import Router from 'next/router'

const GoBack = () => {
    return (
        <>
            <div>
                <p onClick={() => { Router.back() }}>뒤로가기</p>
            </div>
        </>
    )
}

export default GoBack