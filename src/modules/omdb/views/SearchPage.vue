<template>
	<div>
		<omdb-search-bar @title-change="onTitleChange" @click-search="search" />
		<omdb-list :list="list" />
	</div>
</template>

<script>
import OmdbSearchBar from '../components/OmdbSearchBar.vue'
import OmdbList from '../components/OmdbList.vue'

export default {
	components: {
		OmdbSearchBar,
		OmdbList,
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

