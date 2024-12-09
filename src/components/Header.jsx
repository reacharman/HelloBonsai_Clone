import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="https://cdn.prod.website-files.com/635ac9564cc3682ce1536786/635b95cfdbc1e264b35486ad_Symbols.svg" alt="Bonsai" className="navbar-logo" />
          <div className="navbar-links">
            <a href="#product">Product</a>
            <a href="#industries">Industries</a>
            <a href="#templates">Templates</a>
            <a href="#pricing">Pricing</a>
            <a href="#reviews">Reviews</a>
          </div>
        </div>
        <div className="navbar-right">
          <button className="btn-login">LOG IN</button>
          <button className="btn-start">START FREE</button>
        </div>
      </div>
    </nav>
  )
}

