// TODO: import it
export default function guards(router) {
	router.beforeEach((to, from, next) => {
		const lang = to.params.lang
		loadLanguageAsync(lang).then(() => next())
	})
}
