import { motion } from "framer-motion";
import { Sparkles, Layers, Search, Briefcase, Cloud, Quote, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Solutions() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#111111] pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-primary/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Solutions We're Building
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Beyond services — we create our own products to shape the future.
          </motion.p>
        </div>
      </section>

      {/* Future Focus Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="bg-primary/15 text-[#111111] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
              Tomorrow's Tech
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight">Future Focus</h2>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {["FinTech", "HealthTech", "EdTech", "Smart Agriculture", "IoT", "Blockchain", "Robotics", "Advanced AI"].map((tech, i) => (
              <motion.div key={i} variants={item} className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">Coming Soon</span>
                </div>
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 mt-2 group-hover:bg-primary/10 transition-colors">
                  <Sparkles className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-[#111111]">{tech}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight">Our Products</h2>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { title: "Business Management Platform", icon: Briefcase, status: "In Development", desc: "A comprehensive suite to manage operations, HR, and finances in one unified dashboard." },
              { title: "Digital Marketplace", icon: Layers, status: "Planning", desc: "Connecting buyers and sellers through a secure, high-performance commerce platform." },
              { title: "AI-Powered Application", icon: Search, status: "Research", desc: "Next-generation tools utilizing machine learning to automate complex daily workflows." },
              { title: "Industry-Specific Software", icon: Rocket, status: "Ideation", desc: "Tailored software solutions solving unique challenges in niche African markets." },
              { title: "Cloud-Based Platform", icon: Cloud, status: "In Development", desc: "Scalable infrastructure services designed for growing enterprises." }
            ].map((prod, i) => (
              <motion.div key={i} variants={item} className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm ${i > 2 ? 'lg:col-span-1 lg:max-w-md mx-auto' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <prod.icon className="w-6 h-6 text-[#111111]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">{prod.status}</span>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{prod.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{prod.desc}</p>
                <button className="text-sm font-semibold text-primary hover:text-[#111111] transition-colors">Notify me when ready &rarr;</button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={item} className="bg-white/5 border border-white/10 rounded-3xl p-10 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/10" />
              <h3 className="text-2xl font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                To become a leading technology company in Africa and beyond by creating world-class software solutions, advancing innovation, and using technology to transform industries and communities.
              </p>
            </motion.div>
            
            <motion.div variants={item} className="bg-white/5 border border-white/10 rounded-3xl p-10 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/10" />
              <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                To build reliable, secure, and scalable technology solutions that help businesses and individuals achieve more through innovation, software development, and digital transformation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}