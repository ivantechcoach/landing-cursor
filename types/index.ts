/**
 * Type definitions for the application
 */

// Language types
export type Language = 'es' | 'en' | 'cat';

// Navigation item interface
export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

// Blog post interface
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  language: Language;
  featured?: boolean;
  readingTime?: number;
}

// Portfolio project interface
export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedAt: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
  language: Language;
}

// Service interface
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
  price?: {
    amount: number;
    currency: string;
    period?: string;
  };
  language: Language;
}

// Contact form interface
export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
  language: Language;
}

// SEO metadata interface
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

// API response interface
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination interface
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Paginated response interface
export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: Pagination;
}

// Theme interface
export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
}

// User interface (if needed for future features)
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  preferences: {
    language: Language;
    theme: string;
    notifications: boolean;
  };
}

// Component props interfaces
export interface HeaderProps {
  language?: Language;
  className?: string;
}

export interface FooterProps {
  language?: Language;
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

// Form interfaces
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  required?: boolean;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => string | null;
  };
  options?: { value: string; label: string }[];
}

// Error interface
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: string;
}

// Loading state interface
export interface LoadingState {
  isLoading: boolean;
  error?: AppError;
}

// Search interface
export interface SearchParams {
  query?: string;
  category?: string;
  tags?: string[];
  language?: Language;
  page?: number;
  limit?: number;
  sortBy?: 'date' | 'title' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

// Analytics interface (for future implementation)
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}
