
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
			<main class=foundation>
				<h1>atlea</h1>
				<h2>open source open world game</h2>
				<atl-counter></atl-counter>
				<br/>
				<img src="/assets/concepts/005.webp" alt=""/>
			</main>
		`,
	})
})

