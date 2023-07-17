import React, { useEffect } from 'react'
import './footer.css'
import video from '../../Assets/Videos/footer.mp4';
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaChevronRight, FaTripadvisor} from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  },[])

  return (
    <div>
      <div className='footer'>
        <div className='videoDiv'>
          <video src={video} loop autoPlay muted ></video>
        </div>

        <div className='secContent container' >
          <div className='contactDiv flex'>
            <div className='text' data-aos='fade-up'>
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us </h2>
            </div>
             
            <div className='inputDiv flex'>
              <input type='text' placeholder='Enter Email Address' data-aos='fade-up'/>
              <button className='btn flex' type='submit' data-aos='fade-up'>
                SEND <FiSend className='icon'/>
              </button>
            </div>
          </div>

          <div className='footerCard flex'>
            <div className='footerIntro flex'>
              <div className='logoDiv'>
                <a href='#' className='logo flex'>
                 <MdOutlineTravelExplore className='icon'/> Travel
                </a>
              </div>

              <div className='footerParagraph' data-aos='fade-up'>
                Mount Shuksan is not an easy mountain to climb, and some choose to complete the task over multiple days, camping on the Sulphide Glacier on the way to the summit and perhaps again on the way back down!!!
              </div>

              <div className='footerSocials flex' data-aos='fade-up'>
                <AiOutlineTwitter className='icon'/>
                <AiFillYoutube className='icon'/>
                <AiFillInstagram className='icon'/>
                <FaTripadvisor className='icon'/>
              </div>
            </div>

            <div className='footerLinks grid' >

              {/* Group One */}
              <div className='linkGroup' data-aos='fade-up' data-aos-duration='3000'>
                <span className='groupTitle'>
                  OUR AGENCY
                </span>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Services
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Insurance
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Agency
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Tourism
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Payment
                </li>
              </div>
              
              {/* Group Two */}
              <div className='linkGroup' data-aos='fade-up' data-aos-duration='4000'>
                <span className='groupTitle'>
                  PARNER
                </span>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Bookings
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Rentcars
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  HostelWorld
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Trivago
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Tripadvisor
                </li>
              </div>

              {/* Group Three */}
              <div className='linkGroup'data-aos='fade-up' data-aos-duration='5000'>
                <span className='groupTitle'>
                  LAST MINUTE
                </span>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  London
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  California
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Indonesia
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Europe
                </li>
                <li className='footerList flex'>
                  <FaChevronRight className='icon'/>
                  Oceania
                </li>
              </div>
            </div>

            <div className='footerDiv flex'>
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
