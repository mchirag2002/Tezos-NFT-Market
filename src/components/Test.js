import React from 'react'
import App from './App'
import "./css/style.css"
import { useSelector, useDispatch } from "react-redux";
import {
    connectWallet,
    disconnectWallet,
    incrementData,
    decrementData,
} from "../actions";
import {
    BrowserRouter,
    Link,
    useRouteMatch,
} from "react-router-dom";
import { Route, Routes, Switch } from "react-router";

const Test = ({ Tezos, wallet, setTezos }) => {
    const selector = useSelector((state) => {
        return state.walletConfig.user;
    });
    const dispatch = useDispatch();
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
                                    <a className="nav-link" href="index.html" style={{ color: 'aliceblue' }}>Home</a>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="market.html" style={{ color: 'aliceblue' }}>Catalogue</a> */}
                                    {selector.userAddress !== "" ? (
                                        <Link className="item" to="/App" style={{ textDecoration: 'none', color: 'aliceblue' }}>
                                            Market Place
                                        </Link>
                                    ) : null}
                                </li>
                                <li className="nav-item">
                                    {selector.userAddress !== "" ? (
                                        <Link className="item" to="/create" style={{ textDecoration: 'none', color: 'aliceblue' }}>
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
            <Routes>
                <Route path="/app" element={<App />}>
                </Route>
            </Routes>
            <center>
                <div className="intro-box">
                    <h1>WELCOME TO THE WORLD</h1>
                    <h1>OF <span style={{ color: '#f8835c' }}>OPPORTUNITIES</span></h1>
                    <p>The place to buy, sell, trade and enjoy NFTs. Increase your portfolio liquidity and
                        diversification, find
                        the price for your collections and help grow your movement.
                        <br /> Or maybe just browse and appreciate the awesome work done by the community.
                    </p>
                    <div className="buttons">
                        {selector.userAddress !== "" ? (<button>Buy NFTs</button>) : null}
                        {selector.userAddress !== "" ? (<button>Showcase your talent</button>) : null}
                        {selector.userAddress !== "" ? (<button>I would rather see</button>) : null}
                    </div>
                </div>
                <center>
                    <div className="nft" style={{ width: '70vw' }}>
                        <div className="nft-display">
                            <div className="nft-display-content">
                                <h1> Find Awesome Creations</h1>
                                <h2>The place to buy, sell and trade NFTs.</h2>
                                <p>Grow your portfolio and lead the market on the NFT marketplace. View the different
                                    statuses of NFTs
                                    available for sale, bid, or buy them.<br />
                                    Use the Tezos India Network to complete all your transactions. Enjoy the optimized usability and
                                    quick view of available entities.
                                </p>
                                <h2 style={{ marginTop: '40px' }}> Art is an explosion ❌</h2>
                                <h1>Help art explode ✅</h1>
                                <h2>Upvote the art pieces you like and help the creators reach a wider audience</h2>
                                <p>PS: want them to create something for you? Just use our website to connect with the artist and
                                    get it done 😉</p>
                            </div>
                            <div className="nft-display-carousel">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src="./images/nft1.jpg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="./images/nft2.jpg" alt="Second slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                        data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                        data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="buttons button-nft">
                            {selector.userAddress !== "" ? (<button>Explore the Marketplace</button>) : null}
                        </div>
                    </div>
                </center>
                <div className="footer">
                    <hr />
                    <p>©Fracto-NFT - 2023 | All rights reserved.</p>
                </div>
            </center>
            {/* </Router> */}
        </>
    )
};
export default Test;
