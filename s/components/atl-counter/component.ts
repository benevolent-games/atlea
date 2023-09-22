
import {html} from "lit"
import {GoldElement} from "@benev/slate"

import {style} from "./style.js"
import {component} from "../../framework/frontend.js"

export const AtlCounter = component(context => class extends GoldElement {
	static styles = style

	#state = context.flat.state({
		count: 0,
	})

	#increment = () => {
		this.#state.count++
	}

	render() {
		return html`
			<button @click=${this.#increment}>
				${this.#state.count}
			</button>
		`
	}
})

