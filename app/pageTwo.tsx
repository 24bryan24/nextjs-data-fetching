import Image from "next/image";
// import Carousel from "../components/carousel";
import Navbar from "../components/navbar";
// import HomePage from "../components/homePage";
import styles from "./page.module.scss";
import HomePageTwo from "../components/homePageTwo";

//React-transition-group
import {CSSTransition} from 'react-transition-group';

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
    <div className={styles.app} 
    // style={{ "--color": "black" }}
    >
        <div className={styles.wrapper}>
          {/* {showScrollToTopIcon()} */}

          {/* <CSSTransition
            // in={isMobileMenuOpen}
            classNames="mobile-navigation"
            timeout={300}
            unmountOnExit
          > */}
            <div className={styles.mobile_menu_wrapper}>
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
              className={styles.mobile_menu_overlay}
              // onClick={() => toggleMobileMenu(false)}
            ></div>
          {/* </CSSTransition> */}

          {/* <CSSTransition
            // in={showScrollToTop}
            classNames="showScrollToTop"
            timeout={300}
            unmountOnExit
          > */}
            <div className={styles.scrollToTop} 
            // onClick={smoothScrollToTop}
            >
              {/* <BackToTop /> */}
            </div>
          {/* </CSSTransition> */}

          {/* <Navigation openMobileMenu={() => toggleMobileMenu(true)} /> */}

              {/* <CSSTransition
                // in={match != null}
                timeout={300}
                classNames="slide-backward"
                unmountOnExit
              > */}
                <div className={styles.page}>
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
