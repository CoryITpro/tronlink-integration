import { Container } from '@mui/material'
import React from 'react'
import headingLeftDesign from './../../assets/headingLeftDesign.png'
import headingRightDesign from './../../assets/headingRightDesign.png'
import roadmapMiddleLine from './../../assets/roadmapMiddleLine.png'
import btndesignImg from './../../assets/btndesignImg.png'
import rightSquares from './../../assets/rightSquares.png'
import trueIcon from './../../assets/trueIcon.png'
import meshGrad from './../../assets/meshGrad.png'
import './Roadmap.css'
import { MobileRoadmap } from './MobileRoadmap'
export const Roadmap = () => {
  return (
    <div className="py-14 lg:py-4 relative" id="roadmap">
      <img
        src={meshGrad}
        alt="meshGrad"
        className="absolute -bottom-24 right-20 lg:right-1/4 xl:right-1/3 w-3/4 lg:w-1/2 xl:w-2/5"
      />
      <Container maxWidth={'lg'}>
        <div className="lg:px-14 xl:px-28">
          <div className="flex items-center justify-center gap-x-3">
            <img src={headingLeftDesign} alt="headingLeftDesign" />
            <h1 className="uppercase text-sm font-bold small-heading">
              our goals
            </h1>
            <img src={headingRightDesign} alt="headingRightDesign" />
          </div>
          <h1 className="uppercase text-white font-bold text-3xl sm:text-4xl text-center mt-4">
            roadmap
          </h1>
          <div className='block sm:hidden'>
            <MobileRoadmap></MobileRoadmap>
          </div>
          <div className="hidden sm:grid sm:grid-cols-11 mt-14 gap-x-14">
            <div className="col-span-5">
              <div className="roadmap-cards px-6 py-5 relative mt-8">
                <img
                  src={rightSquares}
                  alt="rightSquares"
                  className="w-4 absolute top-1 right-1"
                />
                <div className="w-8 h-8 roadmap-cards absolute -right-8 -top-8"></div>
                <div className="flex items-center justify-between">
                  <h1 className="roadmap-card-heading text-lg font-bold uppercase">
                    Phase 1
                  </h1>
                  <img src={trueIcon} alt="trueIcon" className="w-3" />
                </div>
                <p className="content text-white text-sm mt-4">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced.
                </p>
              </div>
              <div className="roadmap-cards px-6 py-5 relative mt-24">
                <img
                  src={rightSquares}
                  alt="rightSquares"
                  className="w-4 absolute top-1 right-1"
                />
                <div className="w-8 h-8 roadmap-cards absolute -right-8 -top-8"></div>
                <div className="flex items-center justify-between">
                  <h1 className="roadmap-card-heading text-lg font-bold uppercase">
                    Phase 3
                  </h1>
                  <img src={trueIcon} alt="trueIcon" className="w-3" />
                </div>
                <p className="content text-white text-sm mt-4">
                  Reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced.
                </p>
              </div>
              <div className="roadmap-cards px-6 py-5 relative mt-24">
                <img
                  src={rightSquares}
                  alt="rightSquares"
                  className="w-4 absolute top-1 right-1"
                />
                <div className="w-8 h-8 roadmap-cards absolute -right-8 -top-8"></div>
                <div className="flex items-center justify-between">
                  <h1 className="roadmap-card-heading text-lg font-bold uppercase">
                    Phase 5
                  </h1>
                  <img src={trueIcon} alt="trueIcon" className="w-3" />
                </div>
                <p className="content text-white text-sm mt-4">
                  On the other hand, we denounce with righteous indignation and
                  dislike men
                </p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                src={roadmapMiddleLine}
                alt="roadmapMiddleLine"
                className="roadmapMiddleLine"
              />
            </div>
            <div className="col-span-5 pt-36">
              <div className="roadmap-cards px-6 py-5 relative lg:mt-2">
                <img
                  src={btndesignImg}
                  alt="btndesignImg"
                  className="w-4 absolute top-1 left-1"
                />
                <div className="w-8 h-8 roadmap-cards absolute -left-8 -top-8"></div>
                <div className="flex items-center justify-between">
                  <h1 className="roadmap-card-heading text-lg font-bold uppercase">
                    Phase 2
                  </h1>
                  <img src={trueIcon} alt="trueIcon" className="w-3" />
                </div>
                <p className="content text-white text-sm mt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
              </div>
              <div className="roadmap-cards px-6 py-5 relative mt-24">
                <img
                  src={btndesignImg}
                  alt="btndesignImg"
                  className="w-4 absolute top-1 left-1"
                />
                <div className="w-8 h-8 roadmap-cards absolute -left-8 -top-8"></div>
                <div className="flex items-center justify-between">
                  <h1 className="roadmap-card-heading text-lg font-bold uppercase">
                    Phase 4
                  </h1>
                  <img src={trueIcon} alt="trueIcon" className="w-3" />
                </div>
                <p className="content text-white text-sm mt-4">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced.
                </p>
              </div>
              <div className="roadmap-cards px-6 py-5 relative mt-24">
                <img
                  src={btndesignImg}
                  alt="btndesignImg"
                  className="w-4 absolute top-1 left-1"
                />
                <div className="w-8 h-8 roadmap-cards absolute -left-8 -top-8"></div>
                <div className="flex items-center justify-between">
                  <h1 className="roadmap-card-heading text-lg font-bold uppercase">
                    Phase 6
                  </h1>
                  <img src={trueIcon} alt="trueIcon" className="w-3" />
                </div>
                <p className="content text-white text-sm mt-4">
                  Reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
