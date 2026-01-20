import React, { useState } from 'react';
import { Sparkles, Loader2, Globe, Target } from 'lucide-react';
import { generateMarketingAudit } from '../services/geminiService';

const SmartAudit: React.FC = () => {
  const [url, setUrl] = useState('');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !goal) return;
    setLoading(true);
    const audit = await generateMarketingAudit(url, goal);
    setResult(audit);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c1e22] rounded-[3.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#657b88]/20 blur-[100px] -z-10"></div>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#657b88]/10 border border-[#657b88]/20 text-[#657b88] text-[10px] font-black uppercase tracking-[0.25em] mb-6">
              <Sparkles size={12} />
              <span>DIPTO Intelligence Hub</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#FAF6F0] mb-6 tracking-tighter">Strategic Audit Engine</h2>
            <p className="text-[#FAF6F0]/50 max-w-xl mx-auto font-medium">
              Plug in your digital footprint. Our DIPTO AI will synthesize a custom offensive marketing roadmap in under 60 seconds.
            </p>
          </div>

          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#FAF6F0]/40 ml-1 text-center">Digital Entity (URL)</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#657b88]" size={18} />
                    <input 
                      required
                      type="url" 
                      placeholder="https://yourbrand.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-[#FAF6F0] rounded-2xl py-5 pl-12 pr-4 focus:ring-2 focus:ring-[#657b88] outline-none transition-all placeholder:text-[#FAF6F0]/10 font-semibold"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#FAF6F0]/40 ml-1">Key Objective</label>
                  <div className="relative">
                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-[#657b88]" size={18} />
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. 10x ROI on paid search"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-[#FAF6F0] rounded-2xl py-5 pl-12 pr-4 focus:ring-2 focus:ring-[#657b88] outline-none transition-all placeholder:text-[#FAF6F0]/10 font-semibold"
                    />
                  </div>
                </div>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 bg-[#657b88] text-[#FAF6F0] rounded-2xl font-black text-lg transition-all flex items-center justify-center space-x-3 disabled:opacity-50 hover:bg-white hover:text-[#0c1e22]"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>Analyzing Ecosystem...</span>
                  </>
                ) : (
                  <>
                    <span>Generate DIPTO Roadmap</span>
                    <Sparkles size={20} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="animate-in fade-in zoom-in duration-500">
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 max-h-[500px] overflow-y-auto custom-scrollbar mb-10">
                <div className="prose prose-invert prose-stone max-w-none">
                  <div className="whitespace-pre-wrap text-[#FAF6F0]/80 font-medium leading-relaxed tracking-wide text-lg">
                    {result}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => setResult(null)}
                  className="flex-1 py-4 bg-white/10 text-[#FAF6F0] rounded-2xl font-bold hover:bg-white/15 transition-colors border border-white/10"
                >
                  New Analysis
                </button>
                <button 
                  onClick={() => window.location.href = '#/contact'}
                  className="flex-1 py-4 bg-[#657b88] text-[#FAF6F0] rounded-2xl font-black transition-all hover:shadow-2xl"
                >
                  Consult an Architect
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartAudit;