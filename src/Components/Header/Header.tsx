import { Container } from '@mui/material'
import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import mintbtnShape from './../../assets/mintbtnShape.png'
import config from "../../config"
import './Header.css'

export const Header = (props: any) => {
  const { connectWallet, walletAddress } = props
  const doMint =  async () => {
    let instance = await window.tronWeb.contract().at(config.contractAddress);
    console.log(instance)
  }

  return (
    <div className="header" id="home">
      <Navbar connectWallet={connectWallet} walletAddress={walletAddress}></Navbar>
      <div className="flex h-5/6 items-center justify-center">
        <Container maxWidth={'lg'}>
          <div className="flex flex-col items-center justify-center pt-32 starsBg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-wrap text-center">
              Public Sale <span className="live">Live !</span>
            </h1>
            <p className="text-white text-2xl md:text-3xl font-bold text-center mt-5">
              4331 / 9999 MINTED
              <br />
              TIME LEFT 08 : 25 : 49 : 03
            </p>
            <button className="text-black mint-btn px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold mt-10 relative" disabled={walletAddress ? false : true} onClick={doMint}>
              <img
                src={mintbtnShape}
                alt="mintbtnShape"
                className="w-4 z-10 absolute top-1 left-1"
              />
              <span>MINT NOW</span>
            </button>
          </div>
        </Container>
      </div>
    </div>
  )
}
