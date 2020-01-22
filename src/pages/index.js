import React from "react";
import { Link } from 'gatsby';
import headerStyles from '../components/header.module.scss'
import '../components/header.module.scss'

import '../components/index.css'
import Layout from '../components/layout'


const IndexPage = () => {
    return (
       <div>
           <div>
           <header>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/About">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            </header>
            </div>
            <div className="center">
                <h6 >The Middle of the Code</h6>
            </div>
       </div> 
        
        
       
    )
  
}

export default IndexPage
