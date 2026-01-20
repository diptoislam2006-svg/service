import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h1 className="text-5xl md:text-8xl font-black text-[#0c1e22] mb-8 leading-none tracking-tighter">
              The Growth <br /><span className="gradient-text">Architects</span>.
            </h1>
            <p className="text-2xl text-[#0c1e22]/60 font-medium leading-relaxed mb-12">
              DIPTO was founded on a single premise: digital marketing should be a science, not a gamble. We build high-velocity scale engines for ambitious founders.
            </p>
            <div className="flex space-x-12">
              <div>
                <div className="text-5xl font-black text-[#657b88] mb-1">08+</div>
                <div className="text-[10px] text-[#0c1e22]/40 font-black uppercase tracking-widest">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-black text-[#657b88] mb-1">200+</div>
                <div className="text-[10px] text-[#0c1e22]/40 font-black uppercase tracking-widest">Brands Scaled</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-black/5 mt-12">
              <div className="w-12 h-12 bg-[#657b88]/10 text-[#657b88] rounded-2xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">Precision</h3>
              <p className="text-[#0c1e22]/60 font-medium text-sm">Data-backed strategies that eliminate guesswork.</p>
            </div>
            <div className="bg-[#0c1e22] p-10 rounded-[3rem] shadow-xl text-white">
              <div className="w-12 h-12 bg-[#657b88]/20 text-[#657b88] rounded-2xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight text-white">Velocity</h3>
              <p className="text-white/40 font-medium text-sm">Rapid deployment models to capture market share fast.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-black/5">
              <div className="w-12 h-12 bg-[#657b88]/10 text-[#657b88] rounded-2xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">Partnership</h3>
              <p className="text-[#0c1e22]/60 font-medium text-sm">We act as an extension of your executive board.</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-black/5 mt-12">
              <div className="w-12 h-12 bg-[#657b88]/10 text-[#657b88] rounded-2xl flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">Excellence</h3>
              <p className="text-[#0c1e22]/60 font-medium text-sm">Elite results for those who demand the absolute best.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0c1e22] rounded-[4rem] p-20 text-center text-white relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Our Core Mission</h2>
          <p className="text-xl md:text-3xl text-white/70 max-w-4xl mx-auto font-medium italic leading-relaxed">
            "To engineer the most sophisticated growth systems on the planet, enabling brands to reach their maximum potential through mathematical precision and elite creative execution."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;