
import {css} from "lit"

export const style = css`

:host {
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
}

.area {
	flex: 1 1 20em;

	& .requirement {
		color: var(--alpha);
	}

	.case {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));

		margin-top: 0.5em;
		gap: 0.25em;

		> button {
			display: flex;
			flex-direction: column;
			padding: 0.5em;
			background: #222;
			border-radius: 0.3em;

			opacity: 0.8;

			&:hover {
				opacity: 1;
			}

			> .required_detriments {
				padding-top: 0.3em;
				opacity: 0.5;
			}
		}
	}
}

.talent.area .case button[data-selected] {
	background: #5f54;
}

.detriment.area .case button[data-selected] {
	background: #f554;
}

button {
	background: transparent;
	padding: 0;
	color: inherit;
	border: none;
	text-align: left;
}

`

