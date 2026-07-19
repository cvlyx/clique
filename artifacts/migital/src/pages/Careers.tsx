import { motion } from "framer-motion";
import { Target, Users, TrendingUp, MapPin, Briefcase, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Careers() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#111111] pt-40 pb-32">
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block">
            We're Hiring
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Join Clique Technologies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Build the future of technology with a team that believes in innovation, collaboration, and growth.
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight">Why Join Us?</h2>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={item} className="text-center px-6">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Great Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                Work on impactful projects that shape industries and empower communities through digital transformation.
              </p>
            </motion.div>
            
            <motion.div variants={item} className="text-center px-6">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Collaborative Team</h3>
              <p className="text-gray-500 leading-relaxed">
                Surround yourself with passionate builders, thinkers, and engineers who support each other's success.
              </p>
            </motion.div>
            
            <motion.div variants={item} className="text-center px-6">
              <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-[#111111]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Growth Opportunities</h3>
              <p className="text-gray-500 leading-relaxed">
                Continuous learning is one of our core values. We invest in your skills and career advancement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] tracking-tight">Open Positions</h2>
          </div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="space-y-4">
            {[
              { title: "Senior Software Engineer", dept: "Engineering", type: "Full-time", desc: "Lead the development of scalable enterprise applications using modern web technologies." },
              { title: "AI/ML Engineer", dept: "Data Science", type: "Full-time", desc: "Design and implement predictive models and intelligent automation systems." },
              { title: "Frontend Developer", dept: "Engineering", type: "Full-time", desc: "Craft beautiful, responsive, and highly interactive user interfaces." },
              { title: "DevOps Engineer", dept: "Infrastructure", type: "Full-time", desc: "Manage our cloud infrastructure, CI/CD pipelines, and ensure system reliability." },
              { title: "Product Designer", dept: "Design", type: "Full-time", desc: "Design intuitive and aesthetically pleasing digital experiences for our products." }
            ].map((job, i) => (
              <motion.div key={i} variants={item} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.dept}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1"><MapPin className="w-3 h-3" /> Remote</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{job.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-2">{job.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{job.desc}</p>
                </div>
                <div className="shrink-0">
                  <button className="w-full md:w-auto bg-primary text-[#111111] px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity active:scale-95 whitespace-nowrap">
                    Apply Now &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-[#111111] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Don't see your role?</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                We're always looking for talented individuals to join our team. Send us your CV and we'll keep you in mind for future opportunities.
              </p>
              <a href="mailto:hello@clique.tech" className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors active:scale-95">
                <Mail className="w-5 h-5" /> Send your CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}