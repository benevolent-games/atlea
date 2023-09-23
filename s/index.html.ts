
import {template, html, easypage, startup_scripts_with_dev_mode} from "@benev/turtle"

export default template(async basic => {
	const path = basic.path(import.meta.url)

	return easypage({
		path,
		title: "atlea game design",
		css: "index.css",
		head: html`
			<meta name="darkreader" content="dark"/>
			${startup_scripts_with_dev_mode(path)}
		`,
		body: html`
			<main>
				<h1 class=title>
					Aeon Atlea
				</h1>
				<atl-showcase images="
					=> /assets/concepts/013.webp
						rough luxium ore in its rough natural state
					=> /assets/concepts/003.webp
						a refined bar of luxium aureum
					=> /assets/concepts/005.webp
					=> /assets/concepts/006.webp
					=> /assets/concepts/007.webp
				"></atl-showcase>
			</main>
		`,
	})
})

