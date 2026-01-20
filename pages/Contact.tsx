import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Rocket, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'SEO Elite Strategy',
    budget: '$15k - $50k',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 bg-[#FAF6F0]">
        <div className="max-w-md w-full bg-[#FAF6F0] rounded-[3.5rem] p-16 text-center shadow-2xl shadow-[#0c1e22]/10 border border-[#0c1e22]/5 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-[#657b88]/10 text-[#657b88] rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-4xl font-black text-[#0c1e22] mb-6 tracking-tighter">Inquiry Logged.</h2>
          <p className="text-[#0c1e22]/60 mb-10 leading-relaxed font-medium">Data received, {formData.name.split(' ')[0]}. A principal partner will initiate communication via secure channel shortly.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full py-5 bg-[#0c1e22] text-[#FAF6F0] rounded-2xl font-black text-lg btn-gradient"
          >
            Return to Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <div className="space-y-16">
            <div>
              <h1 className="text-6xl md:text-8xl font-black text-[#0c1e22] mb-8 leading-[1] tracking-tighter">
                Scale Your <br />
                <span className="relative inline-block mt-4">
                  <span className="relative z-10 px-8 py-2">Empire</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#657b88] to-[#0c1e22] opacity-80 -rotate-2 rounded-2xl -z-0"></span>
                </span>.
              </h1>
              <p className="text-xl text-[#0c1e22]/60 max-w-md font-medium leading-relaxed">
                We accept only 4 new partners per quarter to maintain extreme focus. DIPTO requires high-level details for prioritization.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white shadow-lg text-[#657b88] rounded-2xl border border-black/5">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-black text-[#0c1e22] text-lg uppercase tracking-widest text-[10px] mb-1">Secure Mail</h4>
                  <p className="text-[#657b88] font-bold text-lg">concierge@dipto-elite.io</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white shadow-lg text-[#657b88] rounded-2xl border border-black/5">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-[#0c1e22] text-lg uppercase tracking-widest text-[10px] mb-1">Direct Line</h4>
                  <p className="text-[#657b88] font-bold text-lg">+1 (888) DIPTO-精英</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white shadow-lg text-[#657b88] rounded-2xl border border-black/5">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-[#0c1e22] text-lg uppercase tracking-widest text-[10px] mb-1">HQ Address</h4>
                  <p className="text-[#657b88] font-bold text-lg">DIPTO Heights, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0c1e22] rounded-[4rem] p-12 text-[#FAF6F0] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Rocket size={150} />
              </div>
              <h4 className="text-3xl font-black mb-10 tracking-tighter">Onboarding Protocol</h4>
              <ul className="space-y-8">
                <li className="flex items-center space-x-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#657b88] text-white flex items-center justify-center text-sm font-black">1</div>
                  <span className="text-white font-bold text-lg tracking-wide">Strategic Pre-Qual Analysis</span>
                </li>
                <li className="flex items-center space-x-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#657b88] text-white flex items-center justify-center text-sm font-black">2</div>
                  <span className="text-white font-bold text-lg tracking-wide">Principal Partner Consultation</span>
                </li>
                <li className="flex items-center space-x-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#657b88] text-white flex items-center justify-center text-sm font-black">3</div>
                  <span className="text-white font-bold text-lg tracking-wide">Deployment & Market Penetration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-[#0c1e22]/10 border border-black/5">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0c1e22]/40 ml-2">Lead Principal</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Julian Thorne"
                    className="w-full bg-[#FAF6F0] border-b-2 border-[#657b88]/20 py-5 outline-none focus:border-[#657b88] transition-all font-semibold text-xl"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0c1e22]/40 ml-2">Executive Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@organization.com"
                    className="w-full bg-[#FAF6F0] border-b-2 border-[#657b88]/20 py-5 outline-none focus:border-[#657b88] transition-all font-semibold text-xl"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0c1e22]/40 ml-2">Organization</label>
                  <input 
                    type="text" 
                    placeholder="Company Name"
                    className="w-full bg-[#FAF6F0] border-b-2 border-[#657b88]/20 py-5 outline-none focus:border-[#657b88] transition-all font-semibold text-xl"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0c1e22]/40 ml-2">Strategic Interest</label>
                  <select 
                    className="w-full bg-[#FAF6F0] border-b-2 border-[#657b88]/20 py-5 outline-none focus:border-[#657b88] transition-all appearance-none font-semibold text-xl cursor-pointer"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>SEO Elite Strategy</option>
                    <option>Performance Scale (Ads)</option>
                    <option>Omnichannel Growth Program</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0c1e22]/40 ml-2">Capital Allocation</label>
                <div className="grid grid-cols-2 gap-4">
                   {['$15k - $50k', '$50k - $150k', '$150k - $500k', '$500k+'].map((budget) => (
                     <button
                        key={budget}
                        type="button"
                        onClick={() => setFormData({...formData, budget})}
                        className={`py-4 rounded-2xl font-black text-sm border-2 transition-all ${formData.budget === budget ? 'bg-[#657b88] border-[#657b88] text-white shadow-xl shadow-[#657b88]/30' : 'bg-[#FAF6F0] border-[#0c1e22]/5 text-[#0c1e22]/60 hover:border-[#657b88]/40'}`}
                     >
                       {budget}
                     </button>
                   ))}
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-7 bg-[#0c1e22] text-[#FAF6F0] rounded-[2.5rem] font-black text-2xl btn-gradient shadow-2xl flex items-center justify-center space-x-6 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>Transmitting Data...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Strategic Inquiry</span>
                    <ArrowRight size={28} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;