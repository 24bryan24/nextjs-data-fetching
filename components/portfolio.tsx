import React from 'react';
import client from "../app/client.js"


//Styles
import '../styles/portfolio.css';
import '../styles/homePage.css'


//SVG icons
import Dots from '../assets/icons/Dots';
import Square from '../assets/icons/Square';

// Components
import PortfolioSlider from './portfolioSlider';

async function getData() {
    const data = await client
    .fetch(
      `*[_type == "portfolio"] {
      header,
      slug,
      body,
      description,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
    )
    .then((data) => data)
  
    return data;

  }

export default async function Portfolio() {
  const data = await getData()
  // console.log(data.length)

    return (
        <div
            // // ref={linkRefTwo}
            className="portfolio section"
            data-aos="fade-left"
          >
            <h2>
              Portfolio 
              <Dots />
            </h2>

            <div className="container-inner">
              <h4>Descriptions</h4>

              <Square />
              <PortfolioSlider data={data} />
            </div>
          </div>
    )
}
