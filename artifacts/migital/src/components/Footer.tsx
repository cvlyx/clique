import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import cliqueLogo from "@assets/clique_logo_transparent_1784458117046.png";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-4 pr-8">
            <div className="mb-6 hover:scale-105 transition-transform origin-left cursor-pointer w-fit">
              <img
                src={cliqueLogo}
                alt="Clique Technologies"
                className="h-12 w-auto"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Building reliable, scalable, and impactful technology solutions that help businesses and individuals achieve more through innovation and digital transformation.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors inline-block active:scale-95">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors inline-block active:scale-95">
                  AI & Data Science
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors inline-block active:scale-95">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors inline-block active:scale-95">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <h4 className="font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li>
                <Link href="/#values" className="hover:text-primary transition-colors inline-block active:scale-95">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors inline-block active:scale-95">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors inline-block active:scale-95">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors inline-block active:scale-95">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 tracking-wide">Connect</h4>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Follow us and stay up to date with our latest innovations.
            </p>
            <div className="flex items-center gap-2.5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#111111] transition-all hover:scale-110 active:scale-95">
                <Facebook className="w-4 h-4 text-white group-hover:text-[#111111]" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110 active:scale-95">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110 active:scale-95">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110 active:scale-95">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-medium">
          <p>© 2025 Clique Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors active:scale-95 inline-flex">
              <Phone className="w-4 h-4" /> +1 (555) 000-0000
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors active:scale-95 inline-flex">
              <Mail className="w-4 h-4" /> hello@clique.tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}