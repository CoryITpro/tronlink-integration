import { Container } from '@mui/material'
import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import mintbtnShape from './../../assets/mintbtnShape.png'
import config, {abi} from "../../config"
import './Header.css'

export const Header = (props) => {
  const { connectWallet, walletAddress, setStatus } = props
  const doMint =  async () => {
    try {
      const contract = await window.tronWeb.contract().at(config.contractAddress)
      const ownerAddress = await contract.owner().call()
      const myAddress = window.tronWeb.address.toHex(walletAddress)
      const param = [{
        type: 'uint256',
        value: 1
      }]
      var options = {
        feeLimit:100000000,
        callValue: 0
      }
      if (ownerAddress != myAddress) {
        const cost = await contract.cost().call()
        options.callValue = cost.toNumber()
      }

      const transaction = await window.tronWeb.transactionBuilder.triggerSmartContract(
        config.contractAddress,
        "mint(uint256)",
        options,
        param,
        walletAddress
      );
      const signedTransaction = await window.tronWeb.trx.sign(transaction.transaction, false)
      const minted = await window.tronWeb.trx.sendRawTransaction(signedTransaction);
      setStatus({
        message: "Minting done",
        color: 'info'
      })
    } catch(e) {
      console.log(e)
      setStatus({
        message: e,
        color: 'info'
      })
    }
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
