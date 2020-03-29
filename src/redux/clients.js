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

export const loadClients = () => (dispatch, getState) => {
	const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)))
	console.log('HELLLO')
	dispatch(setLoadingClients(true))
	const load = async () => {
		await sleep(5000)
		dispatch(setClients([
			{ first: 'Joe', last: 'Smith', status: 'Searching' },
			{ first: 'Jane', last: 'Doe', status: 'Under Contract' },
			{ first: 'Will', last: 'Press', status: 'Placed' },
		]))
		dispatch(setLoadingClients(false))
	}
	load()
	console.log('HELLLO')
}
