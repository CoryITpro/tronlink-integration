import { useEffect, useState } from "react";
import { About } from "../Components/About/About";
import { Community } from "../Components/Community/Community";
import { FAQ } from "../Components/FAQ/FAQ";
import { Header } from "../Components/Header/Header";
import { Partners } from "../Components/Partners/Partners";
import { Roadmap } from "../Components/Roadmap/Roadmap";
import { Team } from "../Components/Team/Team";
import "./Home.css"
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {
    connectWallet,
    listenWalletChanges
} from "../util/interact.js";

export const Home = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState(null);
    const [changed, setChanged] = useState(true);
    const changeStatus = (status) => {
        setStatus(status)
        changed ? setChanged(false) : setChanged(true)
    }

    useEffect(() => {
        listenWalletChanges({setWallet, setStatus})
    })
    const connectWalletPressed = async () => {
        connectWallet({ setWallet, changeStatus })
    }

    useEffect(() => {
        if (status) {
            if (status.color == 'success')
                NotificationManager.success(status.message);
            else if (status.color == 'warning')
                NotificationManager.warning(status.message);
            else
                NotificationManager.info(status.message);
        }
    }, [status, changed])

    return (
        <div>
            <Header connectWallet={connectWalletPressed} walletAddress={walletAddress} setStatus={setStatus}></Header>
            <div className="h-52 zigzagShapes">
            </div>
            <About></About>
            <Roadmap></Roadmap>
            <Team></Team>
            <FAQ></FAQ>
            <Partners></Partners>
            <Community></Community>
            <NotificationContainer />
        </div>
    )
}