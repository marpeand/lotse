"use client";

import Link from "next/link";
import { cn } from "../utils/cn";
import { usePathname } from "next/navigation";
import React from "react";
import { resume, showResume } from "@/blog.config";

const navItems = {
  "/": { name: "home" },
  "/projects": { name: "projects" },
  "/about": { name: "about" },
  "/resume.pdf": { name: "resume" },
};

const NavItem = ({ path, name, pathname }) => {
  const isResume = path === "/resume.pdf";
  const Component = isResume ? "a" : Link;
  const props = isResume
    ? { href: path, target: "_blank", rel: "noopener noreferrer" }
    : { href: path };

  return (
    <Component {...props} key={path}>
      <span
        className={cn(
          "text-[#8D8D8D] hover:text-white transition duration-[250ms] ease-out hover:duration-[50ms]",
          pathname === path ? "text-white" : ""
        )}
      >
        {name}
      </span>
    </Component>
  );
};

export function Navbar() {
  const pathname = usePathname();
  const paths = Object.keys(navItems).filter(
    (path) => showResume || path !== resume
  );

  return (
    <header className="mb-6 md:px-0 pl-4">
      <nav className="flex space-x-3">
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <NavItem
              path={path}
              name={navItems[path].name}
              pathname={pathname}
            />
            {index < paths.length - 1 && (
              <span className="text-[#8D8D8D]">/</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
}
