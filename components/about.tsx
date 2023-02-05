import React from 'react';
import client from "../app/client.js"


//Styles
import '../styles/homePage.css'



//SVG icons
import Dots from '../assets/icons/Dots';
import Square from '../assets/icons/Square';

import ProfilePic from '../Img/dhProfilePicture.jpg'

async function getData() {
  const data = await client
  .fetch(
    `*[_type == "about"] {
    title,
    slug,
    body,
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

export default async function About(){
  const data = await getData();
      // console.log(data[0].body[0].children[0].text)

    return (
      <div
      // // ref={linkRefOne}
      id="about"
      className="aboutUs section"
      data-aos="fade-right"
    >
      <h2>
        About 
        <Dots />
      </h2>

      <div className="container-inner">
        <h4>
          <span className="golden-rule">Golden Rule</span> Construction
        </h4>
        <div className="text">
          <p>
            {data[0].body[0].children[0].text}
          </p>
        </div>
      </div>

      <Square />
    </div>
    );
}
