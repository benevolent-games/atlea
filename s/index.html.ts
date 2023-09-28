
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

				<hr/>
				<section style="--banner: url('/assets/banners/001.webp')">
					<h1>
						<span>Atlea</span>
						<span>Open World RPG</span>
					</h1>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/048.webp
								Thirty-thousand years ago, The Atlean Archipelago was above sea level, and supported a flourishing civilization. The game starts on a random island in Atlea's northern region, Falrysk.
							=> /assets/concepts/049.webp
								The large island has a dynamic landscape. With rugged mountains, vast plains, and secluded valleys. It is populated by many towns, and the countryside is dotted with countless rural settlements and homesteads.
						"></atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/068.webp
								As a new player, you will start with nothing but peasant clothing, at a random location on the island. You'll have to rely on your wits to find food, shelter, and adventure.
							=> /assets/concepts/045.webp
								Explore the landscape, and surely you'll happen upon a small homestead or village. Perhaps they'll offer to help you.
						"></atl-showcase>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/057.webp
							=> /assets/concepts/061.webp
							=> /assets/concepts/066.webp
							=> /assets/concepts/060.webp
						"></atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/047.webp
								Towns in Atlea are bustling with activity. Every character engages with the environment, and has their own wants, needs, and relationships.
							=> /assets/concepts/063.webp
								If you find a community that has a need, perhaps you could provide for it, and earn riches by playing the market as a trader. It's all just supply and demand.
						"></atl-showcase>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/059.webp
							=> /assets/concepts/065.webp
							=> /assets/concepts/058.webp
							=> /assets/concepts/062.webp
						"></atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/055.webp
								The wretched bog is a no man's land that surrounds the Wrynth Tower.
							=> /assets/concepts/054.webp
								Since you're a new player, I don't advise trespassing here.
							=> /assets/concepts/056.webp
								The Wrynth Tower. They built one on every island in Falrysk. Sometimes it emits a deep thumping sound, which can be felt through the ground for miles.
						"></atl-showcase>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/005.webp')">
					<h1>Open Source</h1>

					<div class=columns>
						<div>
							<h2>This website is a game design document</h2>
							<p class=wip>We're still working on this document, it's not done yet.</p>
							<p>Here we're attempting to outline and describe the design of our ambitious game project.</p>
							<p>Our development approach is to first build the co-op dungeon crawling aspect of the game, and then expand the scope from there.</p>
							<h2>A Benevolent Project</h2>
							<p>Like all <a href="https://benevolent.games/">Benevolent Games</a>, Atlea will be free, open source, instantly playable on any device, and funded by the community.</p>
						</div>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/002.webp')">
					<h1>
						Design Features
					</h1>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/005.webp
							=> /assets/concepts/001.webp
							=> /assets/concepts/018.webp
							=> /assets/concepts/019.webp
							"></atl-showcase>
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
							<p>Games are too bland these days. So, we're making perma-death the default mode. Danger and risk are prerequisites for courage, bravery, and achievement.</p>
							<p>Don't worry, our game isn't super grindy, so you can build back a competent character quick enough, and you can spawn at your nearest camp.</p>
							<h2>No Fast Travel</h2>
							<p>We refuse to elaborate.</p>
							<h2>Spawn at Camp</h2>
							<p>Your new character can spawn near any of your team's camps or houses. You can add a new character to your roster at any time.</p>
						</div>
						<div>
							<h2>Every New Game is a Unique Island</h2>
							<p>You can generate as many unique islands to play on as you'd like. They're all randomly procedurally generated, and massive.</p>
							<p>The characters you create are transferable to any of your islands.</p>
							<h2>Co-op Gameplay</h2>
							<p>You can send your friends an invite link at any moment, for them to join your adventure.</p>
							<h2>Day/Night Cycle</h2>
							<p>An Atlean day is one hour of real-life time, including ten minutes of night.</p>
							<p>A season passes every two weeks, thus, an Atlean year is 56 Atlean days (56 hours of gameplay).</p>
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
									The Night of Falling Stars
							">
							<h2>The Element of Golden Light</h2>
							<p>The invaders descended upon Earth with one objective: to strip our world of its most precious resource.</p>
							<p><em>"Luxium Aureum"</em> is Gold 223, a glowing isotope of Gold.</p>
							<p>The game starts a century after the invaders first landed. You will participate in (or at least bear witness to) the dynamically unfolding story of human complacency, resistance, and complicity, to the cold reign of <em>The Wrynth.</em></p>
						</atl-showcase>
						<atl-showcase images="
								=> /assets/concepts/013.webp
									Rough Luxium ore in its natural state
							">
							<h2>Luxium Aureum</h2>
							<p>To the layperson, its most obvious trick is that it brightens under pressure. Give it a squeeze with your hand, and it will emit enough light to guide you through the dark. At ambient air pressure, it continuously glows softly.</p>
							<p>But to an alchemist, sorcerer, or Wrynth, the Luxium has far more important magical capabilities beyond its mere radioluminescence and piezoelectricity. It is the Philosopher's Stone, both the fuel and the instrument of its magic. Humans know little of how to control it.</p>
						</atl-showcase>
						<atl-showcase images="
								=> /assets/concepts/067.webp
									Miners collecting the precious ore
							">
							<h2>It Beckons</h2>
							<p>Any significant quantity of Luxium has a radioactive signature. A beacon, which inevitably draws nearer the Wrynth Seekers tasked with finding the substance, wherever it lay.</p>
							<p>The "lesser gold" we are familiar with in modern times (isotope 197) is regarded by the Wrynth as little more than a refinement byproduct.</p>
						</atl-showcase>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/008.webp')">
					<h1>The Wrynthic Order</h1>

					<div class=card>
						<h2>Structures</h2>
						<p>The Wrynth have built structures all across the island.</p>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/073.webp
							=> /assets/concepts/072.webp
							=> /assets/concepts/069.webp
							=> /assets/concepts/088.webp
							=> /assets/concepts/086.webp
							=> /assets/concepts/087.webp
							">
							<h2>Wrynthic Shrines</h2>
							<p>The Wrynth constructed a network of shrines across the island. The building above land is merely an entrance to a large underground dungeon, where enslaved men are indoctrinated and transformed into Acolytes to serve the Wrynth.</p>
							<p>Emblematic of Wrynthic architecture, the shrines have smooth-cut interiors encased in rugged rocky exteriors.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/074.webp
							=> /assets/concepts/075.webp
							=> /assets/concepts/082.webp
							=> /assets/concepts/081.webp
							=> /assets/concepts/090.webp
							=> /assets/concepts/084.webp
							=> /assets/concepts/085.webp
							">
							<h2>Wrynthic Mines</h2>
							<p>These ornate triangular mine entrances are found throughout the mountainous regions. The mining operations continue nonstop, day and night. Acolytes are often deployed as guards to protect the workers from interference.</p>
							<p>Workers live and die in the mines, never seeing sunlight. Underground fungal crops provide sustenance. Birthing chambers provide fresh workers to replace those killed by accidents or overwork.</p>
						</atl-showcase>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/080.webp
							=> /assets/concepts/076.webp
							=> /assets/concepts/077.webp
							=> /assets/concepts/078.webp
							=> /assets/concepts/079.webp
							">
							<h2>The Wrynth Tower</h2>
							<p>On every island where the Wrynth conduct mining operations, they build one great tower.</p>
							<p>At the tower, the Grand Overseer receives daily deliveries of refined ingots of Luxium. Each wagon load is escorted by an Executor with an armed retinue.</p>
							<p>On occasion, the tower produces a deep thumping sound, reverberating through the ground, which can be heard miles away.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/093.webp
							=> /assets/concepts/092.webp
							=> /assets/concepts/089.webp
							=> /assets/concepts/052.webp
							">
							<h2>The Mud Bog</h2>
							<p>The tower is surrounded by a terrible bog, within a massive volcanic caldera. The cursed swamp is a tangled mess of dead trees, bubbling acid pools, and steam geysers. Wretched creatures and wandering abominations thrive here, and make the land unpassable.</p>
							<p>There is only one solid-ground pathway through the mudland, but it's heavily patrolled by Acolyte guards.</p>
						</atl-showcase>
					</div>

					<div class=card>
						<h2>The Acolytes</h2>
						<p>Men subservient to the Wrynth.</p>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/024.webp
							=> /assets/concepts/009.webp
							">
							<h2>Initiate</h2>
							<p>The initiate monks are men that were enslaved by their own local lords, and handed over to the Wrynth as tribute of fealty.</p>
							<p>They undergo intense obedience conditioning. Malnourished, unarmored, and untrained in combat, they make weak opposition.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/012.webp
							=> /assets/concepts/011.webp
							">
							<h2>Zealot</h2>
							<p>As initiates unsuited for sorcery, they are trained for battle instead. Brainwashed with bloodlust, and armed with fair weaponry and light armor, they are dangerously aggressive opponents.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/014.webp
							=> /assets/concepts/022.webp
							">
							<h2>Sorcerer</h2>
							<p>In charge of indoctrinating initiates, and leading zealots in combat.</p>
							<p>He uses an orb to telepathically coordinate his troop. He occasionally conjures ball lighting as a ranged attack.</p>
							<p>When cornered, he may physically strike you with his orb, which is no joke, it's heavy.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/015.webp
							=> /assets/concepts/010.webp
							">
							<h2>Vanguard</h2>
							<p>Heavily armored combat expert. Trains zealots in combat skills.</p>
							<p>An extremely dangerous opponent. To be feared. Wields large two-handed weapons. Aggressive and highly skilled in combat, he will use tactical feints to throw off your defensive instincts.</p>
							<p>You're in trouble.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/008.webp
							=> /assets/concepts/006.webp
							=> /assets/concepts/007.webp
							">
							<h2>Inquisitor</h2>
							<p>Powerful warlock, and the highest rank of Acolyte who reports directly to the executors.</p>
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
							<p>Dim-witted unskilled laborer. This miserable creature is inured to pain, slogging through its suffering with indifference. Wears gloves and is covered from head-to-toe to prevent infection because its poorly-engineered skin keeps sloughing off. Sometimes wearing a mask to assist its breathing. Mostly tasked with moving things. Grumpy, but poses no serious threat.</p>
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
							<p>Massive creatures with specialized claws that can chip through solid rock. Directed by seekers to create new tunnels. They have very poor eyesight, and move slow, but have claws that can rip you in half like nothing. Consider yourself warned.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/027.webp
							=> /assets/concepts/039.webp
							">
							<h2>Cultivator</h2>
							<p>Fast moving arachnoid. Found tending to the fungal crops or birthing chambers, they're defensive of their brood, and may stab at you with their long arms.</p>
							<p>They carry a swarm of smaller arachnoids on their backs.</p>
						</atl-showcase>
					</div>

					<div class=card>
						<h2>The Wrynth</h2>
						<p>Hybrid species created and sent by The Collectors down to Earth to conduct operations. Mentally and physically superior to humans. Elongated skulls. Seven feet tall.</p>
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
							<h2>Grand Overseer</h2>
							<p>Highest rank of Wrynth on Earth. A representative of the <em>The Collectors</em>. Directs and supervises the executors. Usually stay in the Wrynth Tower.</p>
							<p>Not born on Earth.</p>
						</atl-showcase>
					</div>
				</section>

			</main>
		`,
	})
})

