
import React from 'react';
import { 
  BarChart3, 
  Search, 
  FileText, 
  PenTool, 
  Layout, 
  Mail, 
  Globe, 
  CheckCircle2, 
  TrendingUp, 
  Award,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { RankingResult, PortfolioProject, SkillCategory } from './types';

export const COLORS = {
  authority: '#2E75B6',
  success: '#27AE60',
  neutralDark: '#2C3E50',
  neutralLight: '#F8F9FA',
  gold: '#FFD700',
  purple: '#8B5CF6'
};

export const RANKING_RESULTS: RankingResult[] = [];

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'p1',
    title: '10 Best Ways To Research An Unlisted Company Before Buying Shares',
    client: 'Delistedstocks.in',
    niche: 'Finance & Investing',
    type: 'Bylined Long-Form SEO Blog',
    keyword: 'research unlisted company',
    wordCount: '2,500+',
    link: 'https://www.delistedstocks.in/news/10-best-ways-to-research-an-unlisted-company-before-buying-shares',
    role: ['Content strategy', 'Keyword research', 'Competitive gap analysis', 'Full writing', 'On-page SEO'],
    impact: ['Achieved #1 Ranking', 'Driving qualified investor traffic'],
    isGhostwritten: false
  },
  {
    id: 'p2',
    title: 'Why Do Companies Stay Unlisted? 9 Strategic Reasons',
    client: 'Delistedstocks.in',
    niche: 'Finance & Investing',
    type: 'Bylined Strategic SEO Article',
    keyword: 'why companies stay unlisted',
    wordCount: '2,000+',
    link: 'https://www.delistedstocks.in/why-do-companies-stay-unlisted-9-strategic-reasons-explained/',
    role: ['Topic ideation', 'SERP analysis', 'Strategic positioning', 'Full content creation'],
    impact: ['Achieved #1 Ranking', 'Building topical authority'],
    isGhostwritten: false
  },
  {
    id: 'p3',
    title: 'Delisted Vs Unlisted Shares: Key Differences Every Investor Must Know',
    client: 'Delistedstocks.in',
    niche: 'Finance & Investing',
    type: 'Comparative Analysis Guide',
    keyword: 'delisted vs unlisted shares',
    wordCount: '2,200+',
    link: 'https://www.delistedstocks.in/news/delisted-vs-unlisted-shares-difference/',
    role: ['Side-by-side comparison framework', 'Liquidity analysis', 'Risk assessment writing', 'Search intent mapping'],
    impact: ['Page 1 ranking for competitive comparison keyword', 'Reduces customer support queries'],
    isGhostwritten: false
  },
  {
    id: 'p4',
    title: 'Unlisted Share Research Guide: 12 Key Areas Investors Must Focus On',
    client: 'Delistedstocks.in',
    niche: 'Finance & Investing',
    type: 'Comprehensive Investment Guide',
    keyword: 'unlisted share research guide',
    wordCount: '3,500+',
    link: 'https://www.delistedstocks.in/unlisted-share-research-guide-investors-focus-areas/',
    role: ['12-point systematic research framework development', 'Definitive market analysis (OYO, Zepto, NSE)', 'Strategic content execution (3,500+ words)', 'Lead generation mapping'],
    impact: ['Positions client as educational authority', 'Expected 600-800 monthly visits', 'Strong link magnet potential'],
    isGhostwritten: false
  },
  {
    id: 'p5',
    title: 'Top 10 Thermal Insulation Contractors in India (2025)',
    client: 'Nine Hertz',
    niche: 'Construction/B2B',
    type: 'Ghostwritten SEO Listicle',
    keyword: 'thermal insulation contractors in India',
    wordCount: '3,000+',
    link: 'https://neothermalinsulation.com/blog/thermal-insulation-contractors-in-india/',
    role: ['Market research', 'Vendor analysis', 'Complete content execution'],
    impact: ['Achieved #1 Ranking', 'B2B lead generation'],
    isGhostwritten: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'SEO Strategy & Execution',
    skills: [
      'Advanced keyword research & clustering',
      'Search intent mapping (I/C/T)',
      'SERP analysis & competitive gap identification',
      'Content performance tracking',
      'On-page SEO optimization',
      'Featured snippet targeting'
    ]
  },
  {
    title: 'Content Specialization',
    skills: [
      'Long-form blog articles (2k-5k+ words)',
      'Commercial & transactional content',
      'Listicles & comparison guides',
      'Ghostwriting for authority domains',
      'Landing page content & copywriting',
      'Email content & newsletters'
    ]
  },
  {
    title: 'Industries & Niches',
    skills: [
      'Construction & Real Estate',
      'Healthcare & Wellness',
      'Lifestyle and Fashion',
      'SaaS & Technology',
      'B2B Services',
      'Finance & Investing'
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'SEO: Surfer, Ahrefs, SEMrush, GSC',
      'Writing: Grammarly, Hemingway, Claude AI',
      'CMS: WordPress (Yoast), Webflow',
      'Analytics: GA4, Looker Studio'
    ]
  }
];

export const SERVICES = [
  {
    title: 'SEO Content Strategy',
    description: 'Comprehensive keyword research, gap analysis, and strategic roadmaps to dominate your niche.',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: 'Long-Form Blog Writing',
    description: '2,000-5,000+ word articles optimized for ranking, engagement, and conversion stages.',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: 'Keyword Research & Clustering',
    description: 'Data-driven identification and clustering to maximize topical authority and ranking potential.',
    icon: <Search className="w-6 h-6" />
  },
  {
    title: 'Content Audits',
    description: 'In-depth analysis of existing content with actionable recommendations for performance lift.',
    icon: <FileText className="w-6 h-6" />
  }
];
