/**
 * Root Page - Redirects to Catalan by default
 * This page handles the root route "/"
 */
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to Catalan version by default
  redirect('/ca');
}
