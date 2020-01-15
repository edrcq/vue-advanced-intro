import http from '@/api/http'

const type = 'series'

export default {
	find(title) {
		return http.get(`type=${type}&t=${title}`)
	}
}
