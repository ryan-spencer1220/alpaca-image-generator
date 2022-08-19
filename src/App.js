import { useState } from "react";
import BlueBackground from "../src/alpaca/backgrounds/darkblue70.png";
import DefaultEars from "../src/alpaca/ears/default.png";
import DefaultEyes from "../src/alpaca/eyes/default.png";
import DefaultHair from "../src/alpaca/hair/default.png";
import DefaultLeg from "../src/alpaca/leg/default.png";
import DefaultMouth from "../src/alpaca/mouth/default.png";
import DefaultNeck from "../src/alpaca/neck/default.png";
import Nose from "../src/alpaca/nose.png";

function App() {
  const [background, setBackground] = useState(BlueBackground);
  const [ears, setEars] = useState(DefaultEars);
  const [eyes, setEyes] = useState(DefaultEyes);
  const [hair, setHair] = useState(DefaultHair);
  const [leg, setLeg] = useState(DefaultLeg);
  const [mouth, setMouth] = useState(DefaultMouth);
  const [neck, setNeck] = useState(DefaultNeck);
  const [accessories, setAccessories] = useState(null);
  const [selectedAttribute, setSelectedAttribute] = useState();

  return (
    <div className="card grid grid-cols-2 items-center bg-gray-100 shadow-2xl m-52 space-x-4 h-max">
      <div className="card-body m-8">
        <div className="card-title text-5xl uppercase my-4">
          alpaca generator
        </div>
        <div className="relative">
          <img
            src={background}
            alt=""
            height="400px"
            width="400px"
            className="z-0"
          />
          <img
            src={ears}
            alt=""
            height="400px"
            width="400px"
            className="absolute z-10"
          />
        </div>
        <div className="m-4 space-x-4">
          <button className="btn btn-primary">Random</button>
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
      <div className="card-body m-10">
        <div className="grid grid-cols-1">
          <div className="my-10 ">
            <h6 className="text-2xl font-bold uppercase my-4">
              Accessorize The Alapacas
            </h6>
            <div className="grid grid-cols-3">
              <button className="btn btn-outline btn-primary px-20 m-1">
                Hair
              </button>
              <button className="btn btn-outline btn-primary m-1 active:btn-active">
                Ears
              </button>
              <button className="btn btn-outline btn-primary m-1">Eyes</button>
              <button className="btn btn-outline btn-primary m-1">Mouth</button>
              <button className="btn btn-outline btn-primary m-1">Neck</button>
              <button className="btn btn-outline btn-primary m-1">Leg</button>
              <button className="btn btn-outline btn-primary m-1">
                Accessories
              </button>
              <button className="btn btn-outline btn-primary m-1">
                Background
              </button>
            </div>
          </div>
          <h6 className="text-2xl font-bold uppercase">Style</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
