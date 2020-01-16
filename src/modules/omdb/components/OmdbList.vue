<template>
	<div>
		<template v-if="list.length > 0">
			<omdb-list-item v-for="(item, i) in list" :key="i" />
		</template>
		<template v-else>
			<h1>Pas d'item</h1>
		</template>
	</div>
</template>

<script>
import OmdbListItem from './OmdbList/OmdbListItem.vue'

export default {
	components: {
		OmdbListItem
	},
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
}
</script>

