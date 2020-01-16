import swal from 'sweetalert'

function errorHandler(err) {
	if (err.hasOwnProperty('response')) {
		if (err.response.hasOwnProperty('status')) {
			if (err.response.status === 401) {
				swal({
					icon: 'error',
					title: 'Non connecté'
				})
			}
		}
	}
}

export default errorHandler
