
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  process: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}
