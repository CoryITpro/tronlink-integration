import React, { useState } from 'react'
import { Container } from '@mui/material'
import logo from './../../assets/logo.png'
import dis_logo from './../../assets/dis_logo.png'
import btndesignImg from './../../assets/btndesignImg.png'
import connectIcon from './../../assets/connectIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { MyLink } from './scroll'
export const Navbar = (props: any) => {
  const [showNav, setShowNav] = useState(false)
  const { connectWallet, walletAddress } = props

  return (
    <div className="py-6">
      <Container maxWidth={'lg'}>
        <div className="sm:px-10 xl:px-20 flex items-center justify-between">
          <div className="flex items-center gap-x-5">
            <button
              onClick={() => {
                setShowNav(true)
              }}
              className="lg:hidden hidden sm:block"
            >
              <FontAwesomeIcon icon={faBars} className="text-xl text-white" />
            </button>
            <img src={logo} alt="logo" className="w-24" />
          </div>
          <div className="flex items-center gap-x-28">
            <button
              onClick={() => {
                setShowNav(true)
              }}
              className="sm:hidden block"
            >
              <FontAwesomeIcon icon={faBars} className="text-xl text-white" />
            </button>
            <ul className="hidden lg:flex items-center gap-x-10">
              <li>
                <MyLink
                  onClick={() => {
                    setShowNav(false)
                  }}
                  smooth={true}
                  duration={800}
                  to="home"
                  className="text-white cursor-pointer uppercase text-xs font-semibold"
                >
                  Home
                </MyLink>
              </li>
              <li>
                <MyLink
                  onClick={() => {
                    setShowNav(false)
                  }}
                  smooth={true}
                  duration={800}
                  to="about"
                  className="text-white cursor-pointer uppercase text-xs font-semibold"
                >
                  About
                </MyLink>
              </li>
              <li>
                <MyLink
                  onClick={() => {
                    setShowNav(false)
                  }}
                  smooth={true}
                  duration={800}
                  to="roadmap"
                  className="text-white cursor-pointer uppercase text-xs font-semibold"
                >
                  Roadmap
                </MyLink>
              </li>
              <li>
                <MyLink
                  onClick={() => {
                    setShowNav(false)
                  }}
                  smooth={true}
                  duration={800}
                  to="team"
                  className="text-white cursor-pointer uppercase text-xs font-semibold"
                >
                  Team
                </MyLink>
              </li>
              <li>
                <MyLink
                  onClick={() => {
                    setShowNav(false)
                  }}
                  smooth={true}
                  duration={800}
                  to="faq"
                  className="text-white cursor-pointer uppercase text-xs font-semibold"
                >
                  Faq
                </MyLink>
              </li>
            </ul>
            <div className="hidden sm:flex items-center gap-x-5">
              <button className="flex items-center gap-x-2 relative border py-2 px-4">
                <img src={dis_logo} alt="dis_logo" className="w-4" />
                <img
                  src={btndesignImg}
                  alt="btndesignImg"
                  className="w-3 absolute top-1 left-1"
                />
                <span className="text-white text-xs font-semibold">JOIN</span>
              </button>
              {walletAddress ?
                <button className="flex items-center gap-x-2 relative bg-gray-100 bg-opacity-20 py-2 px-4">
                  <img src={connectIcon} alt="connectIcon" className="w-3" />
                  <img
                    src={btndesignImg}
                    alt="btndesignImg"
                    className="w-3 absolute top-1 left-1"
                  />
                  <span className="text-white text-xs font-semibold">
                    {walletAddress.slice(0,6)}... {walletAddress.slice(-4)}
                  </span>
                </button> :
                <button className="flex items-center gap-x-2 relative bg-gray-100 bg-opacity-20 py-2 px-4" onClick={connectWallet}>
                  <img src={connectIcon} alt="connectIcon" className="w-3" />
                  <img
                    src={btndesignImg}
                    alt="btndesignImg"
                    className="w-3 absolute top-1 left-1"
                  />
                  <span className="text-white text-xs font-semibold">
                    CONNECT
                  </span>
                </button>
              }
            </div>
          </div>
        </div>
      </Container>
      <div
        className={`${showNav ? 'top-0' : '-top-full'
          } fixed duration-500 left-0 right-0 w-full h-full bg-black z-10 flex flex-col gap-y-14 justify-center items-center`}
      >
        <button
          onClick={() => {
            setShowNav(false)
          }}
          className="absolute top-5 right-5"
        >
          <FontAwesomeIcon icon={faClose} className="text-2xl text-white" />
        </button>
        <ul className="flex flex-col justify-center items-center gap-y-10">
          <li>
            <MyLink
              onClick={() => {
                setShowNav(false)
              }}
              smooth={true}
              duration={800}
              to="home"
              className="text-white cursor-pointer uppercase text-sm font-semibold"
            >
              Home
            </MyLink>
          </li>
          <li>
            <MyLink
              onClick={() => {
                setShowNav(false)
              }}
              smooth={true}
              duration={800}
              to="about"
              className="text-white cursor-pointer uppercase text-sm font-semibold"
            >
              About
            </MyLink>
          </li>
          <li>
            <MyLink
              onClick={() => {
                setShowNav(false)
              }}
              smooth={true}
              duration={800}
              to="roadmap"
              className="text-white cursor-pointer uppercase text-sm font-semibold"
            >
              Roadmap
            </MyLink>
          </li>
          <li>
            <MyLink
              onClick={() => {
                setShowNav(false)
              }}
              smooth={true}
              duration={800}
              to="team"
              className="text-white cursor-pointer uppercase text-sm font-semibold"
            >
              Team
            </MyLink>
          </li>
          <li>
            <MyLink
              onClick={() => {
                setShowNav(false)
              }}
              smooth={true}
              duration={800}
              to="faq"
              className="text-white cursor-pointer uppercase text-sm font-semibold"
            >
              Faq
            </MyLink>
          </li>
        </ul>
        <div className="flex sm:hidden items-center gap-x-5">
          <button className="flex items-center gap-x-2 relative border py-2 px-4">
            <img src={dis_logo} alt="dis_logo" className="w-4" />
            <img
              src={btndesignImg}
              alt="btndesignImg"
              className="w-3 absolute top-1 left-1"
            />
            <span className="text-white text-xs font-semibold">JOIN</span>
          </button>
          <button className="flex items-center gap-x-2 relative bg-gray-100 bg-opacity-20 py-2 px-4" onClick={connectWallet}>
            <img src={connectIcon} alt="connectIcon" className="w-3" />
            <img
              src={btndesignImg}
              alt="btndesignImg"
              className="w-3 absolute top-1 left-1"
            />
            <span className="text-white text-xs font-semibold">CONNECT</span>
          </button>
        </div>
      </div>
    </div>
  )
}
