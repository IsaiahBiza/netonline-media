'use client'; // Marks this component as a Client Component

import HeroSection from './HeroSection'; // Make sure HeroSection exists in the components folder
import { usePathname } from 'next/navigation'; // Import usePathname for route detection

export default function ClientHeroSection() {
  const pathname = usePathname(); // Get the current route

  // Only render HeroSection on the homepage
  if (pathname === '/') {
    return <HeroSection />;
  }

  return null; // Don't render anything on other routes
}
