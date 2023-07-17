import React, { useEffect } from "react";
import './home.css';
import video from "../../Assets/Videos/ocean.mp4";
import {GrLocation} from 'react-icons/gr';
import {HiFilter} from 'react-icons/hi';
import {TbBrandFacebook} from 'react-icons/tb';
import {AiOutlineInstagram} from 'react-icons/ai';
import {LiaTripadvisor} from 'react-icons/lia';
import {FaListUl} from 'react-icons/fa';
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  },[])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4" />
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText" data-aos='fade-up'>Our Packages</span>
          <h1 className="homeTitle" data-aos='fade-up'>Search your Holidays</h1>
        </div>

        <div className="cardDiv grid" data-aos='fade-up'>
          <div className="destinationInput">
            <label htmlFor="city">Search your destination: </label>
            <div className="input flex">
              <input type="text" placeholder="Enter your destination..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date: </label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max='5000' min='1000' />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div className="homeFooterIcons flex" data-aos='fade-up'>
         <div className="rightIcons"> 
          <TbBrandFacebook className="icon"/>
          <AiOutlineInstagram className="icon"/>
          <LiaTripadvisor className="icon"/>
         </div>

         <div className="rightIcons"> 
          <FaListUl className="icon"/>
          <AiOutlineAppstoreAdd className="icon"/>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
