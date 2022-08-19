import { useState } from "react";
import BlueBackground from "../src/alpaca/backgrounds/blue50.png";

function App() {
  const [background, setBackground] = useState(BlueBackground);
  const [ears, setEars] = useState();
  const [eyes, setEyes] = useState();
  const [hair, setHair] = useState();
  const [leg, setLeg] = useState();
  const [mouth, setMouth] = useState();
  const [neck, setNeck] = useState();
  const [accessories, setAccessories] = useState();

  return (
    <div className="card flex flex-wrap items-center h-72 w-full bg-gray-100 shadow-2xl m-36">
      <div className="card-body">
        <div className="card-title text-5xl">Alpaca Generator</div>
        <img src={background} alt="" height="300px" width="300px" />
      </div>
      <div className="card-body">
        <div className="card-title text-5xl">Alpaca Generator</div>
        <img src={background} alt="" height="300px" width="300px" />
      </div>
    </div>
  );
}

export default App;
