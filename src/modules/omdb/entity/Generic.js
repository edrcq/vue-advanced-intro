/*

{"Title":"The Imitation Game",
"Year":"2014",
"Rated":"PG-13",
"Released":"25 Dec 2014",
"Runtime":"114 min",
"Genre":"Biography, Drama, Thriller, War",
"Director":"Morten Tyldum","Writer":"Graham Moore, Andrew Hodges (book)",
"Actors":"Benedict Cumberbatch, Keira Knightley, Matthew Goode, Rory Kinnear",
"Plot":"During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.",
"Language":"English, German",
"Country":"UK, USA",
"Awards":"Won 1 Oscar. Another 48 wins & 158 nominations.",
"Poster":"https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX300.jpg",
"Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"73/100"}],
"Metascore":"73",
"imdbRating":"8.0",
"imdbVotes":"637,441",
"imdbID":"tt2084970",
"Type":"movie",
"DVD":"31 Mar 2015",
"BoxOffice":"N/A",
"Production":"The Weinstein Company",
"Website":"N/A",
"Response":"True"}

*/

class Generic {
	constructor({ Title, Type, Production, Year, Poster, imdbRating } = {}) {
		this.title = Title || ''
		this.type = Type || ''
		this.production = Production || ''
		this.year = Year || ''
		this.poster = Poster || ''
		this.imdbRating = parseInt(imdbRating) || 0
	}
}

/*
	constructor(allStuff) {
		for (let key of Object.keys(allStuff)) {
			this[key] = allStuff[key]
		}
	}
*/

export default Generic
