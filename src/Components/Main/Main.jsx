import React, { useEffect } from "react";
import "./main.css";
import { GrLocation } from "react-icons/gr";
import { BsClipboardCheck } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';

import img1 from "../../Assets/Images/image1.jpg";
import img2 from "../../Assets/Images/image2.jpg";
import img3 from "../../Assets/Images/image3.jpg";
import img4 from "../../Assets/Images/image4.jpg";
import img5 from "../../Assets/Images/image5.jpg";
import img6 from "../../Assets/Images/image6.jpg";
import img7 from "../../Assets/Images/image7.jpg";
import img8 from "../../Assets/Images/image8.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Great Pyramid",
    location: "Egypt",
    grade: "CULTURAL RELAX",
    fees: "$1000",
    description: "Man Taking Photo of the Great Pyramid",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Moraine Lake",
    location: "Canada",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description: "Beautiful View of Moraine Lake",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Beach",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description: "Twelve Apostles Cliff in Australia",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Mount Shuksan",
    location: "USA",
    grade: "CULTURAL RELAX",
    fees: "$1000",
    description: "Mount Shuksan is not an easy mountain to climb, and some choose to complete the task over multiple days, camping on the Sulphide Glacier on the way to the summit and perhaps again on the way back down.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Kuwait Pennants",
    location: "Rigging",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description: "Big Tent Set on the Beach with Kuwait Pennants on Rigging",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Lake",
    location: "Sweden",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description: "Wooden Red Cottage by Lake",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Snowcapped Mountain",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description: "View of a Snowcapped Mountain under a Blue Sky",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Sagrada Familia",
    location: "Spain",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description: "River by Sagrada Familia in Barcelona, Spain",
  },
  
];


const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  },[])

  return (
    <div className="main container section">
      <h3 className="secTitle" data-aos='fade-right' >
        <div className="title">Most visited destinations</div>
      </h3>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination" data-aos='fade-up'>
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>

                  <div className="continent flex">
                    <GrLocation className="icon" />
                    <span className="name">{location}</span>
                  </div>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="decs">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Main;
