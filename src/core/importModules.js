const modulesList = [
	'omdb'
]

async function importModules({ store, router }) {
	// import vuex store of the module
	for (let moduleName of modulesList) {
		const vuexModule = await import(`@/modules/${moduleName}`)
		store.registerModule(moduleName, vuexModule.store)

		router.addRoutes(vuexModule.router)
	}
}

export default importModules
