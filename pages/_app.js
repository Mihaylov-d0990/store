import '../styles/style.scss'
import store from "../store/store"
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)