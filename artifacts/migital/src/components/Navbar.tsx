import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import cliqueLogo from "@assets/clique_logo_transparent_1784458117046.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  };
  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "About Us", href: "/#values" },
    { label: "Our Team", href: "/#team" },
    { label: "Careers", href: "/careers" }
  ];

  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="show"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#111111]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between text-white">
        <motion.div variants={navItem} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="flex items-center">
          <Link href="/">
            <img src={cliqueLogo} alt="Clique Technologies" className="h-12 w-auto cursor-pointer" style={{ mixBlendMode: "screen" }} />
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item) => (
            <motion.div key={item.label} variants={navItem} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Link href={item.href} className="hover:text-primary transition-colors active:scale-95 inline-block">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <motion.div variants={navItem} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="hidden sm:block">
            <Link href="/#contact" className="hover:text-primary transition-colors active:scale-95 inline-block">Contact</Link>
          </motion.div>
          <motion.div variants={navItem}>
            <Link href="/services" className="relative overflow-hidden bg-primary text-[#111111] px-6 py-2.5 rounded-full font-semibold active:scale-95 group hover:opacity-90 transition-opacity inline-block">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] skew-x-[-20deg] group-hover:animate-shimmer" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}