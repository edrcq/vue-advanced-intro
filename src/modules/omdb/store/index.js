import * as repositories from '../repositories'

import {
	Movie,
} from '../entity'

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
		async findByTitle(ctx, { type, title }) {
			try {
				const { data } = await repositories[type].find(title)
				// data.totalResults = 1   data.Search = []
				const list = []
				for (let item of data.Search) {
					let entity
					if (item.Type == 'movie') {
						entity = new Movie(item)
					}
					list.push(entity)
				}
				console.log(list)
				return list
				/*
				for (let c = 0; c < data.totalResults; c++) {

				}*/

			}
			catch (err) {
				return []
			}
		}
	},
	getters: {

	}
}
