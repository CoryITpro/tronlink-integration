import { Container } from '@mui/material'
import React from 'react'
import headingLeftDesign from './../../assets/headingLeftDesign.png'
import headingRightDesign from './../../assets/headingRightDesign.png'
import btndesignImg from './../../assets/btndesignImg.png'
import rightSquares from './../../assets/rightSquares.png'
import twittIcon from './../../assets/twittIcon.png'
import instaIcon from './../../assets/instaIcon.png'
import inIcon from './../../assets/inIcon.png'
import './Team.css'
export const Team = () => {
  return (
    <div className="team py-20 lg:-mt-14" id="team">
      <Container maxWidth={'lg'}>
        <div className='lg:px-14 xl:px-28'>
          <div className="flex items-center justify-center gap-x-3">
            <img src={headingLeftDesign} alt="headingLeftDesign" />
            <h1 className="uppercase text-sm font-bold small-heading">
              TEAM MEMBERS
            </h1>
            <img src={headingRightDesign} alt="headingRightDesign" />
          </div>
          <h1 className="uppercase text-white font-bold text-3xl sm:text-4xl text-center mt-4">
            Meet The Crew
          </h1>
          <div className="grid grid-cols-12 gap-y-5 lg:gap-y-0 sm:gap-x-5 mt-10">
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 team-card p-4 relative h-72 lg:h-60 flex justify-center items-center lg:items-end">
                <div className='absolute bottom-0 left-0 right-0 w-full flex items-center justify-evenly social-div'>
                    <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={twittIcon} alt="twittIcon" className='w-3' />
                    </button>
                     <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={instaIcon} alt="instaIcon" className='w-3' />
                    </button>
                     <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={inIcon} alt="inIcon" className='w-3' />
                    </button>
                </div>
              <img
                src={rightSquares}
                alt="rightSquares"
                className="w-4 squaresImg absolute top-1 right-1"
              />
              <img
                  src={btndesignImg}
                  alt="rightSquares"
                  className="w-4 squaresImg absolute top-1 left-1"
                />
                <div className='flex flex-col items-center lg:mb-8'>
                    <h1 className='text-white font-bold text-lg'>Berneice Tran</h1>
                    <p className='text-white text-sm'>Founder</p>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 team-card p-4 relative h-72 lg:h-60 flex justify-center items-center lg:items-end">
                <div className='absolute bottom-0 left-0 right-0 w-full flex items-center justify-evenly social-div'>
                    <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={twittIcon} alt="twittIcon" className='w-3' />
                    </button>
                     <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={instaIcon} alt="instaIcon" className='w-3' />
                    </button>
                     <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={inIcon} alt="inIcon" className='w-3' />
                    </button>
                </div>
              <img
                src={rightSquares}
                alt="rightSquares"
                className="w-4 squaresImg absolute top-1 right-1"
              />
              <img
                  src={btndesignImg}
                  alt="rightSquares"
                  className="w-4 squaresImg absolute top-1 left-1"
                />
                <div className='flex flex-col items-center lg:mb-8'>
                    <h1 className='text-white font-bold text-lg'>Nathan Bean</h1>
                    <p className='text-white text-sm'>Co-Founder</p>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 team-card p-4 relative h-72 lg:h-60 flex justify-center items-center lg:items-end">
                <div className='absolute bottom-0 left-0 right-0 w-full flex items-center justify-evenly social-div'>
                    <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={twittIcon} alt="twittIcon" className='w-3' />
                    </button>
                     <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={instaIcon} alt="instaIcon" className='w-3' />
                    </button>
                     <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={inIcon} alt="inIcon" className='w-3' />
                    </button>
                </div>
              <img
                src={rightSquares}
                alt="rightSquares"
                className="w-4 squaresImg absolute top-1 right-1"
              />
              <img
                  src={btndesignImg}
                  alt="rightSquares"
                  className="w-4 squaresImg absolute top-1 left-1"
                />
                <div className='flex flex-col items-center lg:mb-8'>
                    <h1 className='text-white font-bold text-lg'>Lynnette Wilkes</h1>
                    <p className='text-white text-sm'>Artist</p>
                </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 team-card p-4 relative h-72 lg:h-60 flex justify-center items-center lg:items-end">
                <div className='absolute bottom-0 left-0 right-0 w-full flex items-center justify-evenly social-div'>
                    <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={twittIcon} alt="twittIcon" className='w-3' />
                    </button>
                     <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={instaIcon} alt="instaIcon" className='w-3' />
                    </button>
                     <button className='social-btn w-8 h-6 flex justify-center items-center pt-1'>
                        <img src={inIcon} alt="inIcon" className='w-3' />
                    </button>
                </div>
              <img
                src={rightSquares}
                alt="rightSquares"
                className="w-4 squaresImg absolute top-1 right-1"
              />
              <img
                  src={btndesignImg}
                  alt="rightSquares"
                  className="w-4 squaresImg absolute top-1 left-1"
                />
                <div className='flex flex-col items-center lg:mb-8'>
                    <h1 className='text-white font-bold text-lg'>Claudia Hicks</h1>
                    <p className='text-white text-sm'>Co-Artist</p>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
