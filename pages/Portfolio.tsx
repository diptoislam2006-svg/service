import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-[#0c1e22] mb-8 tracking-tighter">
            Our <span className="gradient-text">Impact</span>.
          </h1>
          <p className="text-xl text-[#0c1e22]/60 max-w-2xl mx-auto font-medium">
            We don't just talk about growth—we manufacture it. Explore the proof behind the DIPTO methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {CASE_STUDIES.map((study) => (
            <Link 
              key={study.id} 
              to={`/portfolio/${study.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[4rem] mb-10 aspect-[4/3] bg-[#0c1e22]">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-70 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e22]/90 via-transparent to-transparent flex flex-col justify-end p-12 opacity-100 group-hover:opacity-0 transition-opacity">
                  <span className="text-[#657b88] font-black uppercase tracking-[0.3em] text-xs mb-4">{study.industry}</span>
                  <h2 className="text-3xl font-black text-white tracking-tight">{study.client}</h2>
                </div>
                <div className="absolute inset-0 bg-[#657b88]/90 flex flex-col justify-center items-center text-center p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">{study.title}</h3>
                  <div className="flex items-center space-x-3 text-white font-black text-xl">
                    <span>View Case Study</span>
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-8">
                {study.results.map((res, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-black text-[#0c1e22]">{res.value}</div>
                    <div className="text-[10px] text-[#0c1e22]/40 font-bold uppercase tracking-[0.2em]">{res.label}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;