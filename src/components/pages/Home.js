import React, { useState } from "react";
import bagImg from "../../imgs/backpack1.png"
import laptopImg from "../../imgs/laptop1.png";
import notepadImg from "../../imgs/notepad1.jpg";
import Button from "@mui/material/Button";
// import { shadows } from '@mui/system';
// import Box from '@mui/material/Box';
import { FeaturedItems } from "../AuctionArray/FeaturedItems.js";

function HomePage() {
    const [item] = useState("")

    return (
        <>
            <div>
                <div className="seasonal-advert">
                    <h2>Back to Uni?</h2>
                    <h3>We've got all that you need!</h3>
                    <Button
                        style={{
                            borderColor: '#f8f8f8',
                            color: "#f8f8f8"
                        }}
                        variant="outlined">Shop Now!
                    </Button>
                </div>

                <div className="img1">
                    {/* Laptop Image */}
                    <img src={laptopImg} alt="Laptop" width="250" height="250" ></img>
                </div>
                <div className="img2">
                    {/* NotePad Image */}
                    <img src={notepadImg} alt="Notepad" width="200" height="250" ></img>
                </div>
                <div className="img3">
                    {/* BackPack Image */}
                    <img src={bagImg} alt="BackPack" width="200" height="250" ></img>
                </div>


                <br />

                <div className="feat-items">
                    <label>Featured Items</label>
                </div>

                <div>

                    {
                        FeaturedItems.filter(post => {
                            if (item === '') {
                                return post;
                            } else if (post.item.toLowerCase().includes(item.toLowerCase())) {
                                return post;
                            }
                        }).map((post, index) => (
                            <div className="auction-items" key={index}>
                                <div id="auc-img">
                                    <img src={post.image} alt="{post.image}" width={325} height={225} />
                                </div>
                                <h3>{post.item}</h3>
                                <h4>Current Bid:</h4>
                                <div id="post-price">
                                    <h5>£{post.price}</h5>
                                </div>
                                <div className="post-startdates">
                                    <h4>Start Date: {post.startdate}</h4>
                                </div>
                                <div className="post-enddates">
                                    <h4>End Date: {post.enddate}</h4>
                                </div>                                  <Button
                                    style={{
                                        borderColor: "#f8f8f8",
                                        backgroundColor: "#b0b0b0",
                                        color: "#f8f8f8",
                                        width: "125px",
                                        height: "45px",
                                        fontSize: "10px"
                                    }}
                                    variant="outlined">Select This!
                                </Button>
                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    );
}

export default HomePage;