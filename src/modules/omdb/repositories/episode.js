import http from '@/api/http'

const type = 'episode'

export default {
	find(title) {
		return http.get(`type=${type}&s=${title}`)
	}
}
