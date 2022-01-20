import * as React from "react";
import { Nav } from "./Nav";

export const View = ({ children = null }) => {
  return (
    <div className="w-screen font-mono min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
      <div className="w-full max-w-[100vh] p-8 md:p-12 xl:p-16">
        <Nav />
        {children}
      </div>
    </div>
  );
};
