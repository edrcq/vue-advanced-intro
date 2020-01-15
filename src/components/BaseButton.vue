<template>
	<div class="b-btn" @click="onClick">
		<slot name="icon"></slot>
		<slot></slot>
	</div>
</template>

<script>
export default {
	methods: {
		onClick(event) {
			this.$emit('click', event)
		}
	}
}
</script>

<style scoped>
.b-btn {
	cursor: pointer;
}
</style>
