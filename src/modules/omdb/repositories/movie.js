import http from '@/api/http'

const type = 'movie'

export default {
	find(title) {
		return http.get(`type=${type}&s=${title}`)
	}
}
