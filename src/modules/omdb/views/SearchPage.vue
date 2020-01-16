<template>
	<div>
		<omdb-search-bar @title-change="onTitleChange" @click-search="search" />
		<omdb-list :list="list" />
	</div>
</template>

<script>

export default {
	components: {
		OmdbSearchBar: () => import('../components/OmdbSearchBar.vue'),
		OmdbList: () => import('../components/OmdbList.vue')
	},

	data() { return {
		type: 'movie',
		title: '',
		list: []
	}},

	methods: {
		async search() {
			const { title, type } = this
			this.list  = await this.$store.dispatch('omdb/findByTitle', { type, title })
		},
		onTitleChange(title) {
			this.title = title
		},
	}
}
</script>

