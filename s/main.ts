
import {register_to_dom} from "@benev/slate"

import {Context} from "./framework/context.js"
import {components} from "./framework/frontend.js"
import {AtlCounter} from "./components/atl-counter/component.js"

register_to_dom(
	components(new Context(), {
		AtlCounter,
	})
)

console.log("🎨")

