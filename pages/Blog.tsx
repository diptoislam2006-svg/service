import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="pt-40 pb-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-[#0c1e22] mb-8 tracking-tighter">
            Nexus <span className="gradient-text">Insights</span>.
          </h1>
          <p className="text-xl text-[#0c1e22]/60 max-w-2xl mx-auto font-medium">
            Stay ahead of the market with elite growth analysis and performance marketing trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group bg-white rounded-[4rem] overflow-hidden border border-black/5 shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="py-1 px-4 bg-[#657b88]/10 text-[#657b88] rounded-full text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                  <div className="flex items-center space-x-1 text-[10px] text-[#0c1e22]/40 font-black uppercase tracking-widest">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-black text-[#0c1e22] mb-6 tracking-tight leading-tight group-hover:text-[#657b88] transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg text-[#0c1e22]/60 mb-10 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-10 border-t border-black/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#0c1e22] flex items-center justify-center text-white">
                      <User size={20} />
                    </div>
                    <span className="text-sm font-bold text-[#0c1e22]">{post.author}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-[#657b88] font-black uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;