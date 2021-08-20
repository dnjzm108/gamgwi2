import '../index.css'
import wrapper from '../store/configureStore'
import '../css/index.css'
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
// import Head from 'next/head';
import GoogleAnalytics from '../component/GoogleAnalytics';

const App = ({ Component }) => {
    const store = useStore((state) => state);
    return (
        <>
            <GoogleAnalytics />
            
            <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
                <Component />
            </PersistGate>
        </>
    )
}

export default wrapper.withRedux(App)