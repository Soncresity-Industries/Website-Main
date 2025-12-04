import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>Welcome to Soncresity Industries</h2>
          <p>
            Innovative software solutions and cutting-edge technology for the modern world.
          </p>
          <Link href="/about" className="cta-button">
            Learn More
          </Link>
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
