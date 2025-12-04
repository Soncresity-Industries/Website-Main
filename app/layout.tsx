import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s - Soncresity Industries',
    default: 'Soncresity Industries - Innovative Software Solutions',
  },
  description: 'Discover innovative software solutions, gaming projects, and development tools from Soncresity Industries.',
  keywords: ['software development', 'gaming', 'minecraft', 'tools', 'modpacks', 'soncresity industries'],
  authors: [{ name: 'Soncresity Industries' }],
  openGraph: {
    siteName: 'Soncresity Industries',
    locale: 'en_US',
    type: 'website',
  },
  manifest: '/site.webmanifest',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-96x96.png',
      sizes: '96x96',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  other: {
    'apple-mobile-web-app-title': 'Soncresity Industries',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <video autoPlay muted loop className="background-video">
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
          <Header />
          <main className="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
