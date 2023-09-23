
import {css} from "lit"

export const style = css`

:host {
	display: flex;
	flex-direction: column;
	width: 40em;
	background: #0003;
}

figure {
	display: contents;
}

.image { order: 1; }
.thumbs { order: 2; }
.caption { order: 3; }

.image {
	display: block;
	width: 100%;
}

.caption {
	display: block;
	padding: 0.5em;
	text-align: center;
}

.thumbs {
	display: flex;
	justify-content: center;
	background: #0003;
	width: 100%;
	flex-wrap: wrap;

	> img {
		display: block;
		flex: 1 1 1em;
		height: 4em;
		max-width: 4em;
		min-width: 1em;
		object-fit: cover;
		object-position: center;

		opacity: 0.4;

		&:is([data-active], :hover, :focus) {
			opacity: 1;
		}

		&[data-active] {
			border: 0.1em solid #fff8;
		}
	}
}

`

