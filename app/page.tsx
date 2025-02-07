import Image from "next/image";
// import Carousel from "../components/carousel";
import Navbar from "../components/navbarTwo";
// import HomePage from "../components/homePage";
import styles from "./page.module.scss";
import HomePageTwo from "../components/homePageTwo";


import './page.css'

//React-transition-group
import {CSSTransition} from 'react-transition-group';
import NavbarTwo from "../components/navbarTwo";

// async function getData() {
//   const productsResponse = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   const products = await productsResponse.json();

//   console.log("Here: ", products);

//   return products;
// }

export default async function Home() {
  // const products = await getData();
  // console.log("Products: ", products);

  return (
    <div className="App" 
    // style={{ "--color": "black" }}
    >
          <Navbar />
        <div className="wrapper">
          {/* {showScrollToTopIcon()} */}

          {/* <CSSTransition
            // in={isMobileMenuOpen}
            classNames="mobile-navigation"
            timeout={300}
            unmountOnExit
          > */}
            <div className="mobile-menu-wrapper">
              {/* <MobileNavigation
                closeMobileMenu={() => toggleMobileMenu(false)}
              /> */}
            </div>
          {/* </CSSTransition> */}

          {/* <CSSTransition
            // in={isMobileMenuOpen}
            classNames="mobile-navigation-overlay"
            timeout={300}
            unmountOnExit
          > */}
            <div
              className="mobile-menu-overlay"
              // onClick={() => toggleMobileMenu(false)}
            ></div>
          {/* </CSSTransition> */}

          {/* <CSSTransition
            // in={showScrollToTop}
            classNames="showScrollToTop"
            timeout={300}
            unmountOnExit
          > */}
            <div className="scrollToTop" 
            // onClick={smoothScrollToTop}
            >
              {/* <BackToTop /> */}
            </div>
          {/* </CSSTransition> */}

          <NavbarTwo
          // openMobileMenu={() => toggleMobileMenu(true)} 
          />

              {/* <CSSTransition
                // in={match != null}
                timeout={300}
                classNames="slide-backward"
                unmountOnExit
              > */}
                <div className="page">
                  <HomePageTwo 
                  // scrollToTop={scrollToTop} 
                  />
                </div>
              {/* </CSSTransition> */}

          {/* <Footer scrollToTop={smoothScrollToTop} /> */}
        </div>
      </div>
  );
}
