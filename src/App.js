import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Jeff App Logo" />
        <h1>Welcome to <strong>Jeff App</strong></h1>
        <p>Your trusted partner in insurance solutions.</p>
        <p>Providing comprehensive coverage tailored to your needs.</p>
        <a
          className="App-link"
          href="https://jeffinsurance.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore our services
        </a>
      </header>

      {/* New Steps Section */}
      <section className="steps-section">
        <h2>How Jeff App Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Get a Quote</h3>
            <p>Answer a few questions to get an instant insurance quote tailored for you.</p>
          </div>
          <div className="step">
            <h3>Step 2: Customize Your Plan</h3>
            <p>Adjust coverage options to suit your lifestyle and budget.</p>
          </div>
          <div className="step">
            <h3>Step 3: Enjoy Peace of Mind</h3>
            <p>Once your plan is set, you can rest easy knowing you're covered.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Insurance Services</h2>
        <div className="services">
          <div className="service">
            <h3>Auto Insurance</h3>
            <p>Drive with confidence, knowing you're protected on the road.</p>
          </div>
          <div className="service">
            <h3>Home Insurance</h3>
            <p>Protect your home and valuables with reliable coverage.</p>
          </div>
          <div className="service">
            <h3>Life Insurance</h3>
            <p>Plan for the future and safeguard your loved ones with Jeff App Life Insurance.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <blockquote>
            "Jeff App made it easy to get the coverage I needed. Highly recommended!"
            <footer>- Sarah J.</footer>
          </blockquote>
          <blockquote>
            "The team at Jeff App was incredibly helpful, and I feel secure with my insurance plan."
            <footer>- Michael K.</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need help, don't hesitate to reach out to us!</p>
        <a
          className="App-link"
          href="https://jeffinsurance.com/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Jeff App
        </a>
      </section>
    </div>
  );
}

export default App;
