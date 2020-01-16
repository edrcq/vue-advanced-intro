import Vue from 'vue'
import { initApi, AuthRepository } from '@/api'
import ui from '@/plugins/ui'
import importModules from './importModules'

const instance = initApi({ token: 'JWT--XX' })
const authRepository = new AuthRepository(instance)

import { VLazyImagePlugin } from "v-lazy-image";
Vue.use(VLazyImagePlugin);

export {
	authRepository,
	ui,
	importModules,
}
