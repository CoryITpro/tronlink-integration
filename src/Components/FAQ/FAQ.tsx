import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@mui/material'
import headingLeftDesign from './../../assets/headingLeftDesign.png'
import headingRightDesign from './../../assets/headingRightDesign.png'
import meshGrad2 from './../../assets/meshGrad2.png'
import React, { useRef, useState } from 'react'
import './FAQ.css'
export const FAQ = () => {
  const [active, setActive] = useState('')

  const contentSpace1 = useRef(null)
  const contentSpace2 = useRef(null)
  const contentSpace3 = useRef(null)
  const contentSpace4 = useRef(null)
  const contentSpace5 = useRef(null)
  const contentSpace6 = useRef(null)

  function toggleAccordion(label: any) {
    if (label !== active) {
      setActive(label)
    } else {
      setActive('')
    }
  }
  return (
    <div className="py-20" id="faq">
      <Container maxWidth={'lg'}>
        <div className='relative z-10'>
          <div>
            <div className="flex items-center justify-center gap-x-3">
              <img src={headingLeftDesign} alt="headingLeftDesign" />
              <h1 className="text-center uppercase text-sm font-bold small-heading">
              QUESTIONS & ANSWERS
              </h1>
              <img src={headingRightDesign} alt="headingRightDesign" />
            </div>
            <h1 className="uppercase text-white font-bold text-3xl sm:text-4xl text-center mt-4">
            FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>
          <div className="w-full md:w-4/5 lg:w-3/5 mx-auto mt-14 relative">
          <img src={meshGrad2} alt="meshGrad2" className='absolute w-full left-0 z-0 top-20' />
            <div className="w-full duration-500 overflow-hidden">
              <div className={`${active === "What is MiNFT" ? "answer" : "question"} flex text-white items-center gap-x-4 justify-between py-4 px-5 relative z-10"`}>
                <h1
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="text-xl"
                >
                  What is MiNFT
                </h1>
                <button
                  onClick={() => {
                    toggleAccordion('What is MiNFT')
                  }}
                  className="box-border appearance-none relative z-10"
                >
                  <FontAwesomeIcon
                    icon={active === 'What is MiNFT' ? faMinus : faPlus}
                    className={`text-white duration-700`}
                    style={{ fontSize: '20px' }}
                  />
                </button>
              </div>

              <div
                ref={contentSpace1}
                className="overflow-hidden transition-max-height duration-700 ease-in-out answer px-5"
                // @ts-ignore
                style={{
                  maxHeight: `${
                    active === 'What is MiNFT'
                      ? // @ts-ignore
                        `${contentSpace1.current.scrollHeight}px`
                      : '0px'
                  }`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="break-words text-white my-5"
                >
                  It has roots in a piece of classical Latin literature from 45
                  BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur cites of the word
                  in classical literature.
                </p>
              </div>
            </div>
            <div className="w-full duration-500 overflow-hidden">
              <div className={`${active === 'How we can buy and invest NFT' ? "answer" : "question"} flex text-white items-center gap-x-4 justify-between py-4 px-5 relative z-10"`}>
                <h1
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="text-xl"
                >
                  How we can buy and invest NFT
                </h1>
                <button
                  onClick={() => {
                    toggleAccordion('How we can buy and invest NFT')
                  }}
                  className="box-border appearance-none relative z-10"
                >
                 <FontAwesomeIcon
                    icon={active === 'How we can buy and invest NFT' ? faMinus : faPlus}
                    className={`text-white duration-700`}
                    style={{ fontSize: '20px' }}
                  />
                </button>
              </div>

              <div
                ref={contentSpace2}
                className="overflow-hidden transition-max-height duration-700 ease-in-out answer px-5"
                // @ts-ignore
                style={{
                  maxHeight: `${
                    active === 'How we can buy and invest NFT'
                      ? // @ts-ignore
                        `${contentSpace2.current.scrollHeight}px`
                      : '0px'
                  }`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="break-words text-white my-5"
                >
                  It has roots in a piece of classical Latin literature from 45
                  BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur cites of the word
                  in classical literature.
                </p>
              </div>
            </div>
            <div className="w-full duration-500 overflow-hidden">
              <div className={`${active === "Why we should choose MiNFT" ? "answer" : "question"} flex text-white items-center gap-x-4 justify-between py-4 px-5 relative z-10"`}>
                <h1
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="text-xl"
                >
                  Why we should choose MiNFT
                </h1>
                <button
                  onClick={() => {
                    toggleAccordion('Why we should choose MiNFT')
                  }}
                  className="box-border appearance-none relative z-10"
                >
                <FontAwesomeIcon
                    icon={active === 'Why we should choose MiNFT' ? faMinus : faPlus}
                    className={`text-white duration-700`}
                    style={{ fontSize: '20px' }}
                  />
                </button>
              </div>

              <div
                ref={contentSpace3}
                className="overflow-hidden transition-max-height duration-700 ease-in-out answer px-5"
                // @ts-ignore
                style={{
                  maxHeight: `${
                    active === 'Why we should choose MiNFT'
                      ? // @ts-ignore
                        `${contentSpace3.current.scrollHeight}px`
                      : '0px'
                  }`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="break-words text-white my-5"
                >
                  It has roots in a piece of classical Latin literature from 45
                  BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur cites of the word
                  in classical literature.
                </p>
              </div>
            </div>
            <div className="w-full duration-500 overflow-hidden">
              <div className={`${active === "Where we can buy and sell NFts" ? "answer" : "question"} flex text-white items-center gap-x-4 justify-between py-4 px-5 relative z-10"`}>
                <h1
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="text-xl"
                >
                  Where we can buy and sell NFts
                </h1>
                <button
                  onClick={() => {
                    toggleAccordion('Where we can buy and sell NFts')
                  }}
                  className="box-border appearance-none relative z-10"
                >
                  <FontAwesomeIcon
                    icon={active === 'Where we can buy and sell NFts' ? faMinus : faPlus}
                    className={`text-white duration-700`}
                    style={{ fontSize: '20px' }}
                  />
                </button>
              </div>

              <div
                ref={contentSpace4}
                className="overflow-hidden transition-max-height duration-700 ease-in-out answer px-5"
                // @ts-ignore
                style={{
                  maxHeight: `${
                    active === 'Where we can buy and sell NFts'
                      ? // @ts-ignore
                        `${contentSpace4.current.scrollHeight}px`
                      : '0px'
                  }`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="break-words text-white my-5"
                >
                  It has roots in a piece of classical Latin literature from 45
                  BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur cites of the word
                  in classical literature.
                </p>
              </div>
            </div>
            <div className="w-full duration-500 overflow-hidden">
              <div className={`${active === "How secure is this token ?" ? "answer" : "question"} flex text-white items-center gap-x-4 justify-between py-4 px-5 relative z-10"`}>
                <h1
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="text-xl"
                >
                  How secure is this token ?
                </h1>
                <button
                  onClick={() => {
                    toggleAccordion('How secure is this token ?')
                  }}
                  className="box-border appearance-none relative z-10"
                >
                   <FontAwesomeIcon
                    icon={active === 'How secure is this token ?' ? faMinus : faPlus}
                    className={`text-white duration-700`}
                    style={{ fontSize: '20px' }}
                  />
                </button>
              </div>

              <div
                ref={contentSpace5}
                className="overflow-hidden transition-max-height duration-700 ease-in-out answer px-5"
                // @ts-ignore
                style={{
                  maxHeight: `${
                    active === 'How secure is this token ?'
                      ? // @ts-ignore
                        `${contentSpace5.current.scrollHeight}px`
                      : '0px'
                  }`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="break-words text-white my-5"
                >
                  It has roots in a piece of classical Latin literature from 45
                  BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur cites of the word
                  in classical literature.
                </p>
              </div>
            </div>
            <div className="w-full duration-500 overflow-hidden">
              <div className={`${active === "What is your contract address ?" ? "answer" : "question"} flex text-white items-center gap-x-4 justify-between py-4 px-5 relative z-10"`}>
                <h1
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="text-xl"
                >
                  What is your contract address ?
                </h1>
                <button
                  onClick={() => {
                    toggleAccordion('What is your contract address ?')
                  }}
                  className="box-border appearance-none relative z-10"
                >
                  <FontAwesomeIcon
                    icon={active === 'What is your contract address ?' ? faMinus : faPlus}
                    className={`text-white duration-700`}
                    style={{ fontSize: '20px' }}
                  />
                </button>
              </div>

              <div
                ref={contentSpace6}
                className="overflow-hidden transition-max-height duration-700 ease-in-out answer px-5"
                // @ts-ignore
                style={{
                  maxHeight: `${
                    active === 'What is your contract address ?'
                      ? // @ts-ignore
                        `${contentSpace6.current.scrollHeight}px`
                      : '0px'
                  }`,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Sora',Helvetica,Arial,Lucida,sans-serif",
                  }}
                  className="break-words text-white my-5"
                >
                  It has roots in a piece of classical Latin literature from 45
                  BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur cites of the word
                  in classical literature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
