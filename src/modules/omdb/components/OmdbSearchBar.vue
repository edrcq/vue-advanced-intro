<template>
	<div>
		<input
			@input="inputChange"
			:value="inputValue"
			@keypress.enter="$emit('click-search')
		"/>
	</div>
</template>

<script>
export default {
	data() { return {
		inputValue: '',
	}},
	methods: {
		inputChange(event) {
			this.inputValue = event.target.value
			console.log(this.inputValue)
			this.$emit('title-change', event.target.value)
		}
	}
}
</script>

