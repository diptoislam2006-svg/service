import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowLeft, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="pt-40 pb-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/services" className="inline-flex items-center space-x-2 text-[#657b88] font-bold mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span>Back to All Services</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div>
              <div className="w-20 h-20 bg-[#657b88] text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-[#657b88]/30">
                {service.icon}
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-[#0c1e22] mb-6 tracking-tighter leading-none">
                {service.title}<span className="text-[#657b88]">.</span>
              </h1>
              <p className="text-2xl text-[#0c1e22]/60 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-black/5 shadow-xl">
              <h3 className="text-2xl font-black text-[#0c1e22] mb-8 tracking-tight">Key Outcomes</h3>
              <ul className="space-y-6">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <div className="p-2 bg-[#657b88]/10 rounded-xl">
                      <CheckCircle2 size={24} className="text-[#657b88]" />
                    </div>
                    <span className="text-lg font-bold text-[#0c1e22]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-[#0c1e22] p-12 rounded-[4rem] text-[#FAF6F0] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Zap size={150} />
              </div>
              <h2 className="text-3xl font-black mb-10 tracking-tighter">The DIPTO Process</h2>
              <div className="space-y-10">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-6 relative">
                    {idx < service.process.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-10 bg-white/10"></div>
                    )}
                    <div className="w-12 h-12 rounded-2xl bg-[#657b88] text-white flex items-center justify-center text-xl font-black flex-shrink-0 z-10">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2 tracking-tight">{step}</h4>
                      <p className="text-[#FAF6F0]/50 font-medium">Strategic execution at every phase to ensure maximum ROI and project success.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#a8abb2] p-12 rounded-[4rem] flex flex-col items-center text-center">
              <h2 className="text-3xl font-black text-black mb-6 tracking-tighter">Ready to Scale {service.title}?</h2>
              <p className="text-black/70 text-lg font-bold mb-10">Join our waitlist for Q4 growth strategies.</p>
              <Link 
                to="/contact" 
                className="w-full py-5 bg-[#0c1e22] text-white rounded-3xl font-black text-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-3"
              >
                <span>Get a Quote</span>
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;