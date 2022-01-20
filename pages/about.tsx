import * as React from "react";
import { View } from "../components/View";
import { Palettes } from "../components/Palette";

export default function App() {
  return (
    <View>
      <div className="max-w-xs flex items-end justify-start">
        <h1 className="text-5xl p-4 rounded shadow-lg aspect-square leading-tight mb-8 text-gray-500 dark:text-gray-200 bg-gray-100 dark:bg-gray-800">
          Generative Tailwind Squares
        </h1>
      </div>
      <p className="text-xl leading-normal text-gray-400 dark:text-gray-300 max-w-sm">
        A small generative art experiment by{" "}
        <a
          className="font-bold hover:underline"
          href="https://twitter.com/scottpbyrne"
        >
          Scott Byrne
        </a>
        , built with{" "}
        <a className="font-bold hover:underline" href="https://nextjs.org/">
          Next.js
        </a>{" "}
        and{" "}
        <a
          className="font-bold hover:underline whitespace-nowrap"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </View>
  );
}
