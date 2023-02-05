// import React, { useRef } from 'react';

//Styles
import styles from '../styles/homePage.module.scss';

//Font awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

//Components
import Carousel from './carousel';
// import PortfolioSlider from '../Components/PortfolioSlider';

//SVG icons
import Dots from '../assets/icons/Dots';
import Square from '../assets/icons/Square';
import Circle from '../assets/icons/Circle';
// import { NavLink, Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useTheme } from "../hooks/useTheme";


function HomePage(props: any){
  // const linkRefOne = useRef()
  // const linkRefTwo = useRef()
  // const linkRefThree = useRef()
  // const { ref, changeRefs } = useTheme();
  // console.log(ref.current)

// useEffect(() => {
//   changeRefs([linkRefOne, linkRefTwo, linkRefThree]);
// }, [])

    return (
      <div>
      <div className={styles.homeView}>
        {/* <Carousel /> */}

        <div className={styles.container}>
          {/* FIX */}

          <div
            // ref={linkRefOne}
            id="about"
            className={`${styles.aboutUs} ${styles.section}`}
            data-aos="fade-right"
          >
            <h2>
              About 
              <Dots />
            </h2>

            <div className="container-inner">
              <h4>
                <span className={styles.golden_rule}>Golden Rule</span> Construction
              </h4>
              <div className={styles.text}>
                <p>
                  Located in South Jersey, Don has slowly built a reputation for
                  quality and affordable craftsmanship in all areas of the home.
                  He has experience in General Contracting, as well as Plumbing
                  and Electrical work. For whatever the need, we can make your
                  dream!
                </p>

                {/* <div className="showMore">
                  <NavLink to="/about" onClick={() => props.scrollToTop()}>
                    Show More{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </NavLink>
                </div> */}
              </div>
            </div>

            <Square />
          </div>

          <div
            // ref={linkRefTwo}
            className={`${styles.portfolio} ${styles.section}`}
            data-aos="flip-up"
          >
            <h2>
              Portfolio 
              <Dots />
            </h2>

            <div className={styles.container_inner}>
              <h4>Descriptions</h4>

              <Square />
              {/* <PortfolioSlider /> */}
            </div>
          </div>
        </div>

        <div className="allWorks">
          <Circle />

          <div className="container">
            <h3>Want to see all our work? </h3>

            {/* Used to be NavLinks...I changed it because wouldn't compile when removing the to parameter */}
            {/* <Link
              // to="/portfolio"
              onClick={() => props.scrollToTop()}
            >
              View the entire Portfolio
            </Link> */}
          </div>
        </div>

        <div 
        // ref={linkRefThree} 
        className="contact section">
          <div className="container">
            <h2>
              Contact 
              <Dots />
            </h2>

            <div className="container-inner">
              <div className="wrapper">
                <div className="info">
                  <div className="column">
                    <div className="heading">
                      {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
                      <h4>Where we are</h4>
                    </div>
                    <p>PA - NJ - DE</p>
                  </div>

                  <div className="column">
                    <div className="heading">
                      {/* <FontAwesomeIcon icon={faPhoneAlt} /> */}
                      <h4>Contact</h4>
                    </div>
                    <p>Don Heilman</p>
                    <p>215 360 4303</p>
                    <p>don@goldenrulecc.com</p>
                  </div>

                  <div className="column">
                    <div className="heading">
                      {/* <FontAwesomeIcon icon={faClock} /> */}
                      <h4>Working Time</h4>
                    </div>
                    <p>Monday - Friday</p>
                    <p>8:00 - 4:30</p>
                  </div>
                </div>

                <div className="form">
                  <form
                    action="https://getform.io/f/cbb674e5-7d9c-4a49-aa8b-aff7eba1647b"
                    method="POST"
                  >
                    <input name="name" type="text" placeholder="Name" />
                    <input name="email" type="email" placeholder="Email" />

                    <textarea name="message" placeholder="Message"></textarea>

                    {/* add hidden Honeypot input to prevent spams */}
                    {/* <input type="hidden" name="_gotcha" style="display:none !important"></input> */}

                    <button type="submit" className="send">
                      {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                      {/* <NavLink to="">Send</NavLink> */}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <Square />
        </div>
      </div>
      </div>
    );
}

export default HomePage;