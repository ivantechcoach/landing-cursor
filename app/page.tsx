/**
 * Root Page - Redirects to Spanish by default
 * This page handles the root route "/"
 */
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to Spanish version by default
  redirect('/es');
}
