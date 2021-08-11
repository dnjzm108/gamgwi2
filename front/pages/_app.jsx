import '../index.css'
import wrapper from '../store/configureStore'
import Store from '../store/context'
import Stroe from '../store/context'

const App = ({ Component }) => {

    return (
        <> 
            <Component />
        </>
    )
}

export default wrapper.withRedux(App)