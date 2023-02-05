"use client"

import Link from "next/link";

//React-router-dom
// import { Link as ReactLink} from "react-router-dom";

//Styles
import styles from "../styles/navbar.module.css";

//Font awesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

//Logo
import LogoBlack from "./logoBlack";
// import { useRef } from "react";
// import { useEffect } from "react";
// import { useTheme } from "../hooks/useTheme";

const Navbar = (props: any) => {
//   const { ref, isMobileMenuOpen } = useTheme();
//   console.log({ ref });

//   const bladeRef = useRef();

  return (
        <div className="fixed m-0 bg-white flex justify-start items-center w-full">
          <div className="pt-4 relative font-[0.7rem]">
            <Link href="/">
              <LogoBlack />
            </Link>
          </div>

          <div className="hidden sm:inline bg-blue-600">
            <ul className="pl-0 list-none mx-[10rem] flex">
              <li className="inline-block relative duration-400 text-black font-normal mx-[1.5em] 
              after:absolute after:left-0 after:bg-yellow-500 after:w-0 after:h-0 after:-bottom-[5px] hover:after:w-full
              ">
                {/* <ReactLink
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                  // to="/"
                  exact
                  activeClassName="active"
                > */}
                <a className="text-black font-medium no-underline relative cursor-pointer">Home</a>
                {/* </ReactLink> */}
              </li>
              <li className="inline-block relative duration-400 text-black font-normal mx-[1.5em] 
              after:absolute after:left-0 after:bg-yellow-500 after:w-0 after:h-0 after:-bottom-[5px] hover:after:w-full
              ">
                {/* <ReactLink
                  onClick={() =>
                    ref[0].current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "nearest",
                    })
                  }
                  exact
                  activeClassName="active"
                > */}
              <a className="text-black font-medium no-underline relative cursor-pointer">About</a>
                {/* </ReactLink> */}
              </li>
              <li className="inline-block relative duration-400 text-black font-normal mx-[1.5em] 
              after:absolute after:left-0 after:bg-yellow-500 after:w-0 after:h-0 after:-bottom-[5px] hover:after:w-full
              ">
                {/* <ReactLink
                  onClick={() =>
                    ref[1].current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "nearest",
                    })
                  }
                  exact
                  activeClassName="active"
                > */}
                 <a className="text-black font-medium no-underline relative cursor-pointer">Portfolio</a>
                {/* </ReactLink> */}
              </li>
              <li className="inline-block relative duration-400 text-black font-normal mx-[1.5em] 
              after:absolute after:left-0 after:bg-yellow-500 after:w-0 after:h-0 after:-bottom-[5px] hover:after:w-full
              ">
                {/* <ReactLink
                  onClick={() =>
                    ref[2].current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                  exact
                  activeClassName="active"
                > */}
              <a className="text-black font-medium no-underline relative cursor-pointer">Contact</a>

                {/* </ReactLink> */}
              </li>
            </ul>
          </div>

          <div
            className="block text-yellow-500 font-[2em] sm:hidden cursor-pointer"
            onClick={() => props.openMobileMenu()}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
  );
}

export default Navbar;
