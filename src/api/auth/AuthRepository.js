export default class AuthRepository {
	constructor(axios) {
		this.axios = axios
	}

	async login(email, password) {
		return this.axios.post('/login', { email, password })
	}

	async register(email, password) {
		return this.axios.post('/register', { email, password })
	}
}
