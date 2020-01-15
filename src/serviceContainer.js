const RepositoryInterface = {
	find() {},
	//list() {},
};

function bind(repositoryName, Interface) {
	const result = {}

	for (let key of Object.keys(Interface)) {
		const method = async (...args) => {
			const repository = await import(`./repositories/${repositoryName}`);
			return repository.default[method](...args);
		}
		result[key] = method
	}

	return result
	/*
	return {
		... Object.keys(Interface).reduce((prev, method) => {
				const resolveableMethod = async (...args) => {
					const repository = await import(`./repositories/${repositoryName}`);
					return repository.default[method](...args);
			};
			return { ...prev, [method]: resolveableMethod };
		}, {}),
	};*/
}

export default {
	movieRepository: bind('movie', RepositoryInterface),
	serieRepository: bind('series', RepositoryInterface),
	episodeRepository: bind('episode', RepositoryInterface),
};
