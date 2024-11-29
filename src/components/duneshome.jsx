import { Canvas } from "@react-three/fiber";
// import {
//   OrthographicCamera,
//   PresentationControls,
//   Sky,
// } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function DunesStory() {
  const [scrollY, setScrollY] = useState(0);
  const [toggle, setToggle] = useState("non-visible");

  // todo make home page presentable
  // todo add to git hub and deploy with netlify
  // todo update the Readme file
  // * it would be cool to have an "offcanvas" with an Appendix

  // toggle text to show more or less
  function toggleEvent() {
    return toggle === "non-visible"
      ? setToggle("visible")
      : setToggle("non-visible");
  }

  /**
   * * Camera Scroll Effect
   */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if scoll window hits a certain amount stop the camera
      window.scrollY * 0.005 <= 7
        ? setScrollY(window.scrollY * 0.005)
        : setScrollY(7);
      // setScrollY(window.scrollY * 0.09);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    };
  });
  /**
   * * Model
   */
  const model = useLoader(GLTFLoader, "./sand-dune-wide3.glb");

  return (
    <>
      <div>
        <Canvas style={{ position: "fixed", left: "0", outline: "none" }}>
          {/* <OrthographicCamera
            position={[0, scrollY * 2.5, 0]}
            rotation={[0.3 + -scrollY * 0.03, 0, 0]}
          > */}
            {/* <Sky
              distance={450000}
              sunPosition={[0.5, -0.01, 0]}
              inclination={0}
              azimuth={0.25}
              turbidity={10}
            /> */}
            <directionalLight rotation={Math.PI * 0.5} />
            <primitive
              object={model.scene}
              scale={[2, 2, 2]}
              position={[0, -5, -100]}
            />
          {/* </OrthographicCamera> */}
        </Canvas>
        <div style={{ position: "relative" }}>
          <h1 className="header-text">The Imperial Dunes</h1>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toggleEvent}
          >
            See More / See Less
          </button>
          <section className="story">
            <h4>Battle in Al'Haram Part 4 11/18/24</h4>
            <p>
              The Guidance Guys fight and defeat the two 20ft tall incetoids
              gods in the light and dark triangle room.
              <span className={toggle}>
                Mei'Wren has two sicles and is in the darkness triangle side of
                the room. Ra'Tsun has a spear and is in the light. Kho and
                Castor deal lots of damage. Kho pummles and shoots Mei'Wren.
                Castor casts Necrotic touch and shoots Ra'Tsun. Kho shoots the
                glass between the group and Alatesh and shatters it.
              </span>
              And confront Al'Atesh and defeat him.
              <span className={toggle}>
                Ahst pushes Alatesh away from the sword with eldrich blast and
                pushes sword back into place. Alatesh pulls the sword out
                effortlessly. He rises into the air and shoots firey beams of
                force at the party. The earth splits progressively creating deep
                cracks and holes with screams eminating from them. Kho gets
                knocked down by 5 blasts. Castor gets knocked down from an
                opportunity attack. Quinn heals to get everyone back up.
                Al'Atesh decends on Quinn, bends him at the neck and stabs the
                Blade of Endless Warlords into Quinn's face. Kho punchs Al'Atesh
                with low impact. Al'Atesh grabs Kho and drops him into the
                crevaase. Castor flys and catches him. Al'Atesh attacks Castor,
                knocking him out. Quinn heals Castor and turns invisible.
                Al'Atesh flys next to Quinn, seeing through the invisibility and
                stabs him with the Sword. Ahst drops a Sickening Ray on top of
                Al'Atesh and the invisible Quinn. Grey appears at a portal the
                was growing. Ahst gets knocked out by Al'Atesh with his 5 blasts
                and slides to the edge of a pit. Castor blasts Al'Atesh with a
                Guiding Bolt. He is taken out and tips over and falls into the
                pit. Kho and Castor fall/fly down and captures Al'Atesh with the
                'pokeball'.
              </span>
              Tenticles crash out from the splits in the ground.
              <span className={toggle}>
                Castor flies toward the dunes carrying Kho and Quinn. Kho,
                Quinn, and Ahst get grabbed by the tenticles. Ahst says Mox,
                Mox, Mox, summoning his patron. He takes the 'pokeball' from Kho
                and doesn't free Ahst and bamphs away. The party escapse the
                tenticles and run free from the shattering ground.
              </span>
              A gigantic black twisted serpent erupts from the fissures and
              flies into the darknress of space.
              <br />
              <strong>Epilogue: </strong>
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
              ???
            </p>
          </section>
          <section className="story">
            <h4>Battle in Al'Haram Part 3 11/11/24</h4>
            <p>
              The party fights against 4 mages a cavern filled with darkness.
              And defeats them.
              <span className={toggle}>
                Selmura of the Rivers. Melva of the Light. Velcor of the Winds.
                Tekvin of the Sands. Ahst is hit with immolation and lights up
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
                Selmura, who crumbles apart in chuncks. Stein stacks up melee
                hits, which Tekvin is resistant to and Castor defeats Tekvin
                with an arrow.
              </span>
              Kho scouts down stairs from the canvern leading to a wide space
              filled with sand, and finds a temple entrance.
              <span className={toggle}>
                Quinn gets pulled into the sand and loses skin on the leg from
                the knee down. Everyone meets at a temple entrance made of
                obsidian. Intercepted by creatures with leather wings and heads
                with a mockery of a human face.
              </span>
              The party narrowly escape down into the temple. Leading to a
              corridor
              <span className={toggle}>
                Passing a chininous creture with insectoid legs, they go down
                the hallway to a closed obsidian doorway. Voices can be heard on
                the otherside.
              </span>
              The doors open to reveal two 20 foot tall creatures in a
              triangular room. A long and tall glass pane at the end of the room
              has the Blade of Endless Warlords buried point first into the
              ground, with Alatesh pulling it out slowly but hasn't yet pulled
              it free.
            </p>
          </section>
          <section className="story">
            <h4> Battle in Al'Haram Part 2 11/4/24</h4>
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
            <h4>Battle in Al'Haram Part 1 10/28/24</h4>
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
