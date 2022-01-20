import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/colors",
    label: "Colors",
  },
  {
    href: "/about",
    label: "About",
  },
];

export const Nav = () => {
  const router = useRouter();

  return (
    <ul className="fixed z-1000 p-2 top-0 xl:top-2 right-6 flex gap-6 text-gray-500 dark:text-gray-200 group font-mono transition-all ease-out duration-150">
      {navItems.map((item) => {
        return (
          <li>
            <Link href={item.href}>
              <a
                className={`hover:opacity-100 transition-all ease-out duration-150 ${
                  router.pathname === item.href
                    ? `opacity-80 text-gray-600 dark:text-gray-100`
                    : `opacity-30 group-hover:opacity-50`
                }`}
              >
                {item.label}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
