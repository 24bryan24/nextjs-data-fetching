import React from 'react';

//React-router-dom
// import {Link, NavLink} from 'react-router-dom';
import Link from 'next/link'

//Styles
import '../app/page.css'
import '../styles/navbar.css';


//Font awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "../components/toggleButton"

//Logo
import LogoBlack from '../components/LogoBlack'
// import Blade from '../Img/Blade.png'
// import { useRef } from 'react';
// import { useEffect } from 'react';
// import { useTheme } from "../hooks/useTheme";


function NavbarTwo(props: any){


    return (
      <nav
      // style={{ "--color": "white" }}
    >
        <div className="container">
          <div className="nav_items">
            <div className="logo">
              <Link
                href="/"
                className="active"
                // onClick={() =>
                //   window.scrollTo({
                //     top: 0,
                //     left: 0,
                //     behavior: "smooth",
                //   })
                // }
              >
                <LogoBlack />
              </Link>
            </div>

            <div className="menu">
              <ul>
                <li>
                  <Link
                    // onClick={() =>
                    //   window.scrollTo({
                    //     top: 0,
                    //     left: 0,
                    //     behavior: "smooth",
                    //   })
                    // }
                    href="/"
                    className="active"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    // onClick={() =>
                    //   ref[0].current.scrollIntoView({
                    //     behavior: "smooth",
                    //     block: "center",
                    //     inline: "nearest",
                    //   })
                    // }
                    href="/"
                    className="active"
                  >
                    About
                  </Link>
                  {/* <NavLink to="/about" exact activeClassName="active">
                    About
                  </NavLink> */}
                </li>
                <li>
                  <Link
                    // onClick={() =>
                    //   ref[1].current.scrollIntoView({
                    //     behavior: "smooth",
                    //     block: "center",
                    //     inline: "nearest",
                    //   })
                    // }
                    href="/"
                    className="active"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    // onClick={() =>
                    //   ref[2].current.scrollIntoView({
                    //     behavior: "smooth",
                    //     block: "start",
                    //     inline: "nearest",
                    //   })
                    // }
                    href="/"
                    className="active"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="mobile-menu-icon"
            //   onClick={() => props.openMobileMenu()}
            >
              {/* <FontAwesomeIcon icon={faBars} /> */}
            </div>
            {/* <ToggleButton /> */}
          </div>
        </div>
      </nav>
    );
}

export default NavbarTwo;