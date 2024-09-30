import { House } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tech-Hub",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: <House />,
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "FoundItems",
      href: "/found-items",
    },
  ],
  navMenuItems: [
    {
      label: <House />,
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "FoundItems",
      href: "/found-items",
    },
  ],
};
