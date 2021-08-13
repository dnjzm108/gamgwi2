import {useRouter} from 'next/router'
import Head from 'next/head'

const Search = () => {
    const router = useRouter()
    const {search} = router.query
    const {searchedValue} = router.query
    return(
        <>
            <Head>
                <title>Gamgwi | {search}_{searchedValue}</title>
            </Head>
            <p>{search}_{searchedValue}</p>
        </>
    )
}

export default Search