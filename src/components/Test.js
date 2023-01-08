import React from 'react'
import App from './App'
import Withnav from './Withnav'
import "./css/style.css"
import { useSelector, useDispatch } from "react-redux";
import {
    connectWallet,
    disconnectWallet,
    incrementData,
    decrementData,
} from "../actions";
import Create from "./layouts/Create";
import {
    BrowserRouter,
    Link,
    useRouteMatch,
} from "react-router-dom";
import { Route, Routes, Switch } from "react-router";
import Home from "./layouts/Home";
// import Create from "./layouts/Create";
import Show from "./layouts/Show";

const Test = ({ Tezos, wallet, setTezos }) => {
    const selector = useSelector((state) => {
        return state.walletConfig.user;
    });
    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState("block");
    const onClick = (event) => {
        event.preventDefault();
        if (selector.userAddress === "") {
            dispatch(connectWallet({ Tezos, wallet }));
        } else {
            dispatch(disconnectWallet({ wallet, setTezos }));
        }
    };
    return (
        <>
            {/* <Router> */}
            <header>

                <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
                    <div className="container">
                        <a className="navbar-brand" href="#!"><span style={{ color: '#73dbd5' }}>Fracto-</span><span
                            style={{ color: 'aliceblue' }}>NFT</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" style={{ color: 'white' }}>--</i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto" style={{ display: 'flex', alignItems: 'baseline' }}>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/withnav' style={{ color: 'aliceblue', marginLeft: '10px' }} onClick={() => setVisible("block")}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="market.html" style={{ color: 'aliceblue' }}>Catalogue</a> */}
                                    {selector.userAddress !== "" ? (
                                        <Link className="item" to='/app' style={{ textDecoration: 'none', color: 'aliceblue', marginLeft: '10px' }} onClick={() => setVisible("none")}>
                                            Market Place
                                        </Link>
                                    ) : null}
                                </li>
                                <li className="nav-item">
                                    {selector.userAddress !== "" ? (
                                        <Link className="item" to="/create" style={{ textDecoration: 'none', color: 'aliceblue', marginLeft: '10px' }}>
                                            Create NFT
                                        </Link>
                                    ) : null}

                                    {/* <a className="nav-link" href="#!" style={{ color: 'aliceblue' }}>Sell</a> */}
                                </li>

                            </ul>
                            <div className="button-navbar">
                                {selector.userAddress === "" ? (
                                    <button onClick={onClick}>Connect your wallet</button>
                                ) : (<button onClick={onClick}>Disconnect Wallet</button>)}

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            
            {/* <center style={{ width: '100%' }}> */}

            {/* </center> */}
            {/* </Router> */}
        </>
    )
};
export default Test;
