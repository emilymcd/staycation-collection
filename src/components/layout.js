import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  return (
    <main className="px-10">
      <nav className="flex justify-between items-center m-5 gap-10">
        <StaticImage src="../images/logo.png" width={200} alt="Staycation Collection Logo" />
        {/* Primary Nav */}
        <div className="hidden lg:flex justify-between items-center gap-10">
            <ul className="flex justify-center gap-10">
                <li>About</li>
                <li>Collections</li>
                <li>Pricing</li>
                <li>How It Works</li>
            </ul>
            <ul className="flex justify-center gap-5">
                <li><button className="border-2 border-black px-5 rounded">Join Us</button></li>
                <li><button className="border-2 border-black px-5 rounded">Login</button></li>
            </ul>
        </div>
        {/* Secondary Nav */}
        <div className="lg:hidden flex items-center">
            <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </main>
  )
}

export default Layout