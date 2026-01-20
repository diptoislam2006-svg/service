import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { ArrowLeft, ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = CASE_STUDIES.find((s) => s.id === id);

  if (!study) return <Navigate to="/portfolio" />;

  return (
    <div className="pt-40 pb-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/portfolio" className="inline-flex items-center space-x-2 text-[#657b88] font-bold mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center">
          <div>
            <span className="inline-block py-2 px-5 bg-[#657b88]/10 text-[#657b88] rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">
              {study.industry} Breakthrough
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#0c1e22] mb-8 tracking-tighter leading-none">
              {study.client}<span className="text-[#657b88]">.</span>
            </h1>
            <p className="text-2xl text-[#0c1e22]/60 font-medium leading-relaxed mb-12">
              {study.title}
            </p>
            <div className="grid grid-cols-3 gap-8 p-10 bg-white border border-black/5 rounded-[3rem] shadow-xl">
              {study.results.map((res, idx) => (
                <div key={idx}>
                  <div className="text-3xl md:text-4xl font-black text-[#657b88] mb-1">{res.value}</div>
                  <div className="text-[10px] text-[#0c1e22]/40 font-black uppercase tracking-widest">{res.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[4rem] overflow-hidden shadow-3xl shadow-[#0c1e22]/20">
            <img src={study.image} alt={study.client} className="w-full h-full object-cover aspect-[4/5]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-12 rounded-[3.5rem] border border-black/5 shadow-lg">
            <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-[#0c1e22]" />
            </div>
            <h3 className="text-2xl font-black text-[#0c1e22] mb-6 tracking-tight">The Problem</h3>
            <p className="text-[#0c1e22]/60 text-lg leading-relaxed font-medium">
              {study.problem}
            </p>
          </div>
          <div className="bg-[#0c1e22] p-12 rounded-[3.5rem] text-white shadow-2xl">
            <div className="w-14 h-14 bg-[#657b88]/20 rounded-2xl flex items-center justify-center mb-8">
              <BarChart3 className="text-[#657b88]" />
            </div>
            <h3 className="text-2xl font-black text-white mb-6 tracking-tight">The Solution</h3>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              {study.solution}
            </p>
          </div>
          <div className="bg-white p-12 rounded-[3.5rem] border border-black/5 shadow-lg">
            <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center mb-8">
              <TrendingUp className="text-[#0c1e22]" />
            </div>
            <h3 className="text-2xl font-black text-[#0c1e22] mb-6 tracking-tight">The Result</h3>
            <p className="text-[#0c1e22]/60 text-lg leading-relaxed font-medium">
              Exponential growth achieved through data-backed strategies and high-velocity execution models.
            </p>
          </div>
        </div>

        <div className="mt-24 p-16 bg-[#0c1e22] rounded-[4rem] text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#657b88]/20 to-transparent pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Achieve Similar Success?</h2>
          <Link to="/contact" className="inline-flex items-center space-x-4 px-12 py-5 bg-[#657b88] text-white rounded-full font-black text-xl hover:shadow-2xl hover:scale-105 transition-all">
            <span>Book Your Audit</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;