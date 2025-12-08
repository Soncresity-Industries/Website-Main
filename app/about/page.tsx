import SocialLinks from '../../components/SocialLinks';

export default function About() {
  return (
    <div className="page-overlay">
      <section className="content-section">
        <div className="container">
          <div className="about-content">
            <h3>About Soncresity Industries</h3>
            <p>
              Soncresity Industries is a leading technology company dedicated to developing 
              innovative software solutions that push the boundaries of what's possible. 
              Founded with a vision to create technology that makes a meaningful impact, 
              we specialize in custom software development, gaming modifications, and 
              cutting-edge digital tools.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              To develop innovative technology solutions that empower individuals and 
              businesses to achieve their full potential while maintaining the highest 
              standards of quality, security, and user experience.
            </p>
            
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-card">
                <h4>Innovation</h4>
                <p>
                  We constantly push boundaries and explore new technologies to create 
                  solutions that address real-world challenges.
                </p>
              </div>
              
              <div className="value-card">
                <h4>Quality</h4>
                <p>
                  Every product we develop undergoes rigorous testing and quality 
                  assurance to ensure exceptional performance and reliability.
                </p>
              </div>
              
              <div className="value-card">
                <h4>Security</h4>
                <p>
                  We prioritize security in every aspect of our development process, 
                  protecting user data and maintaining system integrity.
                </p>
              </div>
              
              <div className="value-card">
                <h4>User Experience</h4>
                <p>
                  We design with the user in mind, creating intuitive interfaces and 
                  seamless interactions that enhance productivity and satisfaction.
                </p>
              </div>
            </div>

            {/* Social Links Section */}
            <SocialLinks />
          </div>
        </div>
      </section>
    </div>
  );
}