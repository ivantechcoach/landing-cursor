"use client";

import { usePathname } from 'next/navigation';
import { buildLocalizedLink } from '@/lib/i18n';
import ContentPreview from './ContentPreview';

interface ContentPreviewClientProps {
  language?: 'es' | 'en' | 'cat';
}

export default function ContentPreviewClient({ language = 'es' }: ContentPreviewClientProps) {
  const pathname = usePathname();
  
  return <ContentPreview language={language} pathname={pathname} />;
}
