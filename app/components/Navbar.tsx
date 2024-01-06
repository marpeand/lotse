"use client";

import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/projects": {
    name: "projects",
  },
  "/about": {
    name: "about",
  },
};

function NavItem({ path, name }: { path: string; name: string }) {
  return (
    <Link key={path} href={path} className="flex">
      <span className="pr-4">{name}</span>
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="mt-2 mb-6 md:px-0 px-4">
      <nav className="flex flex-row pr-10">
        {Object.entries(navItems).map(([path, { name }]) => {
          return <NavItem key={path} path={path} name={name} />;
        })}
      </nav>
    </header>
  );
}
