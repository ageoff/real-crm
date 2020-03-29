import { createAction, handleActions } from 'redux-actions'
import Agent from '../lib/Agent'

const initialState = {
	clients: [],
	loadingClients: false,
	selectedClient: null,
	loadingClient: false,
}
export default handleActions({
	RESET_CLIENT_STATE: () => ({ ...initialState }),
	SET_CLIENTS: (state, action) => ({ ...state, clients: action.payload }),
	SET_LOADING_CLIENTS: (state, action) => ({ ...state, loadingClients: action.payload }),
	SET_SELECTED_CLIENT: (state, action) => ({ ...state, selectedClient: action.payload }),
	SET_LOADING_CLIENT: (state, action) => ({ ...state, loadingClient: action.payload }),
}, initialState)

export const resetClientState = createAction('RESET_CLIENT_STATE')
export const setClients = createAction('SET_CLIENTS')
export const setLoadingClients = createAction('SET_LOADING_CLIENTS')
export const setSelectedClient = createAction('SET_SELECTED_CLIENT')
export const setLoadingClient = createAction('SET_LOADING_CLIENT')
const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)))

export const loadClients = () => (dispatch, getState) => {
	console.log('HELLLO')
	dispatch(setLoadingClients(true))
	const load = async () => {
		await sleep(5000)
		dispatch(setClients([
			{ id: 1, first: 'Joe', last: 'Smith', phone: '9131231234', email: 'joe@gmail.com', address: '123 W Street st. Olathe, KS 66061', status: 'Searching' },
			{ id: 2, first: 'Jane', last: 'Doe', phone: '9133213322', email: 'jane.smith@gmail.com', address: '123 W Street st. Olathe, KS 66061', status: 'Under Contract' },
			{ id: 3, first: 'Will', last: 'Press', phone: '9134565544', email: 'will.p@gmail.com', address: '123 W Street st. Olathe, KS 66061', status: 'Placed' },
		]))
		dispatch(setLoadingClients(false))
	}
	load()
	console.log('HELLLO')
}

export const loadClient = id => (dispatch, getState) => {
	const load = async () => {
		console.log('hi')
		await sleep(2000)
		const clis = getState().clients.clients
		const tmep = clis.find(c => (c.id === id))
		console.log(tmep)
		dispatch(setSelectedClient(tmep))
		console.log('yo')
		dispatch(setLoadingClient(false))
	}
	dispatch(setLoadingClient(true))
	load()
}
