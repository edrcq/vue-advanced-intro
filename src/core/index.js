import { initApi, AuthRepository } from '@/api'
import ui from '@/plugins/ui'
import importModules from './importModules'

const instance = initApi({ token: 'JWT--XX' })
const authRepository = new AuthRepository(instance)

export {
	authRepository,
	ui,
	importModules,
}
