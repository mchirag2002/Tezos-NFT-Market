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
import Create from "./layouts/Create";
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


            {/* <center style={{ width: '100%' }}> */}
            <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', display: { visible } }}>
                <div className="intro-box">
                    <h1>WELCOME TO THE WORLD</h1>
                    <h1>OF <span style={{ color: '#f8835c' }}>OPPORTUNITIES</span></h1>
                    <p>The place to buy, sell, trade and enjoy NFTs. Increase your portfolio liquidity and
                        diversification, find
                        the price for your collections and help grow your movement.
                        <br /> Or maybe just browse and appreciate the awesome work done by the community.
                    </p>
                    {/* <div className="buttons">
                        {selector.userAddress !== "" ? (<button>Buy NFTs</button>) : null}
                        {selector.userAddress !== "" ? (<button>Showcase your talent</button>) : null}
                        {selector.userAddress !== "" ? (<button>I would rather see</button>) : null}
                    </div> */}
                </div>

                <div className="nft" style={{ width: '70vw' }}>
                    <div className="nft-display" style={{ marginLeft: '0' }}>
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
                        <div className="nft-display-carousel" style={{ width: '54%', height: 'fitContent' }}>
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
                        {selector.userAddress !== "" ? (<Link className="item" to="/App"><button>Explore the Marketplace</button></Link>) : null}
                    </div>
                </div>

                <div className="footer">
                    <hr />
                    <p>©Fracto-NFT - 2023 | All rights reserved.</p>
                </div>
            </div>
            {/* </center> */}
            {/* </Router> */}
        </>
    )
};
export default Test;
