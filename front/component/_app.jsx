import '../../front/'
import '../index.css'
import Head from 'next/head'
import Store, { initalState } from '../store/context'
import { useContext, useReducer } from 'react'
import reducer from '../reducers'
import wrapper from '../store/configureStore'

const App = ({ Component }) => {
    const globalContext = useContext(Store)
    const [state, dispatch] = useReducer(reducer, globalContext)
    
    return (
        <>
            <Store.Provider value={{ state, dispatch }}>
                <Component />
            </Store.Provider>
        </>
    )
}

export default wrapper.withRedux(App)