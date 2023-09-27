
import {template, html, easypage, startup_scripts_with_dev_mode} from "@benev/turtle"

export default template(async basic => {
	const path = basic.path(import.meta.url)

	return easypage({
		path,
		title: "Atlea Game Design",
		css: "index.css",
		head: html`
			<meta name="darkreader" content="dark"/>
			${startup_scripts_with_dev_mode(path)}
		`,
		body: html`
			<main>

				<section style="--banner: url('/assets/banners/001.webp')">
					<h1>Welcome To Atlea</h1>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/048.webp
							=> /assets/concepts/049.webp
						"></atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/045.webp
							=> /assets/concepts/046.webp
							=> /assets/concepts/047.webp
							=> /assets/concepts/063.webp
							=> /assets/concepts/064.webp
						"></atl-showcase>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/057.webp
							=> /assets/concepts/060.webp
							=> /assets/concepts/061.webp
							=> /assets/concepts/059.webp
							=> /assets/concepts/058.webp
							=> /assets/concepts/065.webp
							=> /assets/concepts/062.webp
						"></atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/053.webp
							=> /assets/concepts/052.webp
							=> /assets/concepts/055.webp
							=> /assets/concepts/054.webp
							=> /assets/concepts/056.webp
						"></atl-showcase>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/005.webp')">
					<h1>Atlea Game Design</h1>

					<div class=columns>
						<div>
							<h2>This website is a game design document</h2>
							<p>Here we're attempting to outline and describe the design of our ambitious game project.</p>
							<p>Our development approach is to first build the co-op dungeon crawling aspect of the game, and then expand the scope from there.</p>
							<p class=wip>We're still working on this document, it's not done yet.</p>
						</div>
						<div>
							<h2>A Benevolent Project</h2>
							<p>Like any <a href="https://benevolent.games/">Benevolent Games</a> project, this game will be free, open source, instantly playable on any device, and funded by the community.</p>
						</div>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/002.webp')">
					<h1>
						Features and Design Decisions
					</h1>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/005.webp
							=> /assets/concepts/001.webp
							=> /assets/concepts/018.webp
							=> /assets/concepts/019.webp
							"></atl-showcase>
						<div>
							<h2>Every New Game is a Unique Island</h2>
							<p>You can generate as many unique islands to play on as you'd like. They're all randomly procedurally generated, and massive.</p>
							<p>The characters you create are transferable to any of your islands.</p>
							<h2>Co-op Gameplay</h2>
							<p>You can send your friends an invite link at any moment, for them to join your adventure.</p>
						</div>
						<div>
							<h2>Build Your Character</h2>
							<p>You can make as many characters as you like.</p>
							<p>Like any RPG, you earn ability points, and climb a tech tree which can take your character into a few different playstyle directions.</p>
							<p>You can get good at swords, archery, sorcery, blacksmithing, trading, agriculture (maybe lol), sailing or whatever.</p>
							<h2>Skill-based Combat</h2>
							<p>We're longtime Chivalry and Mordhau players, so we're massively inspired by the way they've done melee combat mechanics, so we're dying to bring this kind of immersive gameplay experience to the RPG genre.</p>
						</div>
						<div>
							<h2>Make Games Frustrating Again!</h2>
							<p>Games are too bland these days. So, we're making perma-death the default mode. Danger and risk enables courage and bravery. Don't worry, our game isn't super grindy, so you can build back a competent character quick enough.</p>
							<h2>No fast travel.</h2>
							<p>We refuse to elaborate.</p>
							<h2>When you make a new character,</h2>
							<p>You can spawn near the original home town, or at any of your team's camps or houses.</p>
						</div>
						<div>
							<h2>Emergence Over Scripted Narrative</h2>
							<p>Our philosophy is that an open world game should not have a scripted narrative.</p>
							<p>Players should be free of mandated obligations, so their own adventures and stories can emerge organically.</p>
							<p>So our game takes a bottom-up "simulator" approach, inspired by Rimworld and Dwarf Fortress.</p>
							<p>In this world, everything you do, or don't, has consequences. Nobody can predict the outcome.</p>
						</div>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/003.webp')">
					<h1>From Heaven To Earth They Came</h1>

					<div class=columns>
						<atl-showcase images="
								=> /assets/concepts/043.webp
								=> /assets/concepts/042.webp
							">
							<h2>Thirty thousand years ago,</h2>
							<p><em>The Wrynth</em> descended upon Earth with a one objective: to strip our world of its most precious resource. The subjugation of humans is only a means to that end.</p>
							<p><em>"Luxium Aureum"</em> is Gold 223, a glowing isotope of Gold.</p>
							<p>The game takes place on an island in Greater Atlea, decades after the invaders first landed. You will participate in, or at least bear witness to, the dynamically-unfolding story of human complacency, resistance, and complicity, to the cold reign of The Wrynth.</p>
						</atl-showcase>
						<atl-showcase images="
								=> /assets/concepts/013.webp
									Rough Luxium ore in its natural state
								=> /assets/concepts/003.webp
									A refined bar of Luxium Aureum
							">
							<h2>Luxium Aureum</h2>
							<p>To the layperson, its most obvious trick is that it brightens under pressure. Give it a squeeze with your hand, and it will emit enough light to guide you through the dark. At ambient air pressure, it continuously glows softly.</p>
							<p>But to an alchemist, sorcerer, or Wrynth, the Luxium has far more important magical capabilities beyond its mere radioluminescence and piezoelectricity. It is the Philosopher's Stone, both the fuel and the instrument of its magic. Humans know little of how to control it.</p>
							<p>Any significant quantity of Luxium has a radioactive signature. A beacon, which inevitably draws near the Wrynth Seekers tasked with finding the substance, wherever it lay.</p>
							<p>The "lesser gold" we are familiar with in modern times (isotope 197) is regarded by the Wrynth as little more than a refinement byproduct.</p>
						</atl-showcase>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/002.webp')">
					<h1>The Wrynthic Order</h1>

					<div class=card>
						<h2>The Acolytes</h2>
						<p>Men enslaved and brainwashed by the Wrynth.</p>
						<p>They are indoctrinated and trained in Acolyte Temples, then are ready to deploy wherever the Wrynth need them.</p>
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
						<p>Abominations created by the Wrynth to perform hard labor in the mines.</p>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/034.webp
							=> /assets/concepts/033.webp
							=> /assets/concepts/030.webp
							">
							<h2>Grunt</h2>
							<p>Dim-witted unskilled laborer. This miserable creature is inured to pain, slogging through its suffering with indifference. Wears gloves and is covered from head-to-toe to prevent infection because its poorly-engineered skin keeps sloughing off. Sometimes wearing a mask to assist its breathing. Mostly tasked with moving things. Bad with tools. Grumpy, but poses no serious threat.</p>
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
							<p>Massive creature with specialized claws that can chip through solid rock. Directed by seekers to create new tunnels. It has very poor eyesight, and moves slow, but its claws can rip you in half like nothing. Consider yourself warned.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/027.webp
							=> /assets/concepts/038.webp
							=> /assets/concepts/039.webp
							">
							<h2>Cultivator</h2>
							<p>Fast moving arachnoid. Usually found in the fungal crops or birthing chambers. They're defensive of their brood, and may stab at you with their long arms.</p>
							<p>They carry smaller arachnoids on their backs, which they may throw at you.</p>
						</atl-showcase>
					</div>

					<div class=card>
						<h2>The Wrynth</h2>
						<p>Hybrid species sent down to Earth to conduct operations on the behalf of The Collectors. Mentally and physically superior to humans. Seven feet tall. Elongated skulls.</p>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/023.webp
							=> /assets/concepts/020.webp
							">
							<h2>Seeker</h2>
							<p>Wrynth unit specialized for the ability to remotely sense luxium deposits. Directs the miners towards the ore.</p>
							<p>Throws deadly ball lightning. Up close, it can kill you instantly by touching you with its electric hands.</p>
							<p>Makes a terrible gurgly growling noise.</p>
							<p>Squishy vulnerable cranium.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/036.webp
							=> /assets/concepts/035.webp
							">
							<h2>Executor</h2>
							<p>Heavily armored Wrynth commander. Tasked with directing operations like luxium mining, relocation, or repossession. Wields a massive two-handed sword, in one hand.</p>
							<p>Can bend incoming arrows and telekinetically throw enemies from a distance with one hand, while feinting with a huge sword in the other.</p>
							<p>You are in grave danger.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/041.webp
							=> /assets/concepts/026.webp
							=> /assets/concepts/025.webp
							">
							<h2>Grand Executor</h2>
							<p>Highest rank of Wrynth on Earth. Direct representative of the The Collectors. They oversee and coordinate the operations of the executors. They are not born on this world.</p>
						</atl-showcase>
					</div>
				</section>

			</main>
		`,
	})
})

