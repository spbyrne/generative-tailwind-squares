import * as React from "react";
import { paletteOptions } from "./Palette";
import { Square, Squares } from "./Square";
import { randomFromArray } from "./Util";

const seedrandom = require("seedrandom");

export const CanvasContext = React.createContext<any>(null);

export const randomSeed = () => {
  return Array(16)
    .fill(undefined)
    .map((_) => String.fromCharCode(33 + Math.random() * (127 - 33)))
    .join("");
};

export const Canvas = ({ startSeed = randomSeed() }) => {
  const [random, setRandom] = React.useState(null);
  const [seed, setSeed] = React.useState(startSeed);

  const regenerate = () => {
    setSeed(randomSeed());
  };

  React.useEffect(() => {
    setRandom(() => seedrandom(seed));
  }, [seed]);

  return (
    <CanvasContext.Provider
      value={{
        random,
      }}
    >
      <div
        className="relative w-full aspect-square rounded overflow-hidden shadow-xl cursor-pointer"
        onClick={regenerate}
      >
        {seed !== "" && <Squares random={random} />}
        <div
          className="absolute pointer-events-none z-1000 w-full h-full top-0 left-0 mix-blend-soft-light opacity-20"
          style={{ background: "url('/noise.png') repeat" }}
        ></div>
        <div
          className="absolute pointer-events-none z-1000 w-full h-full top-0 left-0 mix-blend-multiply opacity-5"
          style={{ background: "url('/noise.png') repeat" }}
        ></div>
      </div>
      <input
        className="w-64 font-mono absolute bg-transparent p-0 mt-3 border-0 outline-none text-gray-500 dark:text-gray-200 opacity-50 hover:opacity-100 transition-all duration-150 ease-out"
        value={seed}
        type="text"
        onChange={(e) => {
          setSeed(e.target.value);
        }}
      />
    </CanvasContext.Provider>
  );
};
