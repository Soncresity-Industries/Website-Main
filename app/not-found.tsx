import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-overlay">
      <section className="content-section">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h2 style={{ color: '#fff', fontSize: '3rem', marginBottom: '1rem' }}>
              404 - Page Not Found
            </h2>
            <p style={{ color: '#e0e0e0', fontSize: '1.2rem', marginBottom: '2rem' }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="cta-button">
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}