import Link from 'next/link';
import RotatingText from '../components/RotatingText';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2 style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            justifyContent: 'flex-start', 
            gap: '1rem',
            textAlign: 'left'
          }}>
            <span>Creating</span>
            <RotatingText
              texts={['extraordinary', 'individual', 'soncresity']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <span>experiences</span>
          </h2>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h3>Our Services</h3>
          <div className="features-grid">
            <Link href="/projects" className="clickable-card">
              <div className="feature-card">
                <h4>Projects</h4>
                <p>
                  Explore our innovative software projects, gaming modifications, 
                  and development tools.
                </p>
              </div>
            </Link>
            
            <Link href="/tools" className="clickable-card">
              <div className="feature-card">
                <h4>Tools</h4>
                <p>
                  Access powerful development tools and utilities designed 
                  to enhance your workflow.
                </p>
              </div>
            </Link>
            
            <Link href="/blog" className="clickable-card">
              <div className="feature-card">
                <h4>Blog</h4>
                <p>
                  Stay updated with the latest technology trends, tutorials, 
                  and industry insights.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
