
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
						<span>Falrysk</span>
						<span>Open World RPG</span>
					</h1>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/048.webp
								Thirty-thousand years ago, the Atlean Archipelago was above sea level, and supported a flourishing civilization. The game starts on a random island in the northern region, Falrysk.
							=> /assets/concepts/049.webp
								The large island has a dynamic landscape. With rugged mountains, vast plains, and secluded valleys. It is populated by many towns, and the countryside is dotted with countless rural settlements and homesteads.
						"></atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/068.webp
								As a new player, you will start with nothing but peasant clothing, at a random location on the island. You'll have to rely on your wits to find food, water, shelter, and adventure.
							=> /assets/concepts/045.webp
								Explore the landscape, and surely you'll happen upon a small homestead or village. Perhaps they'll offer to help you.
						"></atl-showcase>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/047.webp
								Towns are bustling with activity. Every character engages dynamically with the world, and has their own wants, needs, relationships, and more.
							=> /assets/concepts/063.webp
								If you find a town that has a need, perhaps you could provide for it, and earn riches by playing the market as a trader. It's all just supply and demand.
						"></atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/057.webp
								Get on a horse. Travel faster. Can you buy a horse? Can you get away with stealing one?
							=> /assets/concepts/061.webp
								As you make progress, choose abilities to specialize your character in skills that interest you. Archery, swordsmanship, sorcery, alchemy, blacksmithing...
							=> /assets/concepts/066.webp
								Invite friends to join your co-op adventure.
							=> /assets/concepts/060.webp
								If you get into trouble, sometimes your best option is to run.
						"></atl-showcase>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/059.webp
								Armor is extremely effective at keeping you alive in violent situations. We recommend you find some.
							=> /assets/concepts/065.webp
								Off the beaten path, you might stumble onto a bandit camp. They might not be happy to see you.
							=> /assets/concepts/058.webp
								Dress warm for the cold, or you could freeze to death. Your adventures may take you far and wide. What are you looking for?
							=> /assets/concepts/062.webp
								A wise wizard of the mountains could be a powerful ally. Or a dangerous enemy. Or an ideal mentor in sorcery. Which will it be?
						"></atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/055.webp
								The trecherous mud bog is a no man's land that surrounds The Tower.
							=> /assets/concepts/054.webp
								Since you're a new player, I advise turning back here.
							=> /assets/concepts/056.webp
								The Tower. Sometimes it emits a deep thumping sound, which can be felt through the ground for miles.
						"></atl-showcase>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/005.webp')">
					<h1>Design Document</h1>

					<div class=columns>
						<div>
							<h2>This website is a game design document.</h2>
							<p>We're attempting to outline and describe the design of our ambitious game project, for internal use to align development efforts.</p>
							<p>This is a living document which might change.</p>
						</div>
						<div>
							<h2>This is full of spoilers.</h2>
							<p>The game will not explain itself to gamers while they play. Gamers will learn about the world by <em>exploring it.</em></p>
							<p>This design document will <em>not</em> give you that experience. This design document is used for planning and coordinating developer efforts. Here, we will explain and unravel the mysteries, and outline the surprises we have in store for gamers.</p>
							<p>Spoilers lay ahead, you've been warned.</p>
						</div>
						<div>
							<h2>AI generated concept art.</h2>
							<p>We leveraged AI to the fullest to create images that best express our vision.</p>
							<p>The images are references so that we can converge our efforts to create a coherent world.</p>
						</div>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/003.webp')">
					<h1>From Heaven To Earth They Came</h1>

					<div class=columns>
						<atl-showcase images="
								=> /assets/concepts/013.webp
									Rough luxium ore in its natural state
							">
							<h2>The Element of Golden Light</h2>
							<p><em>Luxium Aureum</em> is a rare element of great power.</p>
							<p>To the layperson, its most obvious trick is that it brightens under pressure. Give it a squeeze with your hand, and it will emit enough light to guide you through the dark. At ambient air pressure, it continuously glows softly.</p>
							<p>But to the alchemist or sorcerer, luxium has far more important magical capabilities beyond mere radioluminescence and piezoelectricity.</p>
						</atl-showcase>
						<atl-showcase images="
								=> /assets/concepts/043.webp
									Across all of Falrysk, many witnessed the same event
							">
							<h2>The Night of Falling Stars</h2>
							<p>The invaders descended upon Earth with one objective: to strip our world of its most precious resource.</p>
							<p>Luxium aureum is Gold 223, a glowing isotope of Gold.</p>
							<p>The game starts a few years after the invaders first landed. You will participate in (or at least bear witness to) the dynamically unfolding story of human complacency, resistance, and complicity, to the cold reign of <em>The Wrynth.</em></p>
						</atl-showcase>
						<atl-showcase images="
								=> /assets/concepts/067.webp
									Miners collecting the precious ore
							">
							<h2>It Beckons</h2>
							<p>Any significant quantity of Luxium has a radioactive signature. A beacon, which inevitably draws the Wrynth Seekers nearer.</p>
							<p>Since they landed, the Wrynth demonstrated far more incredible magic using the substance than humans had ever seen. This has sparked an ongoing revolution among innovative human alchemists and sorcerers to discover its hidden capabilities, in an attempt to catch up with the Wrynth. Luxium is the Philosopher's Stone: both the fuel and the instrument of real magic.</p>
						</atl-showcase>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/008.webp')">
					<h1>The Wrynthian Order</h1>

					<div class=card>
						<h2>Structures</h2>
						<p>The Wrynth have built a network of mysterious structures throughout Falrysk.</p>
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
							<h2>Acolyte Shrine</h2>
							<p>Shrines are supply depots and military garrisons from which the Wrynth can deploy Acolytes.</p>
							<p>The monolith above the ground is merely an entrance to a large subterranean dungeon, where enslaved men are indoctrinated and transformed into Acolytes to serve the Wrynth.</p>
							<p>Emblematic of Wrynthic architecture, shrines have smooth-cut interiors encased by rugged rocky exteriors. The Wrynth are apparently able to easily control the shape and flow of solid rock. These structures can be found near populations of subjugated humans, or up in the mountains near the mines.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/074.webp
							=> /assets/concepts/075.webp
							=> /assets/concepts/082.webp
							=> /assets/concepts/081.webp
							=> /assets/concepts/084.webp
							=> /assets/concepts/090.webp
							=> /assets/concepts/085.webp
							">
							<h2>Chimeric Mines</h2>
							<p>Triangular mine entrances are found throughout the mountainous regions. Mining operations continue nonstop, day and night. Acolytes are deployed as guards to protect the workers from outside interference.</p>
							<p>Workers live and die in these mines, never seeing sunlight. Underground fungal crops provide sustenance. Birthing chambers provide fresh workers to replace those killed by accidents or overwork.</p>
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
							<p>On every island where the Wrynth conduct mining operations, they build a great tower.</p>
							<p>At the tower, the Grand Overseer receives daily deliveries of refined Luxium ingots. Each wagon load is escorted by an Executor surrounded by an armed retinue.</p>
							<p>On occasion, the tower produces a bone-chilling deep thumping sound, reverberating through the ground, which can be heard miles away. Other times, the tower emits a gut-wrenching low-frequency droning, rumbling, groaning sound.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/093.webp
							=> /assets/concepts/092.webp
							=> /assets/concepts/089.webp
							=> /assets/concepts/052.webp
							">
							<h2>The Mud Bog</h2>
							<p>The tower is surrounded by a terrible bog, within a massive volcanic caldera. The cursed swamp is a tangled mess of dead trees, bubbling acid pools, and steam geysers. Wretched creatures and wandering abominations thrive here.</p>
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
							<p>The initiate monks are men that were enslaved and handed over by their own local lords to the Wrynth.</p>
							<p>They undergo intense obedience conditioning. Malnourished, unarmored, and untrained in combat, they make weak opposition.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/012.webp
							=> /assets/concepts/011.webp
							">
							<h2>Zealot</h2>
							<p>Once initiates, they proved unsuited for sorcery, and thus were trained for battle instead. Brainwashed with bloodlust, and armed with fair weaponry and light armor, zealots are dangerous and aggressive opponents.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/014.webp
							=> /assets/concepts/022.webp
							">
							<h2>Sorcerer</h2>
							<p>Charged with the indoctrination of initiates, and leading zealots in combat.</p>
							<p>He uses an orb to telepathically coordinate his troop. He can conjure ball lighting as a ranged attack.</p>
							<p>When cornered, he may physically strike you with his orb, which is no joke, it's heavy.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/015.webp
							=> /assets/concepts/010.webp
							">
							<h2>Vanguard</h2>
							<p>Heavily armored combat expert. Trains zealots in fighting skills.</p>
							<p>An extremely dangerous opponent. To be feared. Wields large two-handed weapons. Aggressive and highly skilled, he will use tactical feints to throw off your defensive instincts.</p>
							<p>You're in trouble.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/006.webp
							=> /assets/concepts/008.webp
							=> /assets/concepts/007.webp
							">
							<h2>Inquisitor</h2>
							<p>Highest rank of Acolyte. He is tasked with maintaining the loyalty of local town lords.</p>
							<p>A powerful warlock, who can telekinetically throw his enemies ragdolling across the room. He can also bend the trajectory of incoming arrows. Skilled in melee combat, he feints with his staff. Armor encumbers human sorcery, and thus his lack thereof presents a vulnerability.</p>
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
							<p>Dim-witted unskilled laborer. This miserable creature is inured to pain, slogging through its suffering with indifference. Wears gloves and is covered from head-to-toe to prevent infection because its poorly-engineered skin keeps sloughing off. Sometimes wearing a mask to assist its breathing. Mostly tasked with moving things. Grumpy, although poses no serious threat.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/032.webp
							=> /assets/concepts/031.webp
							=> /assets/concepts/029.webp
							">
							<h2>Miner</h2>
							<p>Thick hide and strong bones make them unusually tough for an unarmored opponent, and they're usually armed with dangerous mining tools like pickaxes. They're also known to have a nasty bite that causes infection. They boss the grunts around.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/027.webp
							=> /assets/concepts/039.webp
							">
							<h2>Cultivator</h2>
							<p>Fast moving arachnoid. Found tending to the fungal crops or birthing chambers, she is defensive of her brood, and may stab at you with her long arms.</p>
							<p>She carries a swarm of smaller arachnoids on her back.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/021.webp
							=> /assets/concepts/016.webp
							=> /assets/concepts/017.webp
							">
							<h2>Digger</h2>
							<p>Massive creature with specialized claws that can chip through solid rock. Directed by seekers to create new tunnels. They have very poor eyesight, and move slow, but have claws that can easily rip you in half. Consider yourself warned.</p>
						</atl-showcase>
					</div>

					<div class=card>
						<h2>The Wrynth</h2>
						<p>Hybrid species created by <em>"The Collectors"</em> and sent down to Earth to conduct mining operations. Mentally and physically superior to humans. Elongated skulls. Seven feet tall.</p>
					</div>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/023.webp
							=> /assets/concepts/020.webp
							">
							<h2>Seeker</h2>
							<p>A Wrynth with no mask or helmet.</p>
							<p>Specialized for the ability to remotely sense luxium. During mining operations, the seeker directs diggers and miners to ore deposits.</p>
							<p>Seen outside the mines when the Wrynth are trying to track down missing or stolen luxium.</p>
							<p>If threatened, it will throw deadly ball lightning. Up close, it can kill you quickly by touching you with its deadly electric hands.</p>
							<p>Makes a terrible gurgling growling noise.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/036.webp
							=> /assets/concepts/035.webp
							">
							<h2>Executor</h2>
							<p>Heavily armored Wrynth commander. Tasked with directing luxium operations including mining, relocation, repossession, or delivery to the tower.</p>
							<p>Some executors are tasked with supervising an Acolyte Shrine.</p>
							<p>Wields a massive two-handed sword, in one hand. Can telekinetically throw enemies and bend arrows with one hand, all while feinting with a huge sword in the other.</p>
							<p>You are in grave danger.</p>
						</atl-showcase>
					</div>
					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/004.webp
							=> /assets/concepts/096.webp
							=> /assets/concepts/097.webp
							">
							<h2>Arachnid</h2>
							<p>While the Wrynth often ride horses, they are sometimes seen riding giant spiders as mounts.</p>
							<p>Generally, horses make better mounts for traveling, but the Wrynth prefer the arachnids in battle, as they are heavily armored and very aggressive and dangerous on their own, even without a rider.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/041.webp
							=> /assets/concepts/026.webp
							=> /assets/concepts/025.webp
							">
							<h2>Grand Overseer</h2>
							<p>Highest rank of Wrynth on Earth. Lord of The Executors. Representative of the The Collectors. Not born on Earth. Rarely leaves the Wrynth Tower.</p>
							<p>The Overseer has immense powers. From a distance, with its mind, the Overseer can vaporize people into dust, war-of-the-fucking-worlds style.</p>
							<p>We advise you not to mess with this guy.</p>
						</atl-showcase>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/009.webp')">
					<h1>Rebels and Traitors</h1>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/098.webp
							=> /assets/concepts/105.webp
							">
							<h2>After The Fall</h2>
							<p>The Wrynth descended on the towns of Falrysk. All who resisted fell where they stood.</p>
							<p>Forced to submit to the Wrynth, the lords had no choice but to dissolve their militias, and endure a brutal taxation regime demanding grain and slaves.</p>
							<p>The balance of power in Falrysk was destabilized, and the lands were plunged into chaos rife with bandits, thugs, and petty wars.</p>
							<p>Thousands fled the towns and built homesteads on remote countrysides.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/106.webp
							=> /assets/concepts/103.webp
							=> /assets/concepts/102.webp
							=> /assets/concepts/104.webp
							">
							<h2>The Rebels</h2>
							<p>Not all bowed to the Wrynth.</p>
							<p>Many rebel groups congregate deep in the forests, where the Wrynth cannot so easily extend their control. They organize armed rebellion against the Wrynth, conducting a guerrilla war ambushing convoys and raiding the mines.</p>
							<p>The Rebels often see the town lords as traitors who cooperate with the Wrynth to enslave the common people. The Rebels are sometimes regarded by the townsfolk as hostile bandits that further threaten the peace for everybody.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/099.webp
							=> /assets/concepts/100.webp
							">
							<h2>Darkness in the woods</h2>
							<p>Not everybody hiding in the woods has the best intentions.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/094.webp
							=> /assets/concepts/095.webp
							">
							<h2>The Embargo</h2>
							<p>The Wrynth established a naval blockade. Ships that attempt to sail from Falrysk to Thalyria are rammed to splinters by mysterious high-speed Wrynthic vessels, shaped like giant arrowheads, which patrol the strait.</p>
						</atl-showcase>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/002.webp')">
					<h1>Design Philosophy</h1>

					<div class=columns>
						<atl-showcase images="
							=> /assets/concepts/108.webp
							=> /assets/concepts/109.webp
							">
							<h2>Make Your Character</h2>
							<p>Customize your character's appearance.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/107.webp
							=> /assets/concepts/114.webp
							=> /assets/concepts/115.webp
							">
							<h2>Skill Tree</h2>
							<p>Choose skills for your character as you progress.</p>
							<p>Specialize as a swordsman, archer, sorcerer, blacksmith, trader, etc.</p>
						</atl-showcase>
						<atl-showcase images="
							=> /assets/concepts/005.webp
							=> /assets/concepts/001.webp
							=> /assets/concepts/018.webp
							=> /assets/concepts/019.webp
							">
							<h2>Good Combat</h2>
							<p>We're longtime Chivalry and Mordhau players, so we're massively inspired by the way they've done melee combat mechanics. We're dying to bring this kind of immersive gameplay experience to the RPG genre.</p>
						</atl-showcase>
					</div>

					<div class=columns>
						<div>
							<h2>Every New Game is a Unique Island</h2>
							<p>You can generate as many unique islands to play on as you'd like. They're all randomly procedurally generated, and massive.</p>
							<h2>Co-op Gameplay</h2>
							<p>You can send your friends an invite link at any moment, for them to join your adventure.</p>
							<h2>Perma-death. Rogue-ish.</h2>
							<p>Games are too bland and hand-holdy these days.</p>
							<p>We believe that danger and risk are the necessary prerequisites for courage, bravery, and achievement.</p>
							<h2>No Fast Travel</h2>
							<p>We refuse to elaborate.</p>
						</div>
						<div>
							<h2>Day/Night Cycle</h2>
							<p>An Atlean day is one hour of real-life time, including ten minutes of night.</p>
							<p>A season passes every two weeks, thus, an Atlean year is 56 Atlean days.</p>
							<h2>Spawn at Camp</h2>
							<p>Your new character can spawn near any of your team's camps or houses. You can add a new character to an island at any time.</p>
							<p>When you're at any camp, you can safely "store" a character away for safe-keeping, then create a new character at any camp – but there is no way to fast-travel or teleport your characters or items across the island.</p>
							<h2>Not Super Grindy</h2>
							<p>Considering perma-death, we know the game can't be super grindy.</p>
							<p>Let's say you're playing co-op with your friends. If you die, you'll just spawn as a new character at your nearest camp, grab a stick, and run back into the fight with your buddies. Sure, it's humiliating to be in peasant clothes again, but your fresh character will be "weak", not "utterly useless", and that's a big difference. In a couple hours, you'll be back up to speed with some good skill tree abilities.</p>
						</div>
						<div>
							<h2>Emergence Over Scripted Narrative</h2>
							<p>Our philosophy is that an open world game should not have a scripted narrative.</p>
							<p>Players should be free of mandated obligations, so their own adventures and stories can emerge organically.</p>
							<p>So our game takes a bottom-up "simulator" approach, inspired by Rimworld and Dwarf Fortress.</p>
							<p>In this world, everything you do, or don't, has consequences. Nobody can predict the outcome.</p>
							<h2>Play it your way.</h2>
							<p>We're building a playground for gamers to play however they want.</p>
							<p>Players will be able to start a custom-mode game, where they can disable perma-death, have more health, etc.</p>
							<p>We'll allow players to have a panel for enabling full-blown cheats, like cloning characters, and even godmode.</p>
							<p>As an open source game, there will be forks and mods.. honestly, it will be beautiful chaos.</p>
						</div>
					</div>

					<div class=plate>
						<atl-talents></atl-talents>
					</div>
				</section>

				<hr/>
				<section style="--banner: url('/assets/banners/010.webp')">
					<h1>Development Strategy</h1>

					<div class=columns>
						<div>
							<h2>Dungeon Crawler</h2>
							<p>Falrysk is an ambitious project.</p>
							<p>Starting with a small team of developers, we've going to start with a small slice of the pie, and implement a co-op dungeon crawler game that takes place entirely within a single Acolyte Shrine.</p>
							<p>Players will fight Acolyte enemies as they descend multiple dungeon levels, to see if they can defeat the final boss at the bottom: The Executor.</p>
						</div>
						<div>
							<h2>A Benevolent Project</h2>
							<p>Like all <a href="https://benevolent.games/">Benevolent Games</a>, this game will be free and open source, instantly playable on any device, and funded by the community.</p>
							<h2>Using and Creating Open Source Tools</h2>
							<p>We're excited to be a part of the new emerging open source game development ecosystem. The game will be built with BabylonJS. We're creating a collection of new tools, including a new editor suite, dungeon and terrain generators, AI systems, character controller, multiplayer networking libraries, and much more.</p>
						</div>
						<div>
							<h2>Join Us</h2>
							<p>Once we having a working prototype of the game, we're going to start a crowdfunding campaign.</p>
							<p>Join our the <a href="https://discord.gg/BnZx2utdev">Benevolent Games Discord Group</a> to follow our development and give us feedback.</p>
						</div>
					</div>
				</section>

				<hr/>
			</main>
		`,
	})
})

