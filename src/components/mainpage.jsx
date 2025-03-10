import { Canvas } from "@react-three/fiber";
// import {
//   OrthographicCamera,
//   PresentationControls,
//   Sky,
// } from "@react-three/drei";
import React, { useState, useEffect } from "react";

export function MainPage() {
  const [toggle, setToggle] = useState("non-visible");

  // todo update the Readme file
  // todo adding character descriptions at top of story
  // * it would be cool to have an "offcanvas" with an Appendix

  // toggle text to show more or less
  function toggleEvent() {
    return toggle === "non-visible"
      ? setToggle("visible")
      : setToggle("non-visible");
  }

  return (
    <>
      <div>
        {/* // * sticky header */}
        {/* <div className="heading">
          <a href="#dunes" className="btn dunesbtn">
            The Imperial Dunes
          </a>
          <a href="#cp" className="btn cpbtn">
            Crystalpunk
          </a>
        </div> */}
        <section className="conatiner">
          <div className="split">
            <div className="header">
              <h1 className="center">Session Recap</h1>
            </div>
            <div>
              <img
                src="/Dune-DandD-campaign.jpg"
                alt=""
                width="650"
                height="400"
              />
            </div>
          </div>
        </section>
        <Canvas></Canvas>
        <div>
          <div className="seemorebtn sticky">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={toggleEvent}
            >
              See More / See Less
            </button>
          </div>

          <p id="harbinger"></p>
          <br />
          <br />
          <br />
          <br />
          <h2 className="centerheader">The Harbinger</h2>

          <section className="story">
            <h4>
              Breaking the Last Lock Part 1 (2/24/25) with Hunters's GM
              Assistant
            </h4>
            <p>
              The party flies to the last lock located in the ocean. Traps are
              triggered inside and outside the room. Various members are
              bewitched and turn on one another. 2 of the three rooms are
              successfully disarmed and the third room reveals the Guidance Guys
              inside.
            </p>
          </section>

          <section className="story">
            <h4>Battle against the Heros! (2/17/25)</h4>
            <p>
              A battle ensues against the Fearless Adventuring Guild. All but
              Carneleus is defeated when Grey appears. Ane dies and gets
              reserected with dragon wings and horns. And the party prepares for
              breaking the final lock.
            </p>
          </section>

          <section className="story">
            <h4>Breaking the 2nd Lock (2/10/25) with Hunters's GM Assistant</h4>
            <p>
              The party then encountered an ornate magical door with matrix-like
              intersecting lines coursing through its stonework and after
              successfully entring, they recieve a curse. The group enters one
              of the three rooms, the door locks behind them and they evade an
              undead Minotar in a Labrynth. Next the party then faced a series
              of doors with magical riddles. The final room contained an area
              with a massive metallic construct with a single eye and huge
              hulking arms. After defeating it, they met with the Fearless
              Adventuring Guild of heros.
            </p>
          </section>

          <section className="story">
            <h4>Fog Harbor Escapades (2/3/25) with Hunters's GM Assistant</h4>
            <p>
              The party put a daring plan into action, creating undead decoys to
              draw the attention of the guards while they made their way to the
              sewers.
              <span className={toggle}></span>
              In the confusion, they have a confrontation in the sewers with
              Kho, a skilled monk, and Zamiya, a winged serpent.
              <span className={toggle}></span>
              They are led through the sewers to be ambushed by 3 hags.
            </p>
          </section>

          <section className="story">
            <h4>To Fog Harbors (1/27/25) with Hunters's GM Assistant</h4>
            <p>
              The adventure began as the party fled from an erupting volcano and
              met with visions from Miranda.
              <span className={toggle}></span>
              The party spied on the party of Heros, the 3 hags pursuing Cord.
              And Glob had a ritual and gotten wings
              <span className={toggle}></span>
              They arrive in Fog Harbors and infiltrate a house and a
              carpenter's shop.
            </p>
          </section>

          <section className="story">
            <h4>Breaking the First Lock (1/20/25)</h4>
            <p>
              After resting, they crew venture into the volcano and helps a
              golem, who is guarding a door, defeat three Metronian wizards.
              <span className={toggle}>
                Gumption shoots the hand of one and the Golem smashes the
                others. He convices the golem to stop protecting the door by
                befriending him and everyone plays cards with him.
              </span>
              They open the door by solving a riddle of carvings in the door.
              Inside they see a large circular room with roots extending from
              the middle down three separate hallways.Each hallway leads to a
              room with a way to destroy each root.
              <span className={toggle}>
                The first room, Karlin nearly single handedly destroys the root
                source in a room filled with lava. The second room, everyone is
                locked inside needing to solve tasks and riddles. The third
                room, holds an imprisoned Seely Court member that agrees to help
                after having the group play a game against each other.
              </span>
              After completing their task, they run out of the canvern as it
              collapses
            </p>
          </section>

          <section className="story">
            <h4>Another Encounter with the Heros (1/13/25)</h4>
            <p>
              Everyone receives visions from the powerful imprisoned being, of
              what they can have if they succeed breaking the three prison
              locks.
              <span className={toggle}>
                Cord sees his revenge of the Hags that have tormented him.
                Gumption saw himself on a throne of riches. Ane saw himself with
                wings and revenge for his parents' demise. Karlin saw himself
                with his return to powers that can destroy cities, Metreon in
                particular. Theodora saw herself rescuing her love Theogar from
                his prison in the hells.
              </span>
              The party of heros is seen passing by and in an attempt to lure
              them to the lizardfolk city, combat begins.
              <span className={toggle}>
                Gumption goes toward the heros with a zombie head that Karlin
                enchants. He tosses to the head at the heros and Hunger of Hagar
                is cast through the head. Theodora tryes to surpise attack Fay,
                the wizard and pulls her into the Hadar bubble and bites her.
              </span>
              The party narrowly escapes with their lives and the Heros' bag of
              holding.
              <span className={toggle}></span>
              Cord gets lured into a trap by a disembodied voice calling his
              name.
            </p>
          </section>

          <section className="story">
            <h4>Adventuring toward the Volcano! (1/5/25)</h4>
            <p>
              The party is given a proposition to protect the volcano, their
              spiritual hub, from interlopers.
              <span className={toggle}>
                A lizard folk named Zalwa will accompany them from the shadows,
                informing on their progress to the leader T'latoan.
              </span>
              They do some shopping and raise a quetzacoatlus from the dead to
              fly them to the volcano.
              <span className={toggle}>
                Theodora gets a shield, and Karlin gets a cursed jewel in a box.
              </span>
              The reanimated creture is crashed into a party of Heros and a
              battle ensues.
              <span className={toggle}>
                They decide to go to a dinosaur graveyard and convince the
                presiding druid with an infatuation with contruct to assit them.
                Ane encourages the idea to crash into a group of five Heros on
                the side of the mountain. Theodora fights and retreats to the
                edge of a lava pit. Gumption keeps his distance and shoots from
                afar. Cord gets knocked down a couple times and escapes in a
                vapor form. Ane goes head to head with the fighter and the
                caster, escaping down a path between plant growth. Karlin uses
                eldritch power to knock heros into the lava pit and blinks away.
              </span>
              Escaping just barely, everyone is nearly drowned by a jewelry
              encased construct in a pond.
              <span className={toggle}>
                Individually, people are drawn into the shallow pool and
                disappearing. Karlin resists and is greeted by a gold and jewel
                covered creature. He quickly ends the creature saving the
                others.
              </span>
            </p>
          </section>

          <section className="story">
            <h4>Traveling Deeper on the Island (12/16/24)</h4>
            <p>
              The group of unlikely allies meet another stranded prisoner Karlin
              and head towards a volcano with their Lizardfolk guide Razertooth.
              <span className={toggle}>
                Everyone hides in the jungle as Metronian guards fly in on
                griffins and question Razortooth.
              </span>
              They rest at Razortooth's village and individually cause havok in
              the town.
              <span className={toggle}>
                Theodora creeps into a tent, crawling on the walls. Hypnotizes
                and scares a child. Karlin uses magic to slice a household apart
                and take valuables. Gumption attempts to learn Liardfolk
                spells/riguals from razortooth. Cord takes incantrium from the
                shaman's hut. Sketchers inhabits a Lizardfolk body.
              </span>
              The group continues on and meet a Metronian with a pseudodragon,
              who recognizes Cord and a battle ensues. Resulting in his defeat.
              Getting near their desination, the group gets to a thriving
              Lizardfolk city decorated in gold.
            </p>
          </section>

          <section className="story">
            <h4>Landing on the Prison Island (12/9/24)</h4>
            <p>
              A group of prisoners were being transferred from Alterkaz to a
              prison island.
              <span className={toggle}>
                The prisoners attempt a prison break. With the help of Tosh of
                the burning hand and a giggling woman, Theodora, Ane, and Cord
                attempt and fail to fight the guards, while Gumption bided his
                time to see who got the upper hand.
              </span>{" "}
              Only the few prisonsers washed up on the beach after communicating
              with a creature in the depths of the water after the ship cracked
              in half and sank. Guards on griffins were fought and defeated.
              <span className={toggle}>
                Before encountering the guards, they met a kenku named
                Sketchers. After defeating the guards, the kenku ate one of the
                guards brains.
              </span>{" "}
              The group discovers a village of Lizardfolk and enlist the help of
              one of them.
            </p>
          </section>

          {/* CRYSTALPUNK */}
          <p id="cp"></p>
          <br />
          <br />
          <br />
          <br />
          <h2 className="centerheader">Crystalpunk</h2>

          <section className="story">
            <h4>Death Race (12/2/24)</h4>
            <p>
              The crew decides on a Logo and to compete in the Death Race. They
              will compete in the high level and boost an armored vehicle.
              <span className={toggle}>
                The vehicle they are taking belongs to the second place winner
                of the Death Race Razore. On the drive to Razore's place, Bones
                makes a trip to a store run by Renette to buy oven mitts. Bones
                and Jix distract the guards Logaine and Ives and start becoming
                friends. Sk8erboi climbs into a window with the help of Jix.
                While Sk8erboi gets the armored car, Jix backs up into Ives and
                drive away, and Sk8erboi follows during the confusion. They lay
                low and Sk8erboi repaints the stolen vehicle with the help of
                Zorg with inspiration of Barnaby's wolf likeness. It is named
                the crimp mobile.
              </span>{" "}
              They enter the race and try sabotaging competing vehicles.
              <span className={toggle}>
                Jix tangles agrappling hook into the dwarf team's and Bones's
                familiar is snuck into the bugbear's. But don't succeed against
                an orc team. When the race starts, the Dwarves break down
                immediately. The remaining 3 were faced with lava pits, a Kobold
                ambush, and a spined devil. The orcs are knocked out during a
                jump with Jix on top. Bones caused it to twist, Jix jumps off
                and lands on Sk8erboi's Floating Disk. The bugbears trail behind
                after getting hit by a Kobold and the spined devil.
              </span>{" "}
              Against the odds, they win the race!
            </p>
          </section>

          <section className="story">
            <h4>Clearing Mines</h4>
            <p>
              Individuals come together at the Crimson Piston's warehouse. They
              bump into a Kobold dealer on the way to clear out mines.{" "}
              <span className={toggle}>
                They are invited to be apart of a pyramid scheme. After parting
                with the dealer, they try selling to law enforcement.
              </span>{" "}
              They make their way through the tunnels of the mine. Fighting gas
              creatures and discovering ancient ruins.
            </p>
          </section>
          {/* LORDS OF WAR */}
          <p id="dunes"></p>
          <br />
          <br />
          <br />
          <br />
          <h2 className="centerheader">The Lords of War</h2>
          <section className="story">
            <h4>Battle in Al'Haram Part 4 (11/18/24)</h4>
            <p>
              The Guidance Guys fight and defeat the two 20ft tall incetoids
              gods in the light and dark triangle room.
              <span className={toggle}>
                Mei'Wren has two sicles and is in the darkness triangle side of
                the room. Ra'Tsun has a spear and is in the light. Kho and
                Castor deal lots of damage. Kho pummles and shoots Mei'Wren.
                Castor casts Necrotic touch and shoots Ra'Tsun. Kho shoots the
                glass between the group and Alatesh and shatters it.
              </span>{" "}
              They confront Al'Atesh and defeat him.
              <span className={toggle}>
                Ahst pushes Al'Atesh away from the sword with eldrich blast and
                pushes sword back into place. Alatesh pulls the sword out
                effortlessly. He rises into the air and shoots firey beams of
                force at the party. The earth splits progressively creating deep
                cracks with screams eminating from them and a portal begins to
                appear near the battle. Kho gets knocked down by 5 blasts.
                Castor gets knocked down trying to fly from Al'Atesh. Quinn
                heals to get everyone back up. Al'Atesh decends on Quinn, bends
                him at the neck and stabs the Blade of Endless Warlords into his
                face. Kho punchs Al'Atesh with low impact. Al'Atesh grabs Kho
                and drops him into the crevaase. Castor flys and catches him.
                Al'Atesh attacks Castor, knocking him out. Quinn heals Castor
                and turns invisible. Al'Atesh flys next to Quinn, seeing through
                the invisibility and stabs him with the Sword. Ahst drops a
                Sickening Ray on top of Al'Atesh and the invisible Quinn. Grey
                appears at a portal the was growing. Ahst gets knocked out by
                Al'Atesh with his 5 blasts and slides to the edge of a crag.
                Castor blasts Al'Atesh with a Guiding Bolt, knocking him out. He
                tips over and falls into the pit. Kho and Castor fall/fly down
                and captures Al'Atesh with the 'pokeball'.
              </span>{" "}
              Tenticles crash out from the splits in the ground.
              <span className={toggle}>
                Castor flies toward the dunes carrying Kho and Quinn. Kho,
                Quinn, and Ahst get grabbed by the tenticles. Ahst says "Mox,
                Mox, Mox" summoning his patron. Who takes the 'pokeball' from
                Kho and doesn't free Ahst and bamphs away. The party narrowly
                escape the tenticles and run free from the shattering ground.
              </span>{" "}
              A gigantic black twisted serpent erupts from the fissures and
              flies into the darknress of space.
              <br />
              {/* <strong>Epilogue: </strong>
              <br />
              Quinn
              <br />
              The Imperial Dunes fracture into faction after Emperor Theogar
              goes missing. (vneck holds him captive in another plane) Quinn
              goes to his roots in Fort Halar to solidify his faction to control
              the dunes. Using his alter ego Mcmannis to undermine the other
              factions.
              <br />
              Kho
              <br />
              Grey becomes the leader of Metreon. Kho becomes her right hand man
              doing dirty work of spying and assassinating. Every year the two
              of them go to the shiverpines together.
              <br />
              Castor
              <br />
              Castor returns to his wife and family having 4 additoinal
              children. And makes the trip to join with the Guidance Guys for a
              reunion tour, taking his family with him, and creating a 'Von
              Trapp' family singers.
              <br />
              Ahst
              <br />
              I forgot.... D:
              <br />
              Stein
              <br />
              ??? */}
            </p>
          </section>
          <section className="story">
            <h4>Battle in Al'Haram Part 3 (11/11/24)</h4>
            <p>
              The party fights against 4 mages a cavern filled with darkness.
              And defeats them.
              <span className={toggle}>
                Selmura of the Rivers. Melva of the Light. Velcor of the Winds.
                Tekvin of the Sands. Ahst is hit with Immolation and lights up
                pitch dark room with light. It gets snuffed out after Stien
                bicects Melva. Velcor casts lightning bolt on 3 people twice!
                Selmura makes a mud area the restrains Kho, Ahst, and Quinn.
                Velcor casts wind cube that makes most people prone. Castor is
                flying a saves, and attacks Velcor. Kho shadow steps on the back
                of flying castor. Kho gets knocked off and falls in the mud and
                Castor gets knocked out and falls on to Kho. Kho shadow steps to
                Velcor and takes them out with his bayonet. Selmura knocks Kho
                and Quinn into the mud. Tekvin turns the mud into stone. Castor
                and Quinn get half immobolized into the stone. Quinn shatters
                Selmura, who crumbles apart in chunks. Stein stacks up melee
                hits, which Tekvin is resistant to and Castor defeats Tekvin
                with an arrow.
              </span>{" "}
              Kho scouts down stairs from the canvern leading to a wide space
              filled with sand, and finds a temple entrance.
              <span className={toggle}>
                Quinn gets pulled into the sand and loses skin on the leg from
                the knee down. Everyone meets at a temple entrance made of
                obsidian. Intercepted by creatures with leather wings and heads
                with a mockery of a human face.
              </span>{" "}
              The party narrowly escape down into the temple. Leading to a
              corridor
              <span className={toggle}>
                Passing a chininous creture with insectoid legs, they go down
                the hallway to a closed obsidian doorway. Voices can be heard on
                the otherside.
              </span>{" "}
              The doors open to reveal two 20 foot tall creatures in a
              triangular room. A long and tall glass pane at the end of the room
              has the Blade of Endless Warlords buried point first into the
              ground, with Alatesh pulling it out slowly but hasn't yet pulled
              it free.
            </p>
          </section>
          <section className="story">
            <h4> Battle in Al'Haram Part 2 (11/4/24)</h4>
            <p>
              The Guidance Guys fight and defeat an anti magic golem Tor.{" "}
              <span className={toggle}>
                Kho deals significant damage and Castor lands the final blow.
                Magic casted on the golem reflects back on to Quinn and Kho gets
                caught in the reflected shatter. "V-neck" chills out, and Castor
                gets banished.
              </span>{" "}
              The party goes in the hole in the pyramid the golem left; a crack
              that can barely fit sideways. The face off against Amaht (Volrot's
              original master) and defeats him.{" "}
              <span className={toggle}>
                {" "}
                Kho deals lots of damage Castor gets the final blow. Amaht had
                Fire Wreath and dealt a devistating fire blast
              </span>{" "}
              After taking a short rest, the party chooses to shimmy into a
              magically dark cavern instead of a pit of bubbling ooze with
              beetle sized fire flies.{" "}
              <span className={toggle}>
                They attempt to solve a puzzle with 6 statues holding bowls. 2
                bowls manifest floating orbs with necrotic light and radiant
                light. Stein tries using a abberant heart which had a reverse
                effect, resetting the statues.
              </span>{" "}
              The room is plunged into darkness and 4 mages walk into the room.
            </p>
          </section>
          <section className="story">
            <h4>Battle in Al'Haram Part 1 (10/28/24)</h4>
            <p>
              The pocket dimension has been pulled out in to this dimension.{" "}
              <span className={toggle}>
                The party is transported to a random place in the what was the
                pocket dimension. The stars are moving overhead faster than
                normal. The eclipse of Kasuf is in full effect.
              </span>{" "}
              The party flies toward the pyramid they saw in their shared
              vision, into a battle.
              <span className={toggle}>
                Flying away from a burrowing abberant, finding a battle between
                abberants (former acolytes), Uncrowned forces, and Theogar's
                forces. And the burrowing abberant catches up and attacks.
              </span>
              The party successully fends of the enemies.
              <span className={toggle}>Theogar is put in the 'pokeball'.</span>
              They go toward the crash of "V-neck's" pleasure barge. Fighting
              their way through abberants to get there.
              <span className={toggle}>
                They are faced with a large pit of eggs and a telepathic voice
                from a spider. Quinn and Kho dimension door to the wreckage. The
                party is split by a 100 foot wall. Quinn ploymorphs Tel'minax
                the beetle. Castor gets pumped with poison and banishes the
                spider, then Castor, Ahst, and Stien all attack when she
                returned.
              </span>
              'V-neck' rescued, Theogar is left by the pleasure barge and is
              missing when the party returns. They then go on the other side of
              the pyramid and wake up a golem.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
