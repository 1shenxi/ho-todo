import {App, DefineComponent} from 'vue';
import Input from './Input/index.vue'

const comps: Array<[string, DefineComponent]> = [
  ['b-input', Input]
]

export const install = (app: App<Element>) => {
  comps.forEach(([compName, comp]) => app.component(compName, comp))
}
