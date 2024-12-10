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
                <div className="hero-rating">
                <div className="stars">★★★★★</div>
                    <span>4.8/5 average rating</span>
                </div>
            </div>

            <div className="image-container">
                <div className='bg-image-container'>
                </div>
               
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/67224c4b14961c2c9573e91a_Timesheets-product-hero%20(6)%20(2)-p-800.jpg" alt="Timesheet product hero" />
                
            </div>
        </div>
        <h1 style={{ display: 'flex', justifyContent: 'center'}}>Get clarity on your teams billable hours and project costs</h1>
        <div className="features-section" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
    
            <section className="feature-card">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228b4c2bc89391fb6c673_Time%20Clock.webp" alt="Time Clock feature" />
                <h3 className="feature-title">In-app timer</h3>
                <p className="feature-description">Fully integrated, simple timer.</p>
            </section>

            <section className="feature-card">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228b4c2bc89391fb6c673_Time%20Clock.webp" alt="Time Clock feature" />
                <h3 className="feature-title">In-app timer</h3>
                <p className="feature-description">Fully integrated, simple timer.</p>
            </section>

            <section className="feature-card">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228b4c2bc89391fb6c673_Time%20Clock.webp" alt="Time Clock feature" />
                <h3 className="feature-title">In-app timer</h3>
                <p className="feature-description">Fully integrated, simple timer.</p>
            </section>

            <section className="feature-card">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/66a228b4c2bc89391fb6c673_Time%20Clock.webp" alt="Time Clock feature" />
                <h3 className="feature-title">In-app timer</h3>
                <p className="feature-description">Fully integrated, simple timer.</p>
            </section>
        </div>

        <div className="hero-container">
            <div className="text-container">
                <h3>Keep projects on track</h3>
                <ul>
                    <li>Estimate time for tasks</li>
                    <li>Set a budget for a project and track against it</li>
                    <li>Record with the simple in-app timer</li>
                    <li>Log and monitor hours with timesheets</li>
                </ul>
                <button className="hero-button">Get Started</button>
            </div>

            <div className="image-container">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/665f2ea534779c7d07a50d18_time-tracking-1-p-500.webp" alt="Timesheet product hero" />
            </div>
        </div>

        <div className="hero-container"> 
            <div className="image-container">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/665f2ffb95b5441021eb9ad8_Reports-3%20(2)-p-500.webp" alt="Timesheet product hero" />
            </div>

            <div className="text-container">
                <h3>Monitor utilization & profitability</h3>
                <ul>
                    <li>Set member cost and billable ratess</li>
                    <li>Breakdown non-billable and billable hours</li>
                    <li>Track utilization rates across members</li>
                </ul>
                <button className="hero-button">Get Started</button>
            </div>
        </div>

        <div className="hero-container">
            <div className="text-container">
                <h3>Turn billable hours into invoices</h3>
                <ul>
                    <li>Track billable hours</li>
                    <li>Turn them into invoices in seconds</li>
                    <li>Give clients the full picture</li>
                    <li>Get paid faster with online payments</li>
                </ul>
                <button className="hero-button">Get Started</button>
            </div>

            <div className="image-container">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/665f31919c048a0d9c73a955_Projects-Reports%20(3)-p-500.webp" alt="Timesheet product hero" />
            </div>
        </div>

        <div className="hero-container">
            <div className="text-container">
                <p className="hero-description">“Its important to track hours for each phase of my projects. Before, I would use a spreadsheet to track my time. Now, I use Bonsai to track my hours, add them to my invoices and streamline my process.”‍ Mary, Graphic Designer</p>
            </div>

            <div className="image-container">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/665f25fafb35d7fc2ba0efcc_image%20725-p-500.webp" alt="Timesheet product hero" />
            </div>
        </div>

        <h1 style={{ display: 'flex', justifyContent: 'center'}}>Keep exploring Bonsai’s features</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
            
            <section className="feature-card">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/635eaa2970620b7e4dd73978_timer.svg" alt="Time Clock feature" />
                <h3 className="feature-title">Invoices</h3>
                <p className="feature-description">Get paid on time using smart invoicing with automatic reminders, read-receipts and a variety of payment options.</p>
                <button className="hero-button">View more</button>
            </section>

            <section className="feature-card">
                <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/635ea64cb165568d5eef83b5_Paper.svg" alt="Time Clock feature" />
                <h3 className="feature-title">Task management</h3>
                <p className="feature-description">Stay on top of your ongoing tasks and todos with simple task creation, templating and due dates built right into your projects.</p>
                <button className="hero-button">View more</button>
            </section>
        </div>

        <div>
            <h1>Get started in 30 seconds. Free for 7 days.</h1>
            <p>Simplify your business operations and consolidate your projects, clients and team into one integrated, easy-to-use platform.</p>
            <button className="hero-button">Get Started</button>
        </div>

        <div>
            
        </div>
        
      </>
    )
  }
  
export default Hero