import { createAction, handleActions } from 'redux-actions'
import Agent from '../lib/Agent'

const initialState = {
	clients: [],
	loadingClients: false,
	selectedClient: null,
	loadingClient: false,
	activity: [],
	loadingActivity: false,
	notes: [],
	loadingNotes: false,
}
export default handleActions({
	RESET_CLIENT_STATE: () => ({ ...initialState }),
	SET_CLIENTS: (state, action) => ({ ...state, clients: action.payload }),
	SET_LOADING_CLIENTS: (state, action) => ({ ...state, loadingClients: action.payload }),
	SET_SELECTED_CLIENT: (state, action) => ({ ...state, selectedClient: action.payload }),
	SET_LOADING_CLIENT: (state, action) => ({ ...state, loadingClient: action.payload }),
	SET_ACTIVITY: (state, action) => ({ ...state, activity: action.payload }),
	SET_LOADING_ACTIVITY: (state, action) => ({ ...state, loadingActivity: action.payload }),
	SET_NOTES: (state, action) => ({ ...state, notes: action.payload }),
	SET_LOADING_NOTES: (state, action) => ({ ...state, loadingNotes: action.payload }),
}, initialState)

export const resetClientState = createAction('RESET_CLIENT_STATE')
export const setClients = createAction('SET_CLIENTS')
export const setLoadingClients = createAction('SET_LOADING_CLIENTS')
export const setSelectedClient = createAction('SET_SELECTED_CLIENT')
export const setLoadingClient = createAction('SET_LOADING_CLIENT')
export const setActivity = createAction('SET_ACTIVITY')
export const setLoadingActivity = createAction('SET_LOADING_ACTIVITY')
export const setNotes = createAction('SET_NOTES')
export const setLoadingNotes = createAction('SET_LOADING_NOTES')
const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)))

export const loadClients = () => (dispatch, getState) => {
	console.log('HELLLO')
	dispatch(setLoadingClients(true))
	const load = async () => {
		await sleep(2000)
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

export const loadActivity = id => (dispatch, getState) => {
	const load = async () => {
		console.log('hi')
		await sleep(1000)
		dispatch(setActivity([
			{ text: 'This is the activity', type: 'severe', time: '03-03-1993 11:12 AM' },
			{ text: 'Added a note', type: 'standard', time: '03-03-1993 7:12 AM' },
			{ text: 'Called them', type: 'warning', time: '02-02-1993 08:12 AM' },
			{ text: 'Contract sent', type: 'warning', time: '03-01-1993 11:12 PM' },
		]))
		dispatch(setLoadingActivity(false))
	}
	dispatch(setLoadingActivity(true))
	load()
}
export const addActivity = activity => (dispatch, getSate) => {
	dispatch(setActivity([ ...getSate().clients.activity, activity ]))
}

export const loadNotes = id => (dispatch, getState) => {
	const load = async () => {
		await sleep(1000)
		dispatch(setNotes([
			{ text: 'Here is a note', time: '01-01-1992 10:15 AM', user: 'Adam Geoffrion' },
			{ text: 'This is another note', time: '02-01-1992 11:15 AM', user: 'Adam Geoffrion' },
			{ text: 'One Final NOte', time: '01-02-1992 10:15 AM', user: 'Adam Geoffrion' },
		]))
		dispatch(setLoadingNotes(false))
	}
	dispatch(setLoadingNotes(true))
	load()
}
export const addNote = text => (dispatch, getState) => {
	const note = {
		text,
		time: '01-02-1999 09:12 AM',
		user: 'Adam Geoffrion',
	}
	dispatch(setNotes([ ...getState().clients.notes, note ]))
	dispatch(addActivity({
		text: 'Added client note',
		details: text,
		type: 'severe',
		time: '01-02-1999 09:12 AM',
	}))
}
