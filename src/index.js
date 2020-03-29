import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import Router from './lib/NavRouter'
import { PersistGate } from 'redux-persist/es/integration/react'

import LoadingPage from './containers/LoadingPage'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const { store, persistor } = configureStore('testing', () => {})

const onBeforeLift = async () => {
	const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)))
	await sleep(1000)
}

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<LoadingPage />} onBeforeLift={onBeforeLift} persistor={persistor}>
			<Router history={history} />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
