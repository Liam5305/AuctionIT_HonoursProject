import React, { Component } from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import HomePage from "./Home";
import BrowsePage from "./Browse";
import sellPage from "./Sell";
import ContactUs from "./Contact";
import AboutUs from "./About";
import myAuctions from "./MyAuctions";
import JoinPage from "./JoinUs";
import RegisterPage from "./Register";

function Main() {
    return (
        <HashRouter>
            <div>
                <div className="auction-header">
                    <h1>AuctionIt</h1>
                    <ul className="nav">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/browse">Browse</NavLink></li>
                        <li><NavLink to="/sell">Sell</NavLink></li>
                        <li><NavLink to="/contact">Contact-Us</NavLink></li>
                        <li><NavLink to="/about">About-Us</NavLink></li>
                        <div className="second-nav">
                            <li><NavLink to="/my-auctions">My-Auctions</NavLink></li>
                            <li><NavLink to="/join">Join</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </div>
                    </ul>
                </div>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/browse" element={<BrowsePage />} />
                        <Route path="/sell" element={<sellPage />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/my-auctions" element={<myAuctions />} />
                        <Route path="/join" element={<JoinPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default Main;