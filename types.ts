
export interface RankingResult {
  id: string;
  title: string;
  badge: string;
  keyword: string;
  position: string;
  client: string;
  publishedDate?: string;
  type: string;
  impact: string[];
  role: string[];
  whyMatters?: string;
  screenshotUrl: string;
  caption: string;
  link?: string;
  wordCount?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  niche: string;
  type: string;
  keyword: string;
  wordCount: string;
  link?: string;
  role: string[];
  impact: string[];
  isGhostwritten: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon?: string;
}