import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby';
import { useState } from 'react';

const Layout = () => {

  const [mobileNav, setMobileNav] = useState(false);

  function handleClick () {
    setMobileNav(!mobileNav);
  }

  return (
    <main className="px-10 min-h-screen">
      <nav className="sticky">
        <div className="flex justify-between items-center m-5 gap-10">
          <StaticImage src="../images/logo.png" width={250} alt="Staycation Collection Logo" />
          {/* Primary Nav */}
          <div className="hidden lg:flex justify-between items-center gap-10">
              <ul className="flex justify-center gap-10">
                  <li><Link to="#">About</Link></li>
                  <li><Link to="#">Collections</Link></li>
                  <li><Link to="#">Pricing</Link></li>
                  <li><Link to="#">How It Works</Link></li>
              </ul>
              <ul className="flex justify-center gap-5">
                  <li><button className="border-2 border-black px-5 rounded">Join Us</button></li>
                  <li><button className="border-2 border-black px-5 rounded">Login</button></li>
              </ul>
          </div>
          {/* Secondary Nav */}
          <div className="lg:hidden flex items-center">
              <a style={{cursor:"pointer"}} onClick={handleClick}><FontAwesomeIcon icon={faBars} /></a>
          </div>
        </div>
        {mobileNav && 
          <div className="lg:hidden flex items-center bg-slate-50">
            <ul>
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Collections</Link></li>
              <li><Link to="#">Pricing</Link></li>
              <li><Link to="#">How It Works</Link></li>
            </ul>
          </div>
        }
      </nav>
    </main>
  )
}

export default Layout