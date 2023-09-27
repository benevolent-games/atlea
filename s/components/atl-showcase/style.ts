
import {css} from "lit"

export const style = css`

:host {
	display: flex;
	flex-direction: column;
	width: 20em;
}

:host > header {
	padding: 0.5em;
	text-align: left;
}

:host > figure {
	position: relative;

	> img {
		display: block;
		width: 100%;
	}

	> figcaption {
		position: absolute;
		padding: 0.2em;
		bottom: 0;
		left: 0;
		right: 0;
		display: block;
		text-align: center;
		color: #fffc;
		background: #0004;
		backdrop-filter: blur(0.5em);
		text-shadow: 1px 2px 1px #000c;
	}
}

:host > .thumbs {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	background: #0003;

	> button {
		display: block;
		flex: 1 1 1em;

		height: 6em;
		max-width: 6em;
		min-width: 1em;

		border: none;
		background: transparent;

		opacity: 0.4;
		border-bottom: 2px solid transparent;

		&:is([data-active], :hover, :focus) {
			opacity: 1;
		}

		&[data-active] {
			border-color: #fb0;
		}

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			pointer-events: none;
		}
	}
}

:host > slot {
	display: block;
	padding: 1em;
	padding-bottom: 2em;
}

`

