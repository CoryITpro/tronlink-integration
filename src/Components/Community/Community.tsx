import { Container } from '@mui/material'
import React from 'react'
import dis_logo from './../../assets/dis_logo.png'
import mintbtnShape from './../../assets/mintbtnShape.png'
import openseaIcon from './../../assets/openseaIcon.png'
import medIcon from './../../assets/medIcon.png'
import teleIcon from './../../assets/teleIcon.png'
import fbIcon from './../../assets/fbIcon.png'
import instaIcon from './../../assets/instaIcon.png'
import inIcon from './../../assets/inIcon.png'
import twittIcon from './../../assets/twittIcon.png'
import btndesignImg from './../../assets/btndesignImg.png'
import stars from './../../assets/stars.png'
import footerBG from './../../assets/footerBG.png'
import logo from './../../assets/logo.png'
import footerLeft from './../../assets/footerLeft.png'
import footerRight from './../../assets/footerRight.png'

import './Community.css'
import { MyLink } from '../Navbar/scroll'
export const Community = () => {
  return (
    <div className="pt-10 relative overflow-hidden">
      <Container maxWidth={'lg'}>
        <div className="lg:x-14 xl:mx-28 relative z-10">
          <img
            src={stars}
            alt="stars"
            className="left-0 right-0 w-full absolute"
          />
          <h1 className="uppercase text-white font-bold text-3xl sm:ext-4xl text-center mt-4">
            Join Our community &<br /> get Early access
          </h1>
          <p className='text-center text-3xl mt-6'>🤙</p>
          <div className="flex items-center gap-x-10 justify-center mt-8 flex-wrap sm:flex-nowrap gap-y-4 sm:gap-y-0">
            <button className="text-white whiteList-btn px-6 sm:px-8 py-3 text-xs sm:text-xs font-bold relative">
              <img
                src={mintbtnShape}
                alt="mintbtnShape"
                className="w-4 z-10 absolute top-1 left-1"
              />
              <span>WHITELIST NOW</span>
            </button>
            <button className="text-white flex items-center gap-x-2 dis-btn px-6 sm:px-6 py-3 text-xs sm:text-xs font-bold relative">
              <img
                src={mintbtnShape}
                alt="mintbtnShape"
                className="w-4 z-10 absolute top-1 left-1"
              />
              <img src={dis_logo} alt="dis_logo" className="w-4" />
              <span>JOIN DISCORD</span>
            </button>
          </div>
          <div className="flex items-center gap-x-4 justify-center mt-10 flex-wrap sm:flex-nowrap gap-y-4 sm:gap-y-0">
            <button className="social-com-btn relative w-12 h-12 flex items-center justify-center">
              <img
                src={btndesignImg}
                alt="btndesignImg"
                className="w-3 social-design z-10 absolute top-1 left-1"
              />
              <img src={openseaIcon} alt="openseaIcon" className="w-4" />
            </button>
            <button className="social-com-btn relative w-12 h-12 flex items-center justify-center">
              <img
                src={btndesignImg}
                alt="btndesignImg"
                className="w-3 social-design z-10 absolute top-1 left-1"
              />
              <img src={inIcon} alt="inIcon" className="w-4" />
            </button>
            <button className="social-com-btn relative w-12 h-12 flex items-center justify-center">
              <img
                src={btndesignImg}
                alt="btndesignImg"
                className="w-3 social-design z-10 absolute top-1 left-1"
              />
              <img src={instaIcon} alt="instaIcon" className="w-4" />
            </button>
            <button className="social-com-btn relative w-12 h-12 flex items-center justify-center">
              <img
                src={btndesignImg}
                alt="btndesignImg"
                className="w-3 social-design z-10 absolute top-1 left-1"
              />
              <img src={twittIcon} alt="twittIcon" className="w-4" />
            </button>
            <button className="social-com-btn relative w-12 h-12 flex items-center justify-center">
              <img
                src={btndesignImg}
                alt="btndesignImg"
                className="w-3 social-design z-10 absolute top-1 left-1"
              />
              <img src={teleIcon} alt="teleIcon" className="w-4" />
            </button>
            <button className="social-com-btn relative w-12 h-12 flex items-center justify-center">
              <img
                src={btndesignImg}
                alt="btndesignImg"
                className="w-3 social-design z-10 absolute top-1 left-1"
              />
              <img src={fbIcon} alt="fbIcon" className="w-4" />
            </button>
            <button className="social-com-btn relative w-12 h-12 flex items-center justify-center">
              <img
                src={btndesignImg}
                alt="btndesignImg"
                className="w-3 social-design z-10 absolute top-1 left-1"
              />
              <img src={medIcon} alt="medIcon" className="w-4" />
            </button>
          </div>
        </div>
      </Container>
      <img src={footerBG} alt="footerBG" className="-mt-40 w-full" />
      <div className="text-white relative z-10 mt-14 sm:-mt-32 md:-mt-48">
        <Container maxWidth={'lg'}>
          <div className="flex flex-col justify-center items-center pb-24">
            <img src={logo} alt="logo" className="w-24" />
            <ul className="flex items-center justify-center gap-x-8 mt-12 flex-wrap sm:flex-nowrap gap-y-4 sm:gap-y-0">
              <li>
                <MyLink
                  smooth={true}
                  duration={800}
                  to="home"
                  className="footer-link cursor-pointer text-xs font-semibold"
                >
                  Home
                </MyLink>
              </li>
              <li>
                <MyLink
                  smooth={true}
                  duration={800}
                  to="about"
                  className="footer-link cursor-pointer text-xs font-semibold"
                >
                  About Us
                </MyLink>
              </li>
              <li>
                <MyLink
                  smooth={true}
                  duration={800}
                  to="roadmap"
                  className="footer-link cursor-pointer text-xs font-semibold"
                >
                  Roadmap
                </MyLink>
              </li>
              <li>
                <MyLink
                  smooth={true}
                  duration={800}
                  to="faq"
                  className="footer-link cursor-pointer text-xs font-semibold"
                >
                  FAQs
                </MyLink>
              </li>
              <li>
                <MyLink
                  smooth={true}
                  duration={800}
                  to="articles"
                  className="footer-link cursor-pointer text-xs font-semibold"
                >
                  Articles
                </MyLink>
              </li>
              <li>
                <MyLink
                  smooth={true}
                  duration={800}
                  to="terms"
                  className="footer-link cursor-pointer text-xs font-semibold"
                >
                  Terms of Service
                </MyLink>
              </li>
            </ul>
            <p className="footer-link text-xs mt-8 sm:mt-4 text-center">
              Copyright © 2022. All Rights Reserved by Bithu{' '}
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 w-full hidden md:flex items-center justify-between">
          <img src={footerLeft} alt="footerLeft" />
          <img src={footerRight} alt="footerRight" />
        </div>
      </div>
    </div>
  )
}
