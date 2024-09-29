"use client";
import React from "react";
import { Navbar as NavBarNextUI, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Logo } from "../../ui/icons";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/src/config/site";
import clsx from "clsx";
import NextLink from "next/link";
import { ThemeSwitch } from "../../ui/theme-switch";
import NavbarDropdown from "./NavbarDropdown";
import { useUser } from "@/src/context/userProvider";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { user } = useUser();

  return (
    <NavBarNextUI onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ul className="hidden md:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        justify="end"
      >
        <NavbarItem className="gap-2">
          <ThemeSwitch />
        </NavbarItem>
        {user?.email ? (
          <NavbarItem className="gap-2">
            <NavbarDropdown />
          </NavbarItem>
        ) : (
          <NavbarItem className="gap-2">
            <Link href="/login">
              <Button color="primary" variant="flat">Login</Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavBarNextUI>
  );
}
