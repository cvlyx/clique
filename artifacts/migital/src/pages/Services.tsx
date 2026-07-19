import { motion } from "framer-motion";
import { MonitorSmartphone, BrainCircuit, Globe, Cloud, ShieldCheck, Network, Wrench, MoveRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

  const servicesData = [
    {
      title: "Software Development",
      icon: MonitorSmartphone,
      desc: "We build custom, scalable software tailored to your exact business needs.",
      bullets: ["Web applications", "Mobile apps (Android/iOS)", "Enterprise & SaaS platforms", "CRM & ERP systems", "API integrations"]
    },
    {
      title: "AI & Data Science",
      icon: BrainCircuit,
      desc: "Intelligent solutions that help organizations make better decisions through data.",
      bullets: ["Machine Learning models", "Data analytics & visualization", "BI dashboards", "Predictive analytics", "AI automation"]
    },
    {
      title: "Web & Digital Solutions",
      icon: Globe,
      desc: "Establish and grow your digital presence with high-performance web solutions.",
      bullets: ["Website design & development", "E-commerce platforms", "Web hosting", "SEO optimization", "Digital transformation"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      desc: "Modern cloud-based infrastructure to secure and scale your applications.",
      bullets: ["Cloud infrastructure & migration", "Server management", "Deployment automation", "Backup & recovery"]
    },
    {
      title: "Cybersecurity",
      icon: ShieldCheck,
      desc: "Protect your systems, networks, and data from advanced digital threats.",
      bullets: ["Security assessments", "Vulnerability testing", "Data protection", "Network security", "Backup strategies"]
    },
    {
      title: "Networking & IT Infrastructure",
      icon: Network,
      desc: "Reliable computer networking and IT setups for modern business operations.",
      bullets: ["Computer networking", "Office network setup", "Wi-Fi solutions", "Router & server configuration", "IT support"]
    },
    {
      title: "Computer Repair & Tech Support",
      icon: Wrench,
      desc: "Hardware maintenance and software troubleshooting to keep you running.",
      bullets: ["Hardware repairs & upgrades", "Laptop maintenance", "OS installation", "Software support"]
    }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#111111] pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#111111]/90 to-[#111111]" />
        
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to build, scale, and secure your digital future.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((svc, i) => (
              <motion.div key={i} variants={item} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all">
                  <svc.icon className="w-7 h-7 text-[#111111]" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#111111] mb-4">{svc.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {svc.desc}
                </p>
                
                <ul className="space-y-3 mb-10">
                  {svc.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-center text-sm font-medium text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <button className="text-sm font-bold text-[#111111] hover:text-primary transition-colors flex items-center gap-2 group/btn">
                  Learn More <MoveRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}