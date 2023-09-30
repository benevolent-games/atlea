
import {html} from "lit"
import {GoldElement} from "@benev/slate"

import {style} from "./style.js"
import {component} from "../../framework/frontend.js"

function assert<X>(x: X) {
	if (x === undefined)
		throw new Error("assert failed")
	else
		return x
}

export namespace Traits {

	export type Talent = {
		description: string
		detriments: {
			major: number
			minor: number
		}
	}

	export type Detriment = {
		description: string
	}

	const talent = (name: string) => ({
		detriments: (major: number, minor: number) => ({
			description: (content: string) => ([name, {
				detriments: {major, minor},
				description: content,
			}] as [string, Talent])
		})
	})

	const detriment = (name: string) => ({
		description: (content: string) =>
			[name, {description: content}] as [string, Detriment]
	})


	export const talents = new Map<string, Talent>([
		talent("Resourceful")
			.detriments(1, 1)
			.description(`Crafting costs half the ingredients.`),

		talent("Sprinter")
			.detriments(1, 1)
			.description(`Halved sprinting stamina cost.`),

		talent("Drunken Master")
			.detriments(0, 0)
			.description(`Drinking alcohol increases stamina, but if deprived of alcohol, you lose stamina, and then get the shakes, and then die. You also heal slower.`),

		talent("Packmule")
			.detriments(1, 1)
			.description(`Have 5 belt slots instead of 3, carry a heavier load.`),

		talent("Warrior")
			.detriments(1, 1)
			.description(`Start with cheap axe and wood shield`),

		talent("Fashionable")
			.detriments(0, 1)
			.description(`Start with nice clothes.`),

		talent("Magis")
			.detriments(0, 1)
			.description(`Start with a tiny fleck luxium.`),
	])

	export const detriments = {
		major: new Map([
			detriment("Dunce")
				.description(`Earn skill points at half the rate.`),

			detriment("Bad Luck")
				.description(`All random rolls go worse for you, and everyone around you (within 10 feet).`),

			detriment("Disorganized")
				.description(`Inventory arrangement is regularly scrambled.`),

			detriment("Stuck Pig")
				.description(`Double bleeding rate.`),

			detriment("Glutton")
				.description(`Require double food and water.`),
		]),

		minor: new Map([
			detriment("Clumsy")
				.description(`Drop things you pick up 10% of the time.`),

			detriment("Sickly")
				.description(`Get sick and vomit twice a day.`),

			detriment("Gullible")
				.description(`Occasionally swindled during trade (overpaying, or being underpaid).`),

			detriment("Picky Eater")
				.description(`Refuses to eat particular foods.`),

			detriment("Bad Breath")
				.description(`Difficult to make friends or allies.`),

			detriment("Gassy")
				.description(`Randomly fart and burp several times a day, which can bother people or alert enemies.`),

			detriment("Bad Nightvision")
				.description(`Can't see in the dark without a light.`),

			detriment("Bad Form")
				.description(`Sometimes your throws only go five feet, and sometimes when you try to jump, you trip and ragdoll to the ground.`),

			detriment("Jackass")
				.description(`Sometimes the insult dialog option is randonly instantly chosen.`),

			detriment("Nervous")
				.description(`Sometimes the attack button does a parry instead. Also, occasionally the wrong dialog option is chosen.`),
		]),
	}

	export const get = {
		talent: (name: string) => assert(talents.get(name)),
		detriment: {
			major: (name: string) => assert(detriments.major.get(name)),
			minor: (name: string) => assert(detriments.minor.get(name)),
		},
	}
}

type DetrimentReport = Traits.Detriment & {
	name: string
}

type TalentReport = {
	name: string
	description: string
	detriments: {
		major: (DetrimentReport | undefined)[]
		minor: (DetrimentReport | undefined)[]
	}
}

export const maximum_number_of_talents = 3

export const AtlTalents = component(context => class extends GoldElement {
	static styles = style

	#state = context.flat.state({
		talents: [] as {
			name: string
			detriments: {
				major: (string | undefined)[]
				minor: (string | undefined)[]
			},
		}[],
	})

	get #talents() {
		return this.#state.talents.map(({name, detriments: {major, minor}}) => ({
			...Traits.get.talent(name),
			name,
			detriments: {
				major: major.map(name => name
					? {name, ...Traits.get.detriment.major(name)}
					: undefined),
				minor: minor.map(name => name
					? {name, ...Traits.get.detriment.minor(name)}
					: undefined),
			},
		} satisfies TalentReport))
	}

	#render_talent_selector(talent: TalentReport | undefined) {
		const change = (event: InputEvent) => {
			const select = event.target as HTMLSelectElement
			const option = select.options[select.selectedIndex]
			debugger
		}

		return html`
			<div class=talent>
				<label>
					<span>talent:</span>
					<select @change=${change}>
						${[...Traits.talents.keys()].map(name => html`
							<option ?selected="${name === talent?.name}">
								${name}
							</option>
						`)}
					</select>
				</label>
				${talent
					? html`<p>${talent.description}</p>`
					: undefined}
			</div>
		`
	}

	render() {
		const talents = this.#talents
		const offer_to_add_new_talent = talents.length < maximum_number_of_talents

		return html`
			${this.#talents.map(this.#render_talent_selector)}
			${offer_to_add_new_talent
				? this.#render_talent_selector(undefined)
				: undefined}
		`
	}
})

