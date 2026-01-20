import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-[#0c1e22] mb-8 tracking-tighter">
            Our <span className="gradient-text">Specialties</span>.
          </h1>
          <p className="text-xl text-[#0c1e22]/60 max-w-2xl mx-auto font-medium">
            Strategic growth requires a multi-faceted approach. We deploy elite solutions across the entire digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((s) => (
            <Link 
              key={s.id} 
              to={`/services/${s.id}`}
              className="group bg-white p-10 rounded-[3rem] border border-black/5 hover:shadow-2xl hover:shadow-[#657b88]/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-[#657b88]/5 text-[#657b88] rounded-2xl flex items-center justify-center group-hover:bg-[#657b88] group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <div className="p-3 rounded-full bg-black/5 group-hover:bg-[#657b88] group-hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </div>
              </div>
              <h2 className="text-3xl font-black text-[#0c1e22] mb-4 tracking-tight">{s.title}</h2>
              <p className="text-[#0c1e22]/60 text-lg leading-relaxed mb-8">
                {s.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {s.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm font-bold text-[#0c1e22]/80">
                    <CheckCircle2 size={18} className="text-[#657b88]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;