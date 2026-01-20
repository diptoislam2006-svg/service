import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Strategy First",
      price: "$4,500",
      period: "/month",
      desc: "Perfect for brands looking for elite guidance and roadmap development.",
      features: ["Full Audit", "SEO Strategy", "1 Content Piece/Week", "Monthly Reports", "Dedicated Architect"],
      accent: false
    },
    {
      name: "Performance Scale",
      price: "$8,000",
      period: "/month",
      desc: "Aggressive growth for brands ready to dominate their market vertical.",
      features: ["PPC Management", "3 Content Pieces/Week", "Advanced SEO", "Creative Production", "Weekly Sync Calls"],
      accent: true
    },
    {
      name: "Empire Deployment",
      price: "Custom",
      period: "",
      desc: "Omnichannel market penetration for established global enterprises.",
      features: ["Full Brand Revamp", "Unlimited Content", "Influencer Strategy", "TV & Digital OOH", "24/7 Priority Support"],
      accent: false
    }
  ];

  return (
    <div className="pt-40 pb-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-[#0c1e22] mb-8 tracking-tighter leading-none">
            Investment <br /><span className="gradient-text">Models</span>.
          </h1>
          <p className="text-xl text-[#0c1e22]/60 max-w-2xl mx-auto font-medium">
            Transparent pricing built for scalable growth. No hidden fees, just raw ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`p-12 rounded-[4rem] border transition-all duration-500 flex flex-col ${plan.accent ? 'bg-[#0c1e22] border-transparent shadow-2xl scale-105 z-10' : 'bg-white border-black/5'}`}
            >
              <h3 className={`text-2xl font-black mb-4 tracking-tight ${plan.accent ? 'text-[#657b88]' : 'text-[#0c1e22]'}`}>{plan.name}</h3>
              <div className="mb-8 flex items-baseline">
                <span className={`text-5xl font-black tracking-tighter ${plan.accent ? 'text-white' : 'text-[#0c1e22]'}`}>{plan.price}</span>
                <span className={`text-lg font-bold ml-2 ${plan.accent ? 'text-white/40' : 'text-[#0c1e22]/40'}`}>{plan.period}</span>
              </div>
              <p className={`mb-10 font-medium ${plan.accent ? 'text-white/60' : 'text-[#0c1e22]/60'}`}>
                {plan.desc}
              </p>
              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center space-x-3">
                    <div className={`p-1 rounded-full ${plan.accent ? 'bg-[#657b88]/20' : 'bg-black/5'}`}>
                      <Check size={16} className={plan.accent ? 'text-[#657b88]' : 'text-black'} />
                    </div>
                    <span className={`font-bold ${plan.accent ? 'text-white/80' : 'text-[#0c1e22]/80'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact" 
                className={`w-full py-5 rounded-3xl font-black text-lg transition-all flex items-center justify-center space-x-3 ${plan.accent ? 'bg-[#657b88] text-white hover:shadow-xl shadow-[#657b88]/30' : 'bg-black text-white hover:bg-[#657b88]'}`}
              >
                <span>Select Plan</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;