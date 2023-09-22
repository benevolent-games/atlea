
import {theme} from "./theme.js"
import {BaseContext, Flat} from "@benev/slate"

export class Context implements BaseContext {
	theme = theme
	flat = new Flat()
}

