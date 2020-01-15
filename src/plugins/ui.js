// our own UI plugin
import BaseButton from '@/components/BaseButton'

export default {
	install(Vue) {
		Vue.component('b-button', BaseButton)
	}
}
