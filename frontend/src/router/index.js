import { createElementVNode as _createElementVNode, resolveDynamicComponent as _resolveDynamicComponent, openBlock as _openBlock, createBlock as _createBlock, createTextVNode as _createTextVNode, Fragment as _Fragment, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = /*#__PURE__*/_createElementVNode("a", { href: "#/about" }, "Main", -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/_createElementVNode("a", { href: "#/works" }, "Portfolio", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/_createElementVNode("a", { href: "#/contacts" }, "Contacts", -1 /* HOISTED */)

import { ref, computed } from 'vue'
import Main from '../modules/portfolio/pages/MainPage.vue'
import Portfolio from "../modules/portfolio/pages/Portfolio.vue";
import Contacts from "../modules/portfolio/pages/Contacts.vue";


const __sfc__ = {
	__name: 'App',
	setup(__props) {

		const routes = {
			'/about': Main,
			'/works': Portfolio,
			'/contacts': Contacts
		}

		const currentPath = ref(window.location.hash)

		window.addEventListener('hashchange', () => {
			currentPath.value = window.location.hash
		})

		const currentView = computed(() => {
			return routes[currentPath.value.slice(1) || '/'] || NotFound
		})

		return (_ctx, _cache) => {
			return (_openBlock(), _createElementBlock(_Fragment, null, [
				_hoisted_1,
				_createTextVNode(" | "),
				_hoisted_2,
				_createTextVNode(" | "),
				_hoisted_3,
				(_openBlock(), _createBlock(_resolveDynamicComponent(currentView.value)))
			], 64 /* STABLE_FRAGMENT */))
		}
	}

}
__sfc__.__file = "src/App.vue"
export default __sfc__
