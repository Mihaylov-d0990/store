import '../styles/style.scss'
import store from "../store/store"
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import React from 'react'

const MyApp = ({ Component, pageProps }) => {

    // Determine cart in local storage

    React.useEffect(() => {
        if (typeof localStorage.cart === "undefined") localStorage.cart = JSON.stringify({})  
    })

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)