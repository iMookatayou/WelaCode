"use client";

import type { FC, CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "@/styles/Navbar.module.css";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/landingpage#top", label: "Home" },
  { href: "/landingpage#services", label: "Services" },
  { href: "/landingpage#process", label: "Work" },
  { href: "/landingpage#contact", label: "Contact" },
];

const Navbar: FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    // ปิดเมนูหลังจากกดลิงก์บนมือถือ
    setOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        {/* LEFT: BRAND – ONLY LOGO */}
        <div className={styles.brand}>
          <Image
            src="/images/CropWelaCode.png"
            alt="WelaCode Logo"
            width={120}
            height={40}
            className={styles.logoImage}
            priority
          />
        </div>

        {/* HAMBURGER BUTTON (mobile) */}
        <button
          type="button"
          className={`${styles.navToggle} ${
            open ? styles.navToggleOpen : ""
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </button>

        {/* RIGHT: NAV */}
        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  isActive ? styles.navLinkActive : ""
                }`}
                onClick={handleNavClick}
              >
                <span className={styles.navLabel}>
                  {item.label.split("").map((ch, index) => (
                    <span
                      key={index}
                      className={styles.navLabelChar}
                      style={{ "--char-index": index } as CSSProperties}
                    >
                      {ch === " " ? "\u00A0" : ch}
                    </span>
                  ))}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
