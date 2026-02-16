
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
    title: 'Content Strategy',
    skills: [
      'Search Intent Mapping',
      'Editorial Planning',
      'Funnel-Based Content Development',
      'Content Architecture Planning',
      'Audience Engagement Analysis',
      'Readability Enhancement'
    ]
  },
  {
    title: 'SEO & Growth',
    skills: [
      'Advanced Keyword Research',
      'Content Clustering',
      'On-Page SEO Optimization',
      'Organic Growth Strategy',
      'Featured Snippet Targeting',
      'SERP Gap Analysis'
    ]
  },
  {
    title: 'Specialized Writing',
    skills: [
      'Finance & Investment Content',
      'Share Page Structuring',
      'B2B & Technical Articles',
      'High-Converting Landing Pages',
      'Market News & PR Articles',
      'Reel Script Writing'
    ]
  },
  {
    title: 'Tools & Analytics',
    skills: [
      'Google Search Console',
      'Google Analytics',
      'Ahrefs / SEMrush',
      'Surfer SEO',
      'WordPress (CMS)',
      'Grammarly'
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
    title: 'Authority Writing',
    description: 'High-ranking, long-form articles (2,000-5,000+ words) that build trust and drive conversions.',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: 'Content Clustering',
    description: 'Building topical authority through structured content ecosystems and search intent mapping.',
    icon: <Search className="w-6 h-6" />
  },
  {
    title: 'Performance Optimization',
    description: 'Data-driven audits using GSC and Analytics to unlock hidden ranking potential in existing content.',
    icon: <TrendingUp className="w-6 h-6" />
  }
];
