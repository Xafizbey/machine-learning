"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BrainCircuit, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-1.5 rounded-lg">
              <BrainCircuit className="h-5 w-5 text-white" />
            </div>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ML Portal</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/lectures" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  "transition-all",
                  isActive("/lectures") && "bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium"
                )}>
                  Лекции
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/labs" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  "transition-all",
                  isActive("/labs") && "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium"
                )}>
                  Лабораторные
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/glossary" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  "transition-all",
                  isActive("/glossary") && "bg-pink-500/10 text-pink-600 dark:text-pink-400 font-medium"
                )}>
                  Глоссарий
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex md:hidden flex-1 justify-end">
          <MobileNav />
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="px-2 text-xs"
      >
        <Link href="/lectures">
          Лекции
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="px-2 text-xs"
      >
        <Link href="/labs">
          Лабы
        </Link>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="px-2 text-xs"
      >
        <Link href="/glossary">
          Словарь
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
}