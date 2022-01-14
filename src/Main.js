import React, { Component } from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Browse from "./Browse";
import Sell from "./Sell";
import ContactUs from "./Contact";
import AboutUs from "./About";
import MyAuctions from "./MyAuctions";
import Join from "./JoinUs";
import Register from "./Register";

class Main extends Component {
    render() {
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
                            <Route exact path="/" element={<Home />}/>
                            <Route path="/browse" element={<Browse />}/>
                            <Route path="/sell" element={<Sell />}/>
                            <Route path="/contact" element={<ContactUs />}/>
                            <Route path="/about" element={<AboutUs />}/>
                            <Route path="/my-auctions" element={<MyAuctions />}/>
                            <Route path="/join" element={<Join />}/>
                            <Route path="/register" element={<Register />}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;