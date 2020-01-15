
// omdb vuex store
export default {
	namespaced: true,

	state: {
		test: ''
	},
	mutations: {
		test(state, str) {
			state.test = str
		}
	},
	actions: {

	},
	getters: {

	}
}
