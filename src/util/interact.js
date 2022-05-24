// import { pinJSONToIPFS } from "./pinata.js";
// require("dotenv").config();
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
// const contractABI = require("../contract-abi.json");
// const contractAddress = "0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE";
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey);
import config from "../config"

export const connectWallet = async (props) => {
  const { setWallet, changeStatus } = props
  if (window.tronWeb !== undefined) {
    if (window.tronWeb.defaultAddress) {
      if (window.tronWeb.defaultAddress.base58) {
        connectWindow(props)
      } else {
        setWallet("")
        setCookie("selectedWallet", "", 365)
        changeStatus("Wallet is installed but you must first log in.")
      }
    } else {
      connectWindow(props)
    }
  } else {
    setWallet("")
    setCookie("selectedWallet", "", 365)
    changeStatus("You must install TronLink, a virtual Tron wallet, in your browser.")
  }
}

export const listenWalletChanges = (props) => {
  const { setWallet, setStatus } = props
  window.addEventListener('message', async res => {
    if (res.data.message) {
      switch (res.data.message.action) {
        case "setAccount":
          if (window.tronWeb) {
            if (res.data.message.data.address !== getCookie('selectedWallet')) {
              window.location.reload();
            }
          } else {
            window.location.reload();
          }
          break;
        case "setNode":
          window.location.reload();
          break;
        case "disconnect":
        case "disconnectWeb":
          setWallet("")
          setStatus("Disconnected")
          break;
        default:
          break;
      }
    }
  });
}
const connectWindow = (props) => {
  const { setWallet, changeStatus } = props
  try {
    let timeCount = 0;
    window.tronLink.request({ method: 'tron_requestAccounts' });
    const tmpTimer1 = setInterval(() => {
      timeCount++;
      if (timeCount > 1000000000) {
        clearInterval(tmpTimer1);
        setWallet("")
        setCookie("selectedWallet", "", 365)
        changeStatus(" ")
      } else {
        if (window.tronLink.ready && window.tronWeb.defaultAddress && window.tronWeb.defaultAddress.base58) {
          clearInterval(tmpTimer1);
          window.tronWeb.setFullNode(config.httpAPI);
          window.tronWeb.setSolidityNode(config.httpAPI);
          if (window.tronWeb.setHeader && window.tronWeb.fullNode.host === config.httpAPI) {
            window.tronWeb.setHeader({ 'TRON-PRO-API-KEY': config.TRON_API_KEY });
            setWallet(window.tronWeb.defaultAddress.base58)
            setCookie("selectedWallet", window.tronWeb.defaultAddress.base58, 365)
            changeStatus("Connected!")
          } else {
            changeStatus("Please change to the " + config.chainName);
            setWallet("")
          }
        }
      }
    }, 1000);
  } catch (e) {
    console.log(e);
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// export const getCurrentWalletConnected = async () => {
//   if (window.ethereum) {
//     try {
//       const addressArray = await window.ethereum.request({
//         method: "eth_accounts",
//       });
//       if (addressArray.length > 0) {
//         return {
//           address: addressArray[0],
//           status: "👆🏽 Write a message in the text-field above.",
//         };
//       } else {
//         return {
//           address: "",
//           status: "🦊 Connect to Metamask using the top right button.",
//         };
//       }
//     } catch (err) {
//       return {
//         address: "",
//         status: "😥 " + err.message,
//       };
//     }
//   } else {
//     return {
//       address: "",
//       status: (
//         <span>
//           <p>
//             {" "}
//             🦊{" "}
//             <a target="_blank" href={`https://metamask.io/download.html`}>
//               You must install Metamask, a virtual Ethereum wallet, in your
//               browser.
//             </a>
//           </p>
//         </span>
//       ),
//     };
//   }
// };

// async function loadContract() {
//   return new web3.eth.Contract(contractABI, contractAddress);
// }

// export const mintNFT = async (url, name, description) => {
//   if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
//     return {
//       success: false,
//       status: "❗Please make sure all fields are completed before minting.",
//     };
//   }

//   //make metadata
//   const metadata = new Object();
//   metadata.name = name;
//   metadata.image = url;
//   metadata.description = description;

//   const pinataResponse = await pinJSONToIPFS(metadata);
//   if (!pinataResponse.success) {
//     return {
//       success: false,
//       status: "😢 Something went wrong while uploading your tokenURI.",
//     };
//   }
//   const tokenURI = pinataResponse.pinataUrl;

//   window.contract = await new web3.eth.Contract(contractABI, contractAddress);

//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.contract.methods
//       .mintNFT(window.ethereum.selectedAddress, tokenURI)
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
//         txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "😥 Something went wrong: " + error.message,
//     };
//   }
// };
