import { useEffect, useState } from "react";
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
import Nose from "../src/alpaca/nose.png";

function App() {
  const [background, setBackground] = useState(backgroundNames.DarkBlue);
  const [ears, setEars] = useState(earNames.Default);
  const [eyes, setEyes] = useState(eyeNames.Default);
  const [hair, setHair] = useState(hairNames.Default);
  const [leg, setLeg] = useState(legNames.Default);
  const [mouth, setMouth] = useState(mouthNames.Default);
  const [neck, setNeck] = useState(neckNames.Default);
  const [accessories, setAccessories] = useState(accessoryNames.Headphone);
  const [selectedAttribute, setSelectedAttribute] = useState(hairNames);
  const [currentAccessory, setCurrentAccessory] = useState("hair");

  useEffect(() => {
    console.log(
      "Ears: ",
      ears,
      "Eyes: ",
      eyes,
      "Hair: ",
      hair,
      "Leg: ",
      leg,
      "Mouth: ",
      mouth,
      "Neck: ",
      neck,
      "Accessories: ",
      accessories,
      "Background: ",
      background
    );
  }, [background, ears, eyes, hair, leg, mouth, neck, accessories]);

  const changeAccessory = (key, value) => {
    console.log(currentAccessory);
    switch (currentAccessory) {
      case "background":
        setBackground(value);
      case "ears":
        setEars(value);
      case "eyes":
        setEyes(value);
      case "hair":
        setHair(value);
      case "leg":
        setLeg(value);
      case "mouth":
        setMouth(value);
      case "neck":
        setNeck(value);
      case "accessories":
        setAccessories(value);
      default:
        setBackground(backgroundNames.DarkBlue);
    }
  };

  return (
    <div className="card grid grid-cols-2 items-center bg-gray-100 shadow-2xl m-52">
      <div className="card-body mb-96">
        <div className="card-title text-5xl uppercase my-4">
          alpaca generator
        </div>
        <div className="relative">
          <img
            src={background}
            alt=""
            height="400px"
            width="400px"
            className="absolute"
          />
          <img
            src={ears}
            alt=""
            height="400px"
            width="400px"
            className="absolute"
          />
          <img
            src={neck}
            alt=""
            height="400px"
            width="400px"
            className="absolute"
          />
          <img
            src={hair}
            alt=""
            height="400px"
            width="400px"
            className="absolute"
          />
          <img
            src={accessories}
            alt=""
            height="400px"
            width="400px"
            className="absolute"
          />
          <img
            src={eyes}
            alt=""
            height="400px"
            width="400px"
            className="absolute"
          />

          <img
            src={Nose}
            alt=""
            height="400px"
            width="400px"
            className="absolute"
          />
          <img
            src={mouth}
            alt=""
            height="400px"
            width="400px"
            className="absolute"
          />
          <img
            src={leg}
            alt=""
            height="400px"
            width="400px"
            className="absolute"
          />
        </div>
        <div className="m-4 space-x-4">
          <button className="btn btn-primary">Random</button>
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
      <div className="card-body">
        <div className="grid grid-cols-1">
          <div className="my-10">
            <h6 className="text-2xl font-bold uppercase my-4">
              Accessorize The Alapacas
            </h6>
            <div className="flex flex-wrap">
              <button
                className="btn btn-outline btn-primary m-1 flex-1"
                onClick={() => {
                  setSelectedAttribute(hairNames);
                  setCurrentAccessory("hair");
                }}
                value={hairNames}
              >
                Hair
              </button>
              <button
                className="btn btn-outline btn-primary m-1 active:btn-active flex-1"
                onClick={() => {
                  setSelectedAttribute(earNames);
                  setCurrentAccessory("ears");
                }}
                value={earNames}
              >
                Ears
              </button>
              <button
                className="btn btn-outline btn-primary m-1 flex-1"
                onClick={() => {
                  setSelectedAttribute(eyeNames);
                  setCurrentAccessory("eyes");
                }}
                value={eyeNames}
              >
                Eyes
              </button>
              <button
                className="btn btn-outline btn-primary m-1 flex-1"
                onClick={() => {
                  setSelectedAttribute(mouthNames);
                  setCurrentAccessory("mouth");
                }}
                value={mouthNames}
              >
                Mouth
              </button>
              <button
                className="btn btn-outline btn-primary m-1 flex-1"
                onClick={() => {
                  setSelectedAttribute(neckNames);
                  setCurrentAccessory("neck");
                }}
                value={neckNames}
              >
                Neck
              </button>
              <button
                className="btn btn-outline btn-primary m-1"
                onClick={() => {
                  setSelectedAttribute(legNames);
                  setCurrentAccessory("leg");
                }}
                value={legNames}
              >
                Leg
              </button>
              <button
                className="btn btn-outline btn-primary m-1"
                onClick={() => {
                  setSelectedAttribute(accessoryNames);
                  setCurrentAccessory("hair");
                }}
                value={accessoryNames}
              >
                Accessories
              </button>
              <button
                className="btn btn-outline btn-primary m-1"
                onClick={() => {
                  setSelectedAttribute(backgroundNames);
                  setCurrentAccessory("background");
                }}
                value={backgroundNames}
              >
                Background
              </button>
            </div>
          </div>
          <h6 className="text-2xl font-bold uppercase">Style</h6>
          <div className="grid grid-cols-3">
            {Object.entries(selectedAttribute).map(([key, value]) => (
              <button
                className="btn btn-outline btn-primary m-1"
                key={key}
                onClick={() => changeAccessory(key, value)}
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
