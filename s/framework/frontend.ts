
import {Context} from "./context.js"
import {prepare_frontend} from "@benev/slate"

export const {component, components, view, views} = prepare_frontend<Context>()

