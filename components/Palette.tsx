export const paletteOptions = [
  ["bg-white", "bg-yellow-200", "bg-red-300", "bg-indigo-300", "bg-indigo-200"],
  ["bg-white", "bg-orange-400", "bg-yellow-300", "bg-teal-300", "bg-teal-200"],
  ["bg-gray-50", "bg-cyan-300", "bg-amber-200", "bg-red-300", "bg-red-200"],
  [
    "bg-white",
    "bg-purple-400",
    "bg-amber-200",
    "bg-emerald-300",
    "bg-emerald-200",
  ],
  [
    "bg-white",
    "bg-emerald-300",
    "bg-yellow-100",
    "bg-purple-300",
    "bg-purple-200",
  ],
  [
    "bg-orange-400",
    "bg-yellow-300",
    "bg-yellow-100",
    "bg-indigo-600",
    "bg-indigo-400",
  ],
  ["bg-white", "bg-orange-300", "bg-orange-200", "bg-sky-400", "bg-sky-300"],
  ["bg-white", "bg-rose-400", "bg-red-300", "bg-teal-400", "bg-teal-200"],
  ["bg-orange-400", "bg-yellow-300", "bg-teal-300", "bg-teal-200"],
  ["bg-sky-200", "bg-red-300", "bg-yellow-100", "bg-sky-400", "bg-sky-300"],
];

export const Palettes = () => {
  return (
    <div className="flex flex-col gap-10 py-4 xl:py-0">
      {paletteOptions.map((palette) => {
        return (
          <div className={`group w-full flex h-28 rounded overflow-hidden shadow-lg`}>
            {palette.map((color) => {
              return (
                <div className={`relative w-full h-full ${color}`}>
                  <p className="absolute top-2 left-3 text-sm opacity-0 group-hover:opacity-70 transition-all ease-out duration-150">
                    {color}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
