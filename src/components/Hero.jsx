import './Hero.css'

const Hero = () => {
    return (
      <>
        <div className="hero-container">
            <div className="text-container">
                <h1 className="hero-title">Robust time tracking for businesses</h1>
                <p className="hero-description">Track your teams hours, generate accurate timesheets and get instant reports. Fully integrated with project management and billing.</p>
                <input className="hero-input" type="email" placeholder="Enter your work email" />
                <button className="hero-button">Start free</button>
            </div>

            <div className="image-container">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/67224c4b14961c2c9573e91a_Timesheets-product-hero%20(6)%20(2)-p-800.jpg" alt="Timesheet product hero" />
            </div>
        </div>

        <div className="features-section" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <h2 className="features-title">Get clarity on your teams billable hours and project costs</h2>
            <section className="feature-card">
                <img className="feature-image" src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228b4c2bc89391fb6c673_Time%20Clock.webp" alt="Time Clock feature" />
                <h3 className="feature-title">In-app timer</h3>
                <p className="feature-description">Fully integrated, simple timer.</p>
            </section>

            <section className="feature-card">
                <img className="feature-image" src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228b4c2bc89391fb6c673_Time%20Clock.webp" alt="Time Clock feature" />
                <h3 className="feature-title">In-app timer</h3>
                <p className="feature-description">Fully integrated, simple timer.</p>
            </section>

            <section className="feature-card">
                <img className="feature-image" src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228b4c2bc89391fb6c673_Time%20Clock.webp" alt="Time Clock feature" />
                <h3 className="feature-title">In-app timer</h3>
                <p className="feature-description">Fully integrated, simple timer.</p>
            </section>

            <section className="feature-card">
                <img className="feature-image" src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228b4c2bc89391fb6c673_Time%20Clock.webp" alt="Time Clock feature" />
                <h3 className="feature-title">In-app timer</h3>
                <p className="feature-description">Fully integrated, simple timer.</p>
            </section>
        </div>
      </>
    )
  }
  
export default Hero