import { Container } from '@mui/material'
import React from 'react'
import headingLeftDesign from './../../assets/headingLeftDesign.png'
import headingRightDesign from './../../assets/headingRightDesign.png'
import p1 from './../../assets/p1.png'
import p2 from './../../assets/p2.png'
import p3 from './../../assets/p3.png'
import p4 from './../../assets/p4.png'
import p5 from './../../assets/p5.png'
import p6 from './../../assets/p6.png'
import p7 from './../../assets/p7.png'
import p8 from './../../assets/p8.png'
import './Partners.css'
export const Partners = () => {
  return (
    <div className="py-10">
      <Container maxWidth={'lg'}>
        <div className="lg:px-14 xl:px-28">
          <div className="flex items-center justify-center gap-x-3">
            <img src={headingLeftDesign} alt="headingLeftDesign" />
            <h1 className="uppercase text-sm font-bold small-heading">
              as seen in
            </h1>
            <img src={headingRightDesign} alt="headingRightDesign" />
          </div>
          <h1 className="uppercase text-white font-bold text-3xl sm:text-4xl text-center mt-4">
          Our Partners
          </h1>
          <div className="grid grid-cols-12 p-1 mainGrid mt-14">
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center h-24 light">
              <img src={p1} alt="p1" className="w-28 lg:w-32" />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center h-24 dark">
              <img src={p2} alt="p2" className="w-28 lg:w-32" />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center h-24 changeToDark">
              <img src={p3} alt="p3" className="w-28 lg:w-32" />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center h-24 changeToLight smallDark">
              <img src={p4} alt="p4" className="w-28 lg:w-32" />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center h-24 changeToLight">
              <img src={p5} alt="p5" className="w-28 lg:w-32" />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center h-24 changeToDark smallDark">
              <img src={p6} alt="p6" className="w-28 lg:w-32" />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center h-24 dark smallLight">
              <img src={p7} alt="p7" className="w-28 lg:w-32" />
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex justify-center items-center h-24 light smallDark">
              <img src={p8} alt="p8" className="w-28 lg:w-32" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
