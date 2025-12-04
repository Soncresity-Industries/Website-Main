'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Soncresity Industries Logo" 
              className="logo"
            />
          </Link>
          <h1>Soncresity Industries</h1>
        </div>
        <nav className="nav">
          <Link 
            href="/" 
            className={pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className={pathname === '/projects' ? 'active' : ''}
          >
            Projects
          </Link>
          <Link 
            href="/tools" 
            className={pathname === '/tools' ? 'active' : ''}
          >
            Tools
          </Link>
          <Link 
            href="/blog" 
            className={pathname === '/blog' ? 'active' : ''}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className={pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}