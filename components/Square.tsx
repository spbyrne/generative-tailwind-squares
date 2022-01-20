import * as React from "react";
import { CanvasContext } from "./Canvas";
import { gridOptions } from "./Grid";
import { paletteOptions } from "./Palette";
import { limitPalette, randomFromArray } from "./Util";

export const Squares = ({ random }) => {
  const [grid, setGrid] = React.useState(null);
  const [children, setChildren] = React.useState(null);

  React.useEffect(() => {
    if (!random) return;
    const newGrid = randomFromArray(random, gridOptions);
    setGrid(newGrid);
    const palette = randomFromArray(random, paletteOptions);
    let newChildren = [];
    for (var i = 0; i < newGrid.size; i++) {
      newChildren.push(<Square random={random} palette={palette} />);
    }
    setChildren(newChildren);
  }, [random]);

  if (!children) return null;

  return (
    <div className={`grid w-full h-full ${grid.rows} ${grid.columns}`}>
      {children}
    </div>
  );
};

export const Square = ({ random, palette }) => {
  const color = randomFromArray(random, palette);
  const limitedPalette = limitPalette(palette, color);
  const componentColor = randomFromArray(random, limitedPalette);
  const Component = randomFromArray(random, ComponentOptions);

  return (
    <div className={`relative overflow-hidden ${color}`}>
      <Component
        random={random}
        color={componentColor}
        palette={palette}
        limitedPalette={limitedPalette}
      />
    </div>
  );
};

const Diamond = ({ random, color, palette }) => {
  return (
    <div
      className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-70 rotate-45 ${color}`}
    ></div>
  );
};

const Arrow = ({ random, color, palette }) => {
  const innerColor = randomFromArray(random, limitPalette(palette, color));
  const rotation = randomFromArray(random, [
    "0",
    "rotate-90",
    "rotate-180",
    "rotate-270",
  ]);

  return (
    <div className={`w-full h-full absolute ${rotation}`}>
      <div
        className={`w-full h-full absolute origin-top top-0 left-0 scale-x-150 scale-y-200`}
      >
        <div
          className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-70 rotate-45 ${color}`}
        >
          <div
            className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 ${innerColor}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const DoubleLine = ({ random, color, palette }) => {
  const rotation = randomFromArray(random, ["0", "rotate-90"]);

  return (
    <div className={`w-full h-full relative ${rotation}`}>
      <div className={`w-full h-1/4 absolute left-0 top-0 ${color}`}></div>
      <div className={`w-full h-1/4 absolute left-0 top-1/2 ${color}`}></div>
    </div>
  );
};

const Argyle = ({ random, color, palette }) => {
  const rotation = randomFromArray(random, [
    "0",
    "rotate-90 -top-1/2 left-1/2",
  ]);

  return (
    <div
      className={`w-full h-full absolute origin-left scale-x-50 ${rotation}`}
    >
      <div
        className={`w-full h-full absolute left-0 scale-70 rotate-45 ${color}`}
      ></div>
      <div
        className={`w-full h-full absolute left-0 translate-x-full scale-70 rotate-45 ${color}`}
      ></div>
    </div>
  );
};

const Cube = ({ random, color, palette, limitedPalette }) => {
  const innerColor = randomFromArray(
    random,
    limitPalette(limitedPalette, color)
  );
  const rotation = randomFromArray(random, ["", "rotate-90"]);

  return (
    <div
      className={`w-full h-full absolute origin-center scale-y-50 ${rotation}`}
    >
      <div className={`w-full h-full absolute left-0 -top-1/2 ${color}`}></div>
      <div
        className={`w-full h-full absolute left-0 scale-70 rotate-45 ${innerColor}`}
      ></div>
    </div>
  );
};

const Split = ({ random, color, palette }) => {
  const position = randomFromArray(random, ["top-1/2", "left-1/2"]);
  return <div className={`w-full h-full absolute ${position} ${color}`}></div>;
};

const DiagSplit = ({ random, color, palette }) => {
  const rotation = randomFromArray(random, ["rotate-45", "-rotate-45"]);

  return (
    <div
      className={`w-full h-full top-1/2 origin-top scale-200 absolute ${rotation} ${color}`}
    ></div>
  );
};

const DiagSplitDot = ({ random, color, palette }) => {
  const rotation = randomFromArray(random, ["rotate-45", "-rotate-45"]);
  const splitColor = randomFromArray(random, limitPalette(palette, color));
  const dotColor = randomFromArray(
    random,
    limitPalette(limitPalette(palette, splitColor), color)
  );
  const dotSplitColor = randomFromArray(
    random,
    limitPalette(
      limitPalette(limitPalette(palette, splitColor), color),
      dotColor
    )
  );

  return (
    <>
      <div
        className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-60  rounded-full ${palette[dotColor]}`}
      ></div>
      <div
        className={`w-full h-full top-1/2 origin-top scale-200 absolute overflow-hidden ${rotation} ${palette[splitColor]}`}
      >
        <div
          className={`w-full h-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-30  rounded-full ${palette[dotSplitColor]}`}
        ></div>
      </div>
    </>
  );
};

const DiamondCircle = ({ random, color, palette }) => {
  const innerColor = randomFromArray(random, limitPalette(palette, color));
  return (
    <div
      className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-70 rotate-45 ${color}`}
    >
      <div
        className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-60  rounded-full ${innerColor}`}
      ></div>
    </div>
  );
};

const SmallSquare = ({ random, color, palette }) => {
  return (
    <div
      className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 ${color}`}
    ></div>
  );
};

const Circle = ({ random, color, palette }) => {
  return (
    <div
      className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-65  rounded-full ${color}`}
    ></div>
  );
};

const Diglet = ({ random, color, palette }) => {
  const rotation = randomFromArray(random, [
    "0",
    "rotate-90",
    "rotate-180",
    "rotate-270",
  ]);

  return (
    <div
      className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${rotation}`}
    >
      <div
        className={`absolute top-[20%] w-full h-[130%] origin-top scale-65 rounded-t-full ${color}`}
      ></div>
    </div>
  );
};

const CircleStar = ({ random, color, palette }) => {
  return (
    <>
      <div
        className={`w-full h-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-99  rounded-full ${color}`}
      ></div>
      <div
        className={`w-full h-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 scale-99  rounded-full ${color}`}
      ></div>
      <div
        className={`w-full h-full absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-99  rounded-full ${color}`}
      ></div>
      <div
        className={`w-full h-full absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 scale-99  rounded-full ${color}`}
      ></div>
    </>
  );
};

const NestedCircle = ({ random, color, palette }) => {
  const innerColor = randomFromArray(random, limitPalette(palette, color));
  return (
    <div
      className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-80 rounded-full ${color}`}
    >
      <div
        className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 rounded-full ${innerColor}`}
      ></div>
    </div>
  );
};

const Elbow = ({ random, color, palette }) => {
  const innerColor = randomFromArray(random, limitPalette(palette, color));
  const rotation = randomFromArray(random, [
    "0",
    "rotate-90",
    "rotate-180",
    "rotate-270",
  ]);
  return (
    <div className={`absolute w-full h-full ${rotation}`}>
      <div className="absolute w-full h-full scale-200 top-1/2 left-1/2">
        <div
          className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full ${color}`}
        >
          <div
            className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 rounded-full ${innerColor}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const ComponentOptions = [
  Diamond,
  Arrow,
  DoubleLine,
  Argyle,
  Cube,
  DiagSplit,
  DiagSplitDot,
  Split,
  DiamondCircle,
  SmallSquare,
  Circle,
  Diglet,
  CircleStar,
  NestedCircle,
  Elbow,
  () => null,
];
