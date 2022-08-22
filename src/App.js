import { useState } from "react";
import {
  accessoryNames,
  backgroundNames,
  earNames,
  eyeNames,
  hairNames,
  mouthNames,
  neckNames,
  legNames,
} from "./utils";
import BlueBackground from "../src/alpaca/backgrounds/darkblue70.png";
import DefaultEars from "../src/alpaca/ears/default.png";
import DefaultEyes from "../src/alpaca/eyes/default.png";
import DefaultHair from "../src/alpaca/hair/default.png";
import DefaultLeg from "../src/alpaca/leg/default.png";
import DefaultMouth from "../src/alpaca/mouth/default.png";
import DefaultNeck from "../src/alpaca/neck/default.png";
import Headphones from "../src/alpaca/accessories/headphone.png";
import Nose from "../src/alpaca/nose.png";

function App() {
  const [background, setBackground] = useState(BlueBackground);
  const [ears, setEars] = useState(DefaultEars);
  const [eyes, setEyes] = useState(DefaultEyes);
  const [hair, setHair] = useState(DefaultHair);
  const [leg, setLeg] = useState(DefaultLeg);
  const [mouth, setMouth] = useState(DefaultMouth);
  const [neck, setNeck] = useState(DefaultNeck);
  const [accessories, setAccessories] = useState(accessoryNames.Headphone);
  const [selectedAttribute, setSelectedAttribute] = useState(hairNames);

  const changeStyles = (e) => {
    e.preventDefault();
    const array = e.target.value.split(",");
    setSelectedAttribute(array);
  };

  const changeAccessory = (value) => {
    console.log(value);
    console.log("HIT");
    setAccessories(value);
  };

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
            className="pt-8"
          />
          <img
            src={ears}
            alt=""
            height="400px"
            width="400px"
            className="absolute -mt-96"
          />
          <img
            src={neck}
            alt=""
            height="400px"
            width="400px"
            className="absolute -mt-96"
          />
          <img
            src={hair}
            alt=""
            height="400px"
            width="400px"
            className="absolute -mt-96"
          />
          <img
            src={accessories}
            alt=""
            height="400px"
            width="400px"
            className="absolute -mt-96"
          />
          <img
            src={eyes}
            alt=""
            height="400px"
            width="400px"
            className="absolute -mt-96"
          />

          <img
            src={Nose}
            alt=""
            height="400px"
            width="400px"
            className="absolute -mt-96"
          />
          <img
            src={mouth}
            alt=""
            height="400px"
            width="400px"
            className="absolute -mt-96"
          />
          <img
            src={leg}
            alt=""
            height="400px"
            width="400px"
            className="absolute -mt-96"
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
            <div className="flex flex-wrap">
              <button
                className="btn btn-outline btn-primary m-1 flex-1"
                onClick={changeStyles}
                value={hairNames}
              >
                Hair
              </button>
              <button
                className="btn btn-outline btn-primary m-1 active:btn-active flex-1"
                onClick={changeStyles}
                value={earNames}
              >
                Ears
              </button>
              <button
                className="btn btn-outline btn-primary m-1 flex-1"
                onClick={changeStyles}
                value={eyeNames}
              >
                Eyes
              </button>
              <button
                className="btn btn-outline btn-primary m-1 flex-1"
                onClick={changeStyles}
                value={mouthNames}
              >
                Mouth
              </button>
              <button
                className="btn btn-outline btn-primary m-1 flex-1"
                onClick={changeStyles}
                value={neckNames}
              >
                Neck
              </button>
              <button
                className="btn btn-outline btn-primary m-1"
                onClick={changeStyles}
                value={legNames}
              >
                Leg
              </button>
              <button
                className="btn btn-outline btn-primary m-1"
                onClick={changeStyles}
                value={accessoryNames}
              >
                Accessories
              </button>
              <button
                className="btn btn-outline btn-primary m-1"
                onClick={changeStyles}
                value={backgroundNames}
              >
                Background
              </button>
            </div>
          </div>
          <h6
            className="text-2xl font-bold uppercase"
            onClick={changeStyles}
            value={earNames}
          >
            Style
          </h6>
          <div className="grid grid-cols-3">
            {Object.entries(accessoryNames).map(([key, value]) => (
              <button
                className="btn btn-outline btn-primary m-1"
                key={key}
                onClick={() => changeAccessory(value)}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
