"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#schedule", label: "Schedule" },
  { href: "/ideas", label: "Ideas" },
  { href: "/tools", label: "Tools" },
  { href: "/guides", label: "Guides" },
  { href: "/#faq", label: "FAQ" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-primary">
          <img src="/branding/favicon-32.png" alt="" width={24} height={24} className="h-6 w-6" />
          The Big Squeeze
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="rounded-full"
            nativeButton={false}
            render={<a href="/#register" />}
          >
            Register
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-3 border-t px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="w-fit rounded-full"
            render={<a href="/#register" onClick={() => setOpen(false)} />}
          >
            Register
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
