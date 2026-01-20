
import React from 'react';
import { 
  Rocket, Search, Share2, MousePointer2, 
  Palette, Globe, Mail, Zap, 
  BarChart3, Target, Award, Users 
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'seo',
    title: 'SEO Strategy',
    description: 'Dominate search results and drive organic traffic that converts into revenue.',
    icon: <Search className="w-6 h-6" />,
    benefits: ['Increase organic traffic', 'Better search visibility', 'Higher keyword rankings'],
    process: ['Audit', 'Keyword Research', 'On-Page Optimization', 'Backlink Building']
  },
  {
    id: 'ppc',
    title: 'Performance Ads',
    description: 'High-ROI paid search and social campaigns that scale your business fast.',
    icon: <MousePointer2 className="w-6 h-6" />,
    benefits: ['Immediate traffic', 'High conversion rates', 'Precise targeting'],
    process: ['Competitor Analysis', 'Campaign Setup', 'A/B Testing', 'Scaling']
  },
  {
    id: 'social',
    title: 'Social Media',
    description: 'Build a community and grow your brand presence across all major platforms.',
    icon: <Share2 className="w-6 h-6" />,
    benefits: ['Brand awareness', 'Customer engagement', 'Viral potential'],
    process: ['Content Calendar', 'Community Mgmt', 'Paid Social', 'Analytics']
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'Visual identities that stand out and communicate your unique value.',
    icon: <Palette className="w-6 h-6" />,
    benefits: ['Unique identity', 'Trust building', 'Memorable visuals'],
    process: ['Brand Discovery', 'Logo Design', 'Visual Guide', 'Assets']
  }
];

export const CASE_STUDIES = [
  {
    id: 'techflow',
    client: 'TechFlow SaaS',
    industry: 'Technology',
    title: 'Scaling 0 to $1M ARR in 12 Months',
    problem: 'Struggling with high CAC and low lead volume from organic channels.',
    solution: 'Implemented a full-funnel content strategy paired with hyper-targeted LinkedIn ads.',
    results: [
      { label: 'Revenue Growth', value: '450%' },
      { label: 'Lead Volume', value: '12x' },
      { label: 'CAC Reduction', value: '38%' }
    ],
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'luxenord',
    client: 'LuxeNord E-com',
    industry: 'Fashion',
    title: 'The Viral Holiday Campaign',
    problem: 'Minimal brand presence in a crowded luxury market.',
    solution: 'Creator-led video campaign across TikTok and Instagram Reels.',
    results: [
      { label: 'ROAS', value: '6.2x' },
      { label: 'Impressions', value: '15M+' },
      { label: 'Sales Increase', value: '220%' }
    ],
    image: 'https://picsum.photos/800/600?random=2'
  }
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'The Future of AI in Marketing: 2025 Predictions',
    excerpt: 'How generative AI is reshaping the way brands communicate with customers...',
    author: 'Sarah Chen',
    date: 'Oct 24, 2024',
    category: 'Innovation',
    image: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: '2',
    title: 'Why SEO Isn’t Dead (It Just Changed)',
    excerpt: 'Search engine optimization is evolving. Here is how to stay ahead of the curve...',
    author: 'Marcus Wright',
    date: 'Oct 21, 2024',
    category: 'SEO',
    image: 'https://picsum.photos/600/400?random=11'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Nexus didn't just run our ads; they became an extension of our growth team. Our revenue has tripled.",
    author: "James Miller",
    role: "CEO, StreamLine",
    image: "https://picsum.photos/100/100?random=20"
  },
  {
    quote: "The branding work they did was phenomenal. We finally have an identity that matches our ambition.",
    author: "Elena Rodriguez",
    role: "Founder, Bloom Digital",
    image: "https://picsum.photos/100/100?random=21"
  }
];
