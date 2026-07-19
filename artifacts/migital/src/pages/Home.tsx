import { Link } from "wouter";
import { MoveRight, Twitter, Facebook, Linkedin, Instagram, Phone, Mail, Lightbulb, Star, Users, Shield, BookOpen, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Images
import heroBg from "@assets/generated_images/hero-woman.jpg";
import team1 from "@assets/generated_images/team-1.jpg";
import team2 from "@assets/generated_images/team-2.jpg";
import team3 from "@assets/generated_images/team-3.jpg";
import team4 from "@assets/generated_images/team-4.jpg";
import team5 from "@assets/generated_images/team-5.jpg";
import cliqueLogo from "@assets/clique_logo_transparent_1784458117046.png";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const { scrollY } = useScroll();

  // Parallax: image moves at 0.3x scroll speed
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  };
  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };
  const heroHeading = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const heroWord = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };
  const servicesContainer = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const serviceCol = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };
  const teamContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const teamCard = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white"
    >
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#111111] pt-6 pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0 flex justify-end">
          <motion.div style={{ y: heroY }} className="relative w-full md:w-[55%] h-full origin-top">
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10" />
            <img src={heroBg} alt="Clique Technologies professional" className="w-full h-full object-cover" />
            <motion.div
              className="absolute inset-0 z-20 bg-gradient-to-tr from-primary/30 to-transparent"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* ─── NAV ─── */}
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
            {/* Logo */}
            <motion.div
              variants={navItem}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <img
                src={cliqueLogo}
                alt="Clique Technologies"
                className="h-12 w-auto"
                style={{ mixBlendMode: "screen" }}
              />
            </motion.div>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {[
                { label: "Services", href: "/services" },
                { label: "Solutions", href: "/solutions" },
                { label: "About Us", href: "/#values" },
                { label: "Our Team", href: "/" },
                { label: "Careers", href: "/careers" }
              ].map((item) => (
                <motion.div key={item.label} variants={navItem} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Link href={item.href} className="hover:text-primary transition-colors active:scale-95 inline-block">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-6 text-sm font-medium">
              <motion.div variants={navItem} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="hidden sm:block">
                <Link href="/#contact" className="hover:text-primary transition-colors active:scale-95 inline-block">
                  Contact
                </Link>
              </motion.div>
              <motion.div variants={navItem}>
                <Link
                  href="/services"
                  className="relative overflow-hidden bg-primary text-[#111111] px-6 py-2.5 rounded-full font-semibold active:scale-95 group hover:opacity-90 transition-opacity inline-block"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] skew-x-[-20deg] group-hover:animate-shimmer" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* ─── HERO CONTENT ─── */}
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="mt-32 mb-20 max-w-2xl">
            <motion.h1
              variants={heroHeading}
              initial="hidden"
              animate="show"
              className="text-5xl md:text-[64px] leading-[1.1] font-[800] text-white mb-10 tracking-tight"
            >
              <div className="overflow-hidden">
                <motion.span variants={heroWord} className="block">
                  Innovative
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={heroWord} className="block">
                  Technology
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={heroWord} className="block">
                  Solutions
                </motion.span>
              </div>
            </motion.h1>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-primary text-[#111111] px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 active:scale-95 group"
            >
              Explore Our Services
              <MoveRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* ─── SERVICES CARD ───────────────────────────────────────────── */}
      <section className="relative z-20 container mx-auto px-6 max-w-7xl -mt-24 mb-24">
        <motion.div
          variants={servicesContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] grid grid-cols-1 md:grid-cols-12 gap-10 border border-gray-100"
        >
          {/* Left — Services list */}
          <motion.div variants={serviceCol} className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6">Services</div>
            <ul className="space-y-4">
              {[
                "Software Development",
                "AI & Data Science",
                "Web & Digital",
                "Cloud & DevOps",
                "Cybersecurity",
                "Networking & IT",
                "Tech Support",
              ].map((item) => (
                <li key={item} className="flex items-center text-[#111111] font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Center — Specialty spotlight */}
          <motion.div variants={serviceCol} className="md:col-span-5 md:px-8 md:border-l border-gray-100">
            <div className="text-xs uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Specialties
            </div>
            <h2 className="text-[28px] font-bold text-[#111111] mb-6 leading-tight">
              Software Development
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-sm pr-4">
              We build custom, scalable software tailored to your exact business needs — from web and mobile applications to enterprise platforms, SaaS products, CRM systems, and API integrations that power growth.
            </p>
            <button className="bg-primary text-[#111111] px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 active:scale-95 group">
              Explore Solutions
              <MoveRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right — Dark CTA card */}
          <motion.div
            variants={serviceCol}
            className="md:col-span-4 bg-[#111111] rounded-2xl p-8 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group/darkcard"
          >
            <div className="relative z-10">
              <h3 className="text-[26px] font-bold mb-4 leading-[1.2]">
                Let's Build the Future Together!
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Partner with Clique Technologies to turn your ideas into reliable, scalable, and impactful technology that solves real-world challenges.
              </p>
            </div>
            <button className="w-full bg-transparent border border-primary text-primary px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-[#111111] transition-all relative z-10 inline-flex items-center justify-center gap-2 group/btn active:scale-95">
              Start a Project
              <MoveRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-primary rounded-full blur-3xl pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SOLUTIONS SHOWCASE ──────────────────────────────────────── */}
      <section className="container mx-auto px-6 max-w-7xl py-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-6"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-[#111111] tracking-tight">Our Expert Team</h2>
            <span className="bg-primary/15 text-[#111111] text-xs font-bold px-3 py-1 rounded-full">
              7 Services
            </span>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors flex items-center gap-1 group active:scale-95 inline-flex"
            >
              Meet the Team <MoveRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={teamContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6"
        >
          {[
            {
              img: team1,
              title: "Custom Software Engineering",
              desc: "Scalable web, mobile & desktop apps",
              tags: ["Dev", "Team"],
            },
            {
              img: team2,
              title: "AI & Machine Learning",
              desc: "Intelligent systems and data analytics",
              tags: ["AI", "Data"],
            },
            {
              img: team3,
              title: "Cloud & DevOps",
              desc: "Modern infrastructure and deployment",
              tags: ["Cloud", "DevOps"],
            },
            {
              img: team4,
              title: "Cybersecurity Solutions",
              desc: "Protecting systems and sensitive data",
              tags: ["Security", "IT"],
            },
            {
              img: team5,
              title: "Digital Transformation",
              desc: "Modernizing businesses through tech",
              tags: ["Strategy", "Tech"],
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              variants={teamCard}
              className="group cursor-pointer hover:-translate-y-[6px] transition-all duration-300 rounded-2xl hover:shadow-xl p-2 -m-2 bg-transparent hover:bg-white"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-gray-100 relative">
                <img
                  src={member.img}
                  alt={member.title}
                  className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <h3 className="font-bold text-[#111111] group-hover:text-primary transition-colors duration-300 mb-2 leading-tight text-[15px]">
                {member.title}
              </h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">{member.desc}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-gray-200 group-hover:rotate-180 transition-transform duration-300 ease-out">
                  <img src={member.img} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-md tracking-wide uppercase group-hover:bg-primary/15 group-hover:text-[#111111] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── OUR VALUES ─────────────────────────────────────────────── */}
      <section id="values" className="container mx-auto px-6 max-w-7xl py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="bg-primary/15 text-[#111111] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight mb-4">
            Our Values
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            At Clique, innovation, collaboration, and quality are the foundation of everything we build.
          </p>
        </motion.div>

        <motion.div
          variants={teamContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Innovation",
              desc: "We continuously explore new ideas and technologies to create better solutions.",
              icon: Lightbulb
            },
            {
              title: "Excellence",
              desc: "We are committed to delivering high-quality products and services.",
              icon: Star
            },
            {
              title: "Collaboration",
              desc: "We believe great technology is built through teamwork.",
              icon: Users
            },
            {
              title: "Integrity",
              desc: "We operate with transparency, responsibility, and trust.",
              icon: Shield
            },
            {
              title: "Continuous Learning",
              desc: "We embrace growth and adapt to the rapidly changing technology landscape.",
              icon: BookOpen
            }
          ].map((val, i) => (
            <motion.div
              key={i}
              variants={teamCard}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mb-6">
                <val.icon className="w-6 h-6 text-[#111111]" />
              </div>
              <h3 className="font-bold text-[#111111] text-lg mb-3">{val.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── CONTACT US ─────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#111111] py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Col */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <span className="bg-primary/15 text-primary text-xs font-bold px-3 py-1 rounded-full mb-6 inline-block">
                Get In Touch
              </span>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Build Something Great?
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                Tell us about your project. Our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">hello@clique.tech</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">+1 (555) 000-0000</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Available Worldwide · Remote-First</span>
                </div>
              </div>
            </motion.div>

            {/* Right Col / Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-2xl">
                {contactSuccess ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MoveRight className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#111111] mb-4">Thank you!</h3>
                    <p className="text-gray-500">We'll be in touch with you shortly.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSuccess(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#111111]">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 text-[#111111] bg-gray-50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#111111]">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 text-[#111111] bg-gray-50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#111111]">Service Needed</label>
                      <select
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 text-[#111111] bg-gray-50 appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="software">Software Development</option>
                        <option value="ai">AI & Data Science</option>
                        <option value="web">Web & Digital</option>
                        <option value="cloud">Cloud & DevOps</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="networking">Networking & IT</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#111111]">Message</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 text-[#111111] bg-gray-50 resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-[#111111] px-6 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 active:scale-95"
                    >
                      Send Message <MoveRight className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-[#111111] text-white pt-24 pb-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

            {/* Brand */}
            <div className="md:col-span-4 pr-8">
              <div className="mb-6 hover:scale-105 transition-transform origin-left cursor-pointer w-fit">
                <img
                  src={cliqueLogo}
                  alt="Clique Technologies"
                  className="h-10 w-auto"
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
    </motion.main>
  );
}
