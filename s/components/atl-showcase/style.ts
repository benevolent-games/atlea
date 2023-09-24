
import {css} from "lit"

export const style = css`

:host {
	display: flex;
	flex-direction: column;
	width: 20em;
	background: #0003;
}

:host > figure { display: contents; }

:host > header {order: 1; }
:host > figure > img { order: 2; }
:host > .thumbs { order: 3; }
:host > figure > figcaption { order: 4; }

:host > header {
	padding: 0.5em;
	text-align: center;
}

:host > figure {
	> img {
		display: block;
		width: 100%;
	}

	> figcaption {
		display: block;
		padding: 0.5em;
		text-align: center;
	}
}

:host > .thumbs {
	display: flex;
	justify-content: center;
	background: #0003;
	width: 100%;
	flex-wrap: wrap;

	> button {
		display: block;
		flex: 1 1 1em;

		height: 4em;
		max-width: 4em;
		min-width: 1em;

		border: none;
		background: transparent;

		opacity: 0.4;
		border-bottom: 2px solid transparent;

		&:is([data-active], :hover, :focus) {
			opacity: 1;
		}

		&[data-active] {
			border-color: #fff8;
		}

		> img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
}

`

