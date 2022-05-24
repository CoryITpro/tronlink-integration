import { Container } from '@mui/material'
import React from 'react'
import headingLeftDesign from './../../assets/headingLeftDesign.png'
import headingRightDesign from './../../assets/headingRightDesign.png'
import gammingIcon from './../../assets/gammingIcon.png'
import coinIcon from './../../assets/coinIcon.png'
import metaverseIcon from './../../assets/metaverseIcon.svg'
import './About.css'
export const About = () => {
  return (
    <div className='py-20' id="about">
      <div className="pb-20 about">
        <Container maxWidth={'lg'}>
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60">
            <div className="flex items-center justify-center gap-x-3">
              <img src={headingLeftDesign} alt="headingLeftDesign" />
              <h1 className="uppercase text-sm font-bold small-heading">
                The Story
              </h1>
              <img src={headingRightDesign} alt="headingRightDesign" />
            </div>
            <h1 className="uppercase text-white font-bold text-3xl sm:text-4xl text-center mt-4">
              About Us
            </h1>
            <div className="flex flex-col gap-y-8 mt-14">
              <p className="text-sm text-center content">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur cites of the
                word in classical literature.
              </p>
              <p className="text-sm text-center content">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original a latin professor at
                Hampden-Sydney
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-y-5 sm:gap-y-0 items-center gap-x-5 justify-evenly mt-14">
              <div className="flex flex-col gap-y-2 items-center">
                <p className="uppercase text-white text-md font-bold">
                  TO be minted
                </p>
                <p className="font-bold text-2xl text-white">9,999</p>
              </div>
              <div className="flex flex-col gap-y-2 items-center">
                <p className="uppercase text-white text-md font-bold">
                  TO be minted
                </p>
                <p className="font-bold text-2xl text-white">9,999</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container maxWidth={'lg'}>
          <div className='grid grid-cols-12 gap-y-5 lg:gap-y-0 gap-x-5 lg:px-14 xl:px-28'>
            <div className="aboutFeatureCard col-span-12 sm:col-span-6 lg:col-span-4 px-8 py-6">
              <div className="flex items-center gap-x-5">
                <img src={gammingIcon} alt="gammingIcon" />
                <h1 className="text-white text-lg font-bold">Gamming NFTs</h1>
              </div>
              <p className='content text-white text-sm mt-4'>
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure.
              </p>
            </div>
            <div className="aboutFeatureCard col-span-12 sm:col-span-6 lg:col-span-4 px-8 py-6">
              <div className="flex items-center gap-x-5">
                <img src={coinIcon} alt="coinIcon" />
                <h1 className="text-white text-lg font-bold">Gamming NFTs</h1>
              </div>
              <p className='content text-white text-sm mt-4'>
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure.
              </p>
            </div>
            <div className="aboutFeatureCard col-span-12 sm:col-span-6 lg:col-span-4 px-8 py-6">
              <div className="flex items-center gap-x-5">
                <img src={metaverseIcon} alt="metaverseIcon"/>
                <h1 className="text-white text-lg font-bold">Gamming NFTs</h1>
              </div>
              <p className='content text-white text-sm mt-4'>
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
