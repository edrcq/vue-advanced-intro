
export default class ResponseErrorHandler {
	constructor({ errors }) {
		this.errors = errors || []
	}

	checkError(err) {
		console.log('err', err)
		console.log('err.res', err.response)
	}
}
