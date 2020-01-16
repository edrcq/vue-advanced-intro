import axios from 'axios'

const { API_KEY } = process.env

const http = axios.create({
	baseURL: `http://www.omdbapi.com/?apikey=${API_KEY}&`
})


const authInterceptor = config => {
	/** TODO: Add auth token */
	return config;
};


const loggerInterceptor = config => {
	/** TODO */
	return config;
}

/** Adding the request interceptors */
http.interceptors.request.use(authInterceptor);
http.interceptors.request.use(loggerInterceptor);

http.interceptors.response.use(
	response => {
		/** TODO: Add any response interceptors */
		return response;
	},
	error => {
		/** TODO: Do something with response error
		 * Like add more information about the error ? right now
		 */
		return Promise.reject(error);
	}
);

export default http
