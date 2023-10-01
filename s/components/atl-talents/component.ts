
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

namespace arr {
	export function add<X>(a: X[], v: X) {
		return [...a, v]
	}
	export function remove<X>(a: X[], v: X) {
		return a.filter(x => x !== v)
	}
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
			.description(`Crafting ingredient cost is halved.`),

		talent("Sprinter")
			.detriments(1, 1)
			.description(`Sprinting stamina cost is halved.`),

		talent("Drunken Master")
			.detriments(0, 0)
			.description(`Alcohol gives you strength, but without it, you get the shakes and die.`),

		talent("Packmule")
			.detriments(1, 1)
			.description(`Have 5 belt slots instead of 3, carry a heavier load.`),

		talent("Warrior")
			.detriments(2, 1)
			.description(`Start with cheap axe and wood shield.`),

		talent("Fashionable")
			.detriments(0, 1)
			.description(`Start with nicer clothes.`),

		talent("Magis")
			.detriments(0, 1)
			.description(`Start with a tiny fleck of luxium.`),
	])

	export const detriments = {
		major: new Map([
			detriment("Dunce")
				.description(`Earn skill points at half the rate.`),

			detriment("Bad Luck")
				.description(`All random rolls go worse for you, and everyone around you within 10 feet.`),

			detriment("Disorganized")
				.description(`Inventory arrangement is regularly shuffled.`),

			detriment("Stuck Pig")
				.description(`Double bleeding rate.`),

			detriment("Glutton")
				.description(`Require double food and water.`),

			detriment("Lost")
				.description(`No map, no compass.`),

			detriment("Minimalist")
				.description(`Refuses to wear a backpack (tiny inventory).`),
		]),

		minor: new Map([
			detriment("Clumsy")
				.description(`Drop things you pick up 10% of the time.`),

			detriment("Bad Breath")
				.description(`People are less likely to like you.`),

			detriment("Unsightly")
				.description(`People are unlikely to feel romantic toward you.`),

			detriment("Gassy")
				.description(`Occasional unexpected flatulence, bothers people and alerts enemies.`),

			detriment("Nervous")
				.description(`Sometimes the attack button does a parry instead. Also, occasionally the wrong dialog option is used.`),

			detriment("Bad Form")
				.description(`Sometimes you trip when jumping and ragdoll instead. Sometimes your throws fail.`),

			detriment("Jackass")
				.description(`Sometimes while you're reading dialog options, 'insult' is auto-chosen.`),

			detriment("Poor Night Eyes")
				.description(`Can't see in the dark without a light.`),

			detriment("Sickly")
				.description(`Get sick and vomit twice a day.`),

			detriment("Gullible")
				.description(`Occasionally swindled during trade (overpaying, or being underpaid).`),

			detriment("Fussy")
				.description(`Refuses to eat particular foods.`),
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

export const AtlTalents = component(context => class extends GoldElement {
	static styles = style

	#state = context.flat.state({
		selected_talents: [] as string[],
		selected_major_detriments: [] as string[],
		selected_minor_detriments: [] as string[],
	})

	render() {
		const {selected_talents, selected_major_detriments, selected_minor_detriments} = this.#state

		let number_of_required_major_detriments = 0
		let number_of_required_minor_detriments = 0

		const talents = [...Traits.talents.entries()]
			.map(([name, {description, detriments}]) => {
				const selected = selected_talents.includes(name)
				if (selected) {
					number_of_required_major_detriments += detriments.major
					number_of_required_minor_detriments += detriments.minor
				}
				return {name, description, detriments, selected}
			})

		const needed_major_detriments = (
			number_of_required_major_detriments - selected_major_detriments.length
		)

		const needed_minor_detriments = (
			number_of_required_minor_detriments - selected_minor_detriments.length
		)

		const s = (s: string, n: number) => (n === 1)
			? s
			: s + "s"

		const major_message = needed_major_detriments > 0
			? html`
				<span class=requirement>
					(${needed_major_detriments}
					more ${s("selection", needed_major_detriments)} required)
				</span>
			`
			: undefined

		const minor_message = needed_minor_detriments > 0
			? html`
				<span class=requirement>
					(${needed_minor_detriments}
					more ${s("selection", needed_minor_detriments)} required)
				</span>
			`
			: undefined

		const major_detriments = [...Traits.detriments.major.entries()]
			.map(([name, {description}]) => ({
				name,
				description,
				selected: selected_major_detriments.includes(name),
			}))

		const minor_detriments = [...Traits.detriments.minor.entries()]
			.map(([name, {description}]) => ({
				name,
				description,
				selected: selected_minor_detriments.includes(name),
			}))

		const detriments_message = ({major, minor}: {
				major: number,
				minor: number,
			}) => ((major || minor)
			? html`
				<p class=required_detriments>
					${major ?`${major} ${s("detriment", major)}` :undefined}
					${(major && minor) ? html`<br/>` : undefined}
					${minor ?`${minor} ${s("shortcoming", minor)}` :undefined}
				</p>
			`
			: undefined
		)

		const clickTalent = (name: string) => () => {
			const talents = this.#state.selected_talents
			this.#state.selected_talents = talents.includes(name)
				? arr.remove(talents, name)
				: arr.add(talents, name)
		}

		const clickMajor = (name: string) => () => {
			const majors = this.#state.selected_major_detriments
			this.#state.selected_major_detriments = majors.includes(name)
				? arr.remove(majors, name)
				: arr.add(majors, name)
		}

		const clickMinor = (name: string) => () => {
			const minors = this.#state.selected_minor_detriments
			this.#state.selected_minor_detriments = minors.includes(name)
				? arr.remove(minors, name)
				: arr.add(minors, name)
		}

		return html`
			<div class="talent area">
				<h3>
					Talents
				</h3>
				<div class=case>
					${talents.map(talent => html`
						<button
							?data-selected=${talent.selected}
							@click=${clickTalent(talent.name)}>
							<h4>${talent.name}</h4>
							<p>${talent.description}</p>
							${detriments_message(talent.detriments)}
						</button>
					`)}
				</div>
			</div>

			<div class="minor detriment area">
				<h3>
					Shortcomings ${minor_message}
				</h3>
				<div class=case>
					${minor_detriments.map(detriment => {
						return html`
							<button
								?data-selected=${detriment.selected}
								@click=${clickMinor(detriment.name)}>
								<h4>${detriment.name}</h4>
								<p>${detriment.description}</p>
							</button>
						`
					})}
				</div>
			</div>

			<div class="major detriment area">
				<h3>
					Detriments ${major_message}
				</h3>
				<div class=case>
					${major_detriments.map(detriment => {
						return html`
							<button
								?data-selected=${detriment.selected}
								@click=${clickMajor(detriment.name)}>
								<h4>${detriment.name}</h4>
								<p>${detriment.description}</p>
							</button>
						`
					})}
				</div>
			</div>
		`
	}
})

