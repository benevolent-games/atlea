
import {html} from "lit"
import {Attributes, GoldElement} from "@benev/slate"

import {style} from "./style.js"
import {when} from "../../tools/ezlit.js"
import {component} from "../../framework/frontend.js"

export const AtlShowcase = component(context => class extends GoldElement {
	static styles = style

	#attrs = Attributes.setup(this as GoldElement, {
		images: String,
	})

	#state = context.flat.state({
		index: 0,
	})

	get images() {
		return (this.#attrs.images ?? "")
			.split("=>")
			.map(s => s.trim())
			.filter(s => s.length > 0)
			.map(unit => {
				const [url, ...caption_parts] = unit
					.split(/\s+/)
					.map(s => s.trim())
					.filter(s => s.length > 0)
				const caption = caption_parts.join(" ")
				return {url, caption}
			})
	}

	get current_image() {
		const {images} = this
		const {index} = this.#state
		return images.at(index)
	}

	#click_thumb = (index: number) => () => {
		this.#state.index = index
	}

	render() {
		const {images, current_image} = this
		const current_index = this.#state.index

		if (!current_image)
			return html`<p>error: no current image</p>`

		return html`
			<figure>
				<img src="${current_image.url}" alt=""/>
				<figcaption>
					${current_image.caption}
				</figcaption>
			</figure>

			${when(images.length > 1, () => html`
				<div class=thumbs>
					${images.map((image, index) => html`
						<button
							@click=${this.#click_thumb(index)}
							?data-active=${index === current_index}>
							<img alt="" src="${image.url}"/>
						</button>
					`)}
				</div>
			`)}

			<slot></slot>
		`
	}
})

