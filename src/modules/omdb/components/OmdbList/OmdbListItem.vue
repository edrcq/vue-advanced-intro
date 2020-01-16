<template>
	<div>
		{{ item }}
		<v-lazy-image v-if="item.poster" :src="item.poster" />
	</div>
</template>

<script>
export default {
	props: {
		item: Object,
	}
}
</script>

