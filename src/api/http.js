import axios from 'axios'

const { API_KEY } = process.env

const http = axios.create({
	baseURL: `http://www.omdbapi.com/?apikey=${API_KEY}&`
})

export default http
