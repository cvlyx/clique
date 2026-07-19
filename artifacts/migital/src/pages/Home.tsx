import { Link } from "wouter";
import { MoveRight, Twitter, Facebook, Linkedin, Instagram, Phone, Mail } from "lucide-react";

// Use our generated images
import heroBg from "@assets/generated_images/hero-woman.jpg";
import team1 from "@assets/generated_images/team-1.jpg";
import team2 from "@assets/generated_images/team-2.jpg";
import team3 from "@assets/generated_images/team-3.jpg";
import team4 from "@assets/generated_images/team-4.jpg";
import team5 from "@assets/generated_images/team-5.jpg";

function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C12 2 15 5 15 8C15 11 12 12 12 12C12 12 9 11 9 8C9 5 12 2 12 2Z" fill="currentColor"/>
      <path d="M12 22C12 22 9 19 9 16C9 13 12 12 12 12C12 12 15 13 15 16C15 19 12 22 12 22Z" fill="currentColor"/>
      <path d="M22 12C22 12 19 9 16 9C13 9 12 12 12 12C12 12 13 15 16 15C19 15 22 12 22 12Z" fill="currentColor"/>
      <path d="M2 12C2 12 5 15 8 15C11 15 12 12 12 12C12 12 11 9 8 9C5 9 2 12 2 12Z" fill="currentColor"/>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1 & 2: Navigation & Hero */}
      <section className="relative w-full bg-[#111111] pt-6 pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="relative w-full md:w-[55%] h-full">
            {/* Fade out to the left to merge with dark background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-10" />
            {/* Fade out to the bottom just in case */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10" />
            <img src={heroBg} alt="Professional digital marketing expert" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <nav className="flex items-center justify-between py-4 text-white">
            <div className="flex items-center gap-2">
              <Logo className="w-7 h-7 text-primary" />
              <span className="font-bold text-2xl tracking-tight">Migital</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-primary transition-colors">Directories</Link>
              <Link href="/" className="hover:text-primary transition-colors">Partnerships</Link>
              <Link href="/" className="hover:text-primary transition-colors">Promotions</Link>
              <Link href="/" className="hover:text-primary transition-colors">Our Team</Link>
              <Link href="/" className="hover:text-primary transition-colors">Careers</Link>
            </div>
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-primary transition-colors hidden sm:block">Assessors</Link>
              <button className="bg-white text-[#111111] px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors font-semibold">
                Start Now
              </button>
            </div>
          </nav>

          <div className="mt-28 mb-20 max-w-2xl">
            <h1 className="text-5xl md:text-[64px] leading-[1.1] font-[800] text-white mb-10 tracking-tight">
              Digital Marketing<br />Services
            </h1>
            <button className="bg-primary text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Towards Growth & Industry Directory
              <MoveRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: Services White Card */}
      <section className="relative z-20 container mx-auto px-6 max-w-7xl -mt-24 mb-24">
        <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] grid grid-cols-1 md:grid-cols-12 gap-10 border border-gray-100">
          
          {/* Left Column: Directories */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6">Directories</div>
            <ul className="space-y-4">
              {['Strategy', 'Content Creation', 'SEO', 'Design', 'Analytics', 'Email Marketing', 'Botenrcocucceng'].map((item) => (
                <li key={item} className="flex items-center text-[#111111] font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Center Column: Specialties */}
          <div className="md:col-span-5 md:px-8 md:border-l border-gray-100">
            <div className="text-xs uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Specialties
            </div>
            <h2 className="text-[28px] font-bold text-[#111111] mb-6 leading-tight">
              Social Media Management
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-sm pr-4">
              We build and manage your brand's social presence with strategic content that engages audiences, drives growth, and creates meaningful connections across all platforms.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Explore content
            </button>
          </div>

          {/* Right Column: Dark Card */}
          <div className="md:col-span-4 bg-[#111111] rounded-2xl p-8 flex flex-col justify-between text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-[26px] font-bold mb-4 leading-[1.2]">Let's grow your<br/>Brand Together!</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Partner with our experts to scale your business, optimize campaigns, and achieve measurable results.
              </p>
            </div>
            <button className="w-full bg-transparent border border-primary text-primary px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all relative z-10">
              Schedule a lesson
            </button>
            
            {/* Decorative element on dark card */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Team/Companies */}
      <section className="container mx-auto px-6 max-w-7xl py-10 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-[#111111] tracking-tight">Companies Together</h2>
            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
              500+ teams
            </span>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
              Our Partner Team <MoveRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { img: team1, title: 'Let it Companies Together!', desc: 'Strategic planning and management', tags: ['Teamlider', 'Team'] },
            { img: team2, title: 'Video Marketing quilber bank.', desc: 'Visual content production', tags: ['Teamlider', 'Team'] },
            { img: team3, title: 'Video Marketing aloldtinon', desc: 'Creative direction and media', tags: ['Teamlider', 'Team'] },
            { img: team4, title: 'Ad Camnity Bulling cucern stans.', desc: 'Community engagement', tags: ['Teamlider', 'Team'] },
            { img: team5, title: 'Comunity Buildg coelctting.', desc: 'Social media outreach', tags: ['Teamlider', 'Team'] }
          ].map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-gray-100 relative">
                <img src={member.img} alt={member.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <h3 className="font-bold text-[#111111] mb-2 leading-tight text-[15px]">{member.title}</h3>
              <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">{member.desc}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-gray-200">
                  <img src={member.img} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-md tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Footer */}
      <footer className="bg-[#111111] text-white pt-24 pb-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            <div className="md:col-span-4 pr-8">
              <div className="flex items-center gap-2 mb-6">
                <Logo className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl tracking-tight">Migital</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed pr-4">
                We help brands grow through strategic digital marketing, creating compelling stories and engaging experiences that convert.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold mb-6 tracking-wide">Analytics</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><Link href="/" className="hover:text-primary transition-colors">Vendor area</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Intranet</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Contact & Trooktrap</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold mb-6 tracking-wide">Email Marketing</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><Link href="/" className="hover:text-primary transition-colors">Technical preview</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">The assistant</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Social media</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 tracking-wide">Ad Campaigns</h4>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Reach your audience with precision targeting.
              </p>
              <div className="flex items-center gap-2.5">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-medium">
            <p>© 2024 Migital. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +1 (555) 000-0000
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> hello@migital.agency
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
