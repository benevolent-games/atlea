
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
				<h1 class=banner style="background-image: url('/assets/posters/002.webp')">
					Atlea
				</h1>

				<div class=columns>
					<atl-showcase images="
						=> /assets/concepts/013.webp
							rough luxium ore in its rough natural state
						=> /assets/concepts/003.webp
							a refined bar of luxium aureum
						">
						<h2>Luxium Aureum</h2>
					</atl-showcase>
					<div>
						<h2>From Heaven to Earth</h2>
					</div>
					<div>
						<h2>Basics</h2>
						<h3>RPG</h3>
						<h3>Co-op</h3>
						<h3>Perma-death</h3>
						<h3>Skill-based Combat</h3>
					</div>
					<div>
						<h2>Meta</h2>
						<h3>Free</h3>
						<h3>Open Source</h3>
						<h3>Available Everywhere</h3>
						<h3>Crowd-funded</h3>
					</div>
					<div>
						<h2>Setting</h2>
					</div>
					<div>
						<h2>Procedural Generation</h2>
					</div>
					<div>
						<h2>Simulation</h2>
					</div>
				</div>

				<h1 class=banner style="background-image: url('/assets/posters/002.webp')">
					The Wrynthic Order
				</h1>

				<div class=card>
					<h2>The Acolytes</h2>
					<p>Men enslaved and brainwashed by the Wrynth.</p>
				</div>

				<div class=columns>
					<atl-showcase images="
						=> /assets/concepts/024.webp
						=> /assets/concepts/009.webp
						">
						<h2>Initiate</h2>
						<p>The initiate monks are men that were enslaved by their own local lords, and handed over to the Wrynth as tribute of fealty.</p>
						<p>They undergo intense obedience conditioning. Unarmored, and with waivering loyalty, they make weak opposition.</p>
					</atl-showcase>
					<atl-showcase images="
						=> /assets/concepts/012.webp
						=> /assets/concepts/011.webp
						">
						<h2>Zealot</h2>
						<p>A man-at-arms wearing light armor and armed with formidable weaponry. Zealots were initiates unsuited for sorcery, and thus trained for battle instead. Inculcated with bloodlust.</p>
						<p>Commonly wielding spears, shields, or swords.</p>
					</atl-showcase>
					<atl-showcase images="
						=> /assets/concepts/014.webp
						=> /assets/concepts/022.webp
						">
						<h2>Sorcerer</h2>
						<p>In charge of indoctrinating initiates, and leading zealots in combat.</p>
						<p>He uses his orb to telepathically coordinate his cohort of zealots. He occasionally conjures ball lighting as a ranged attack.</p>
						<p>When cornered, he may physically strike you with his orb, which is no joke, it's heavy.</p>
					</atl-showcase>
					<atl-showcase images="
						=> /assets/concepts/015.webp
						=> /assets/concepts/010.webp
						">
						<h2>Vanguard</h2>
						<p>Heavily armored combat expert. Trains zealots in combat skills.</p>
						<p>An extremely dangerous opponent. To be feared. Wields large two-handed weapons. Very aggressive, skilled in combat, and he will use tactical feints to throw off your defensive instincts.</p>
						<p>You're in trouble.</p>
					</atl-showcase>
					<atl-showcase images="
						=> /assets/concepts/008.webp
						=> /assets/concepts/006.webp
						=> /assets/concepts/007.webp
						">
						<h2>Inquisitor</h2>
						<p>Powerful warlock, and the highest rank of human among The Order.</p>
						<p>Uses potent telekinetic abilities to throw his enemies ragdolling across the room from a distance. He can also bend the trajectory of incoming arrows.</p>
						<p>Skilled with his staff in melee combat, and even uses feints -- but he does not wear armor.</p>
					</atl-showcase>
				</div>

				<div class=card>
					<h2>The Chimera</h2>
					<p>Abominations bio-engineered by the Wrynth to perform hard mining labor for The Order.</p>
				</div>

				<div class=columns>
					<atl-showcase images="
						=> /assets/concepts/034.webp
						=> /assets/concepts/033.webp
						=> /assets/concepts/030.webp
						">
						<h2>Grunt</h2>
						<p>Dim-witted unskilled laborer. This miserable creature is inured to pain, slogging through its suffering with indifference. Wears gloves and is covered from head-to-toe to prevent infection because its poorly-engineered skin keeps sloughing off. Sometimes wearing a mask to assist its breathing. Mostly tasked with moving things. Bad with tools. Poses no practical threat.</p>
					</atl-showcase>
					<atl-showcase images="
						=> /assets/concepts/032.webp
						=> /assets/concepts/031.webp
						=> /assets/concepts/029.webp
						">
						<h2>Miner</h2>
						<p>Thick hide and strong bones make them tough for an unarmored opponent, and they're usually armed with dangerous mining tools like pickaxes. They're also known to have a nasty bite that causes infection. They boss the grunts around.</p>
					</atl-showcase>
					<atl-showcase images="
						=> /assets/concepts/021.webp
						=> /assets/concepts/016.webp
						=> /assets/concepts/017.webp
						">
						<h2>Digger</h2>
						<p>Massive creature with specialized claws that can chip through solid rock. Directed by seekers to create new tunnels. It has very poor eyesight, and moves slow, but its claws can rip you in half on contact. Consider yourself warned.</p>
					</atl-showcase>
					<atl-showcase images="
						=> /assets/concepts/027.webp
						=> /assets/concepts/038.webp
						=> /assets/concepts/039.webp
						">
						<h2>Cultivator</h2>
						<p>Found tending to the birthing chambers or fungal crops, these hideous arachnoid creatures move very fast. They have long arms they might stab you with, and smaller arachnoids on their back which they may throw at you.</p>
					</atl-showcase>
				</div>

				<div class=card>
					<h2>The Wrynth</h2>
					<p>Hybrid species sent down to Earth to conduct operations on the behalf of The Visitors. Mentally and physically superior to humans. Seven feet tall. Elongated skulls.</p>
				</div>

				<div class=columns>
					<atl-showcase images="
						=> /assets/concepts/023.webp
						=> /assets/concepts/020.webp
						">
						<h2>Seeker</h2>
						<p>Wrynth unit specialized for the ability to remotely sense luxium deposits. Directs the miners towards the luxium ore.</p>
						<p>Throws deadly ball lightning. Up close, it can kill you instantly by touching you with its electric hands.</p>
						<p>Squishy vulnerable cranium.</p>
						<p>Makes a terrible gurgling growling noise.</p>
					</atl-showcase>
					<atl-showcase images="
						=> /assets/concepts/036.webp
						=> /assets/concepts/035.webp
						">
						<h2>Executor</h2>
						<p>Heavily armored Wrynth commander. Tasked with overseeing and managing operations like luxium mining, relocation, or repossession. Wields a massive two-handed sword, in one hand.</p>
						<p>Can bend incoming arrows and telekinetically throw enemies from a distance with one hand, while feinting with a huge sword in the other.</p>
						<p>You are in grave danger.</p>
					</atl-showcase>
					<atl-showcase images="
						=> /assets/concepts/026.webp
						=> /assets/concepts/025.webp
						">
						<h2>Grand Overseer</h2>
						<p>Highest rank of Wrynth on Earth. Direct representative of the The Visitors. Overseers are not born on Earth.</p>
					</atl-showcase>
				</div>

			</main>
		`,
	})
})

