import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, TrendingUp } from 'lucide-react';
import { SERVICES, CASE_STUDIES, TESTIMONIALS } from '../constants';
import SmartAudit from '../components/SmartAudit';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Glass Background */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FAF6F0]">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-60">
          <div className="absolute top-[5%] right-[-5%] w-[600px] h-[600px] bg-[#657b88]/20 blur-[140px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#0c1e22]/30 blur-[150px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="glass-panel rounded-[3rem] p-12 lg:p-24 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-1000">
            {/* Inner Glass Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 blur-[80px] rounded-full"></div>
            
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-light text-white/90 text-sm font-semibold mb-8 border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span>Growth Partners for the 1%</span>
              </div>
              
              <h1 className="text-6xl lg:text-9xl font-extrabold text-white tracking-tight leading-[0.9] mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Scale Your <br />
                <span className="relative inline-block mt-4">
                  <span className="relative z-10 px-8 py-2">Empire</span>
                  <span className="absolute inset-0 bg-white/10 backdrop-blur-md -rotate-2 rounded-2xl -z-0 border border-white/10"></span>
                </span>.
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                We unite elite data analysis with sophisticated creative direction to build brands that don't just survive—they dominate.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-[#0c1e22] rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl flex items-center justify-center space-x-2">
                  <span>Scale Now</span>
                  <ArrowRight size={24} />
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto px-10 py-5 glass-light text-white border border-white/20 rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
                  <Play className="fill-current" size={20} />
                  <span>Our Portfolio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-[#FAF6F0] border-y border-[#0c1e22]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-[#657b88]/40 uppercase tracking-[0.4em] mb-8">Architects of Scale for</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale contrast-125">
            {['Shopify', 'Coinbase', 'Adobe', 'Stripe', 'Figma'].map(name => (
              <span key={name} className="text-2xl font-black text-[#0c1e22] tracking-tighter">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 bg-[#FAF6F0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-sm font-bold text-[#657b88] uppercase tracking-widest mb-3">Our Methodology</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#0c1e22]">Strategic Growth Pillars</h3>
            </div>
            <Link to="/services" className="text-[#657b88] font-bold flex items-center space-x-2 group">
              <span>Explore Ecosystem</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {SERVICES.map((s) => (
              <Link 
                key={s.id} 
                to={`/services/${s.id}`}
                className="group relative bg-[#FAF6F0]/60 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-xl shadow-[#0c1e22]/5 hover:shadow-[#657b88]/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="w-14 h-14 bg-[#657b88]/5 text-[#657b88] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#657b88] group-hover:text-[#FAF6F0] transition-all duration-300 relative z-10">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-[#0c1e22] mb-4 relative z-10">{s.title}</h4>
                <p className="text-[#0c1e22]/70 text-sm leading-relaxed mb-6 relative z-10">{s.description}</p>
                <div className="text-xs font-black text-[#657b88] uppercase tracking-widest flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SmartAudit />

      {/* Portfolio Highlight */}
      <section className="py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#657b88] uppercase tracking-widest mb-3">Case Studies</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#0c1e22] mb-6">Market Conquests.</h3>
            <p className="text-[#0c1e22]/60 max-w-2xl mx-auto">See how we deploy our strategic arsenal to drive exponential growth across diverse verticals.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study) => (
              <Link key={study.id} to={`/portfolio/${study.id}`} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-[4/3] bg-[#0c1e22]">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover mix-blend-multiply opacity-70 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e22]/90 via-[#0c1e22]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                    <p className="text-[#a8abb2] font-bold mb-2 uppercase tracking-[0.2em] text-xs">{study.industry}</p>
                    <h4 className="text-3xl font-bold text-white mb-4">{study.client}</h4>
                    <div className="text-[#FAF6F0] flex items-center space-x-2">
                      <span className="font-bold border-b border-[#FAF6F0]/30 hover:border-[#FAF6F0]">Deep Dive Report</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-8">
                  {study.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-black text-[#657b88]">{res.value}</div>
                      <div className="text-[10px] text-[#0c1e22]/40 font-bold uppercase tracking-widest">{res.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0c1e22] text-[#FAF6F0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#657b88] uppercase tracking-widest mb-4">Boardroom Feedback</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Elite Founders Trust DIPTO.</h3>
              <p className="text-[#FAF6F0]/70 text-lg leading-relaxed mb-10">
                We provide a strategic competitive advantage that translates directly to the bottom line through DIPTO-exclusive systems.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://picsum.photos/60/60?random=${i+30}`} className="w-14 h-14 rounded-full border-2 border-[#0c1e22] object-cover" alt="avatar" />
                  ))}
                </div>
                <div className="text-sm font-bold">Unrivaled Market ROI</div>
              </div>
            </div>
            <div className="space-y-6">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 relative group transition-all hover:bg-white/10">
                  <p className="text-xl italic text-[#FAF6F0]/90 mb-8 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <img src={t.image} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#657b88]/20" alt={t.author} />
                    <div>
                      <div className="font-bold text-[#FAF6F0] tracking-tight">{t.author}</div>
                      <div className="text-xs text-[#657b88] uppercase font-bold tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;