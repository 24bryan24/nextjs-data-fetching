"use client"

import React, { useEffect, useState } from 'react';
// import client from "../app/client.js"
import Image from 'next/image';


//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Slider image
import SliderImage from '../Img/Slider-Home/excavator.jpg'
import Image1 from "../assets/images/interior-barn-door-.jpg";
import Image2 from "../assets/images/kitchen-coffee-bar-area.jpg";
import Image3 from "../assets/images/poway-kitchen-remodel-with-island-seating.jpg";
import Image4 from "../assets/images/poway-secondary-bathroom-remodel.jpg";
import Image5 from "../assets/images/wet-bar-makeover.jpg";
import Image6 from "../assets/images/Kitchen-Remodel-Temecula-Classic-Home-Improvements.jpg";

//Arrows
import Next from '../assets/icons/Next';
import Prev from '../assets/icons/Prev';

//Styles
import '../styles/homePage.css'
import '../styles/portfolioSlider.css'


// async function getData() {
//     const data = await client
//     .fetch(
//       `*[_type == "portfolio"] {
//       title,
//       slug,
//       body,
//       mainImage {
//         asset -> {
//           _id,
//           url
//         },
//         alt
//       }
//     }`
//     )
//     .then((data) => data)
  
//     return data;

//   }

  export default function PortfolioSlider({ data }){
    // const [data, setData] = useState([])

    // useEffect(() => {
    //   client
    //     .fetch(
    //       `*[_type == "portfolio"]{
    //     title,
    //     slug,
    //     description,
    //     "imageUrl": image.asset->url,
    //     hexCode,
    //   }`
    //     )
    //     .then((data) => setData(data))
    //     .catch(console.error);
    // }, []);
    // // const data = await getData();
    //   console.log(data)

    //Custom arrows
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === 0 ? true : false}
          type="button"
          id="prevSlide"
        >
          <Prev />
        </button>
      );

      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === slideCount - 1 ? true : false}
          type="button"
          id="nextSlide"
        >
          <Next />
        </button>
      );

    const settings ={
        dots:false,
        arrows:true,
        prevArrow:<SlickArrowLeft />,
        nextArrow:<SlickArrowRight />,
        autoplay:false,
        slidesToShow:3,
        slidesToScroll:3,
        variableWidth:true,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                variableWidth:false
              }
            },
            {
              breakpoint:950,
              settings: {
                slidesToShow:2,
                slidesToScroll:2,
                variableWidth:false
              }
            },
            {
              breakpoint:500,
              settings: {
                slidesToShow:1,
                slidesToScroll:1,
                variableWidth:false
              }
            }
          ]
    }

    return (
      <div className="portfolioSlider">
        <Slider {...settings}>
          
        {data && data.map((item: any, index: any) => (
          <div className="slide">
            <div className="content">
              <img src={item.mainImage.asset.url} alt="portfolio-example" />
              <div className="text">
                <p>Sliding Door</p>
                <h5>{item.title}</h5>

                <p>
                  Toffee wafer sesame snaps sugar plum jelly danish cake bear
                  claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry
                  bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate
                  bar.
                </p>

                <a href="#sa">Show More</a>
              </div>
            </div>
           </div>
        ))} 
       
        </Slider>
      </div>
    );
}
