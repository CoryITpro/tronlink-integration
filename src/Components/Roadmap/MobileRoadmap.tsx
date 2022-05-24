import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@mui/material'
import React from 'react'
import btndesignImg from './../../assets/btndesignImg.png'
import rightSquares from './../../assets/rightSquares.png'
import trueIcon from './../../assets/trueIcon.png'
import roadmapMiddleLine from './../../assets/roadmapMiddleLine.png'

import './Roadmap.css'
export const MobileRoadmap = () => {
  return (
    <div className="mt-16">
      <Container maxWidth={'lg'}>
        <div>
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
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced.
            </p>
          </div>
          <div className="col-span-12 flex flex-col gap-y-2 mt-10 items-center justify-center">
            <img src={roadmapMiddleLine} alt="roadmapMiddleLine" className='rounded-full bg-opacity-50 w-2 h-40' />
          </div>
          <div className="roadmap-cards px-6 py-5 relative  mt-10">
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
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
          <div className="col-span-12 flex flex-col gap-y-2 mt-10 items-center justify-center">
            <img src={roadmapMiddleLine} alt="roadmapMiddleLine" className='rounded-full bg-opacity-50 w-2 h-40' />
          </div>
          <div className="roadmap-cards px-6 py-5 relative mt-10">
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
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced.
            </p>
          </div>
          <div className="col-span-12 flex flex-col gap-y-2 mt-10 items-center justify-center">
            <img src={roadmapMiddleLine} alt="roadmapMiddleLine" className='rounded-full bg-opacity-50 w-2 h-40' />
          </div>
          <div className="roadmap-cards px-6 py-5 relative mt-10">
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
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced.
            </p>
          </div>
          <div className="col-span-12 flex flex-col gap-y-2 mt-10 items-center justify-center">
            <img src={roadmapMiddleLine} alt="roadmapMiddleLine" className='rounded-full bg-opacity-50 w-2 h-40' />
          </div>
          <div className="roadmap-cards px-6 py-5 relative mt-10">
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
          <div className="col-span-12 flex flex-col gap-y-2 mt-10 items-center justify-center">
            <img src={roadmapMiddleLine} alt="roadmapMiddleLine" className='rounded-full bg-opacity-50 w-2 h-40' />
          </div>
          <div className="roadmap-cards px-6 py-5 relative mt-10">
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
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
