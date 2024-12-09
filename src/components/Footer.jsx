import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg" alt="Bonsai" />
          </div>
          <div className="footer-nav">
            <ul>
              <li>Products</li>
              <li>Use cases</li>
              <li>Templates</li>
              <li>Resources</li>
              <li>Company</li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link">
              <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/666052f06c41f542152100ad_linkedin.webp" alt="LinkedIn" />
            </a>
            <a href="#" className="social-link">
              <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/666052f0c4cb3b1e984d8239_twitter.webp" alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2024 Bonsai Technologies Inc. Bonsai partners with Stripe Payments Company for money transmission services and account services with funds held at Evolve Bank & Trust. Member FDIC. Bonsai cards are issued by Celtic Bank, Bonsai is not a bank, and does not provide legal services, advice or representation. Some product imagery is for illustrative purposes only and the actual product experience may differ.
          </p>
          <p>
            *Beyond the 7-day trial, there are no monthly fees and no minimums — usage is conditioned to being on a Bonsai paid plan, see details here: https://www.hellobonsai.com/pricing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;