
import {TemplateResult} from "lit"

export function when(condition: boolean, make: () => TemplateResult) {
	return condition
		? make()
		: undefined
}

