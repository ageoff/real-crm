import { create } from 'apisauce'

// define the api
let api = null
const init = (token) => {
	api = create({
		baseURL: 'http://localhost:3000',
		headers: { Authorization: `Bearer ${token}` },
	})
}

// Login with no header. No need to save api state
const login = (email, password) => create(
	{
		baseURL: 'http://localhost:3000',
	},
).post('/users/login', { email, password })

const loadClaimMeta = () => api.get('/claims/meta')

export default {
	init,
	login,
	loadClaimMeta,
}
