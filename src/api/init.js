import axios from 'axios'
import ResponseErrorHandler from './ResponseErrorHandler'
import { errors } from '@/constants/errors'

export default function initApi({ token } = {}) {

	const responseErrorHandler = new ResponseErrorHandler({
		errors
	})

	const instance = axios.create({
		baseURL: 'https://reqres.in/api',
		timeout: 3000,
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})

	instance.interceptors.response.use(function (response) {
		return response
	}, function(err) {
		responseErrorHandler.checkError(err)
	})

	return instance
}
