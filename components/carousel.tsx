"use client"

// import React, { useEffect, useState } from 'react';
import client from "../app/client.js"

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import Slider from 'react-slick';

//Styles
import '../styles/carousel.css'
import { useState, useEffect } from "react";


  export default function Carousel(){
    const [sliderData, setSliderData] = useState([])
   
    const settings ={
        dots:true,
        arrows:false,
        autoplay:true
    }

    useEffect(() => {
      client
        .fetch(
          `*[_type == "post"]{
        title,
        slug,
        description,
        image{
          asset->{
            _id,
            url
          },
        },
        hexCode,
      }`
        )
        .then((data) => setSliderData(data))
        .catch(console.error);
    }, []);


    // const sliderData = await getData();
    
      console.log(sliderData)

    return(
        <div className="slider-main">
            <Slider {...settings}>
            {/* {sliderData.map((post: any, index: any) => (
          <div
            style={{
            //   background: `linear-gradient(rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.35)), url(https://www.images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            }}
            className="slide"
          >
            <img className="slide" src={post.mainImage.asset.url} />
            <div className="text">
              <p>{post.body[0].children[0].text}</p>
              <h1>{post.title}</h1>
            </div>
          </div>
        ))} */}
                <div className="slide-1">
                    <div className="text">
                        <p>Leave an impression on your guests</p>
                        <h1>Living Room</h1>
                    </div>  
                </div>
                
                <div className="slide-2">
                    <div className="text">
                        <p>Redesign the older parts of your home.</p>
                        <h1>Hardwood Floors</h1>
                    </div>  
                </div>

                <div className="slide-3">
                    <div className="text">
                        <p>The best parts of your home where the family is.</p>
                        <h1>Kitchen Design</h1>
                    </div>  
                </div>
            </Slider>
        </div>
    )
}