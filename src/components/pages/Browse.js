import React, { useState } from "react";
import { TopSellingItems } from "../AuctionArray/TopSelling";
import { ItemsClosing } from "../AuctionArray/ClosingSoon";
import Button from "@mui/material/Button";

function BrowsePage() {

    const [item] = useState("")
    return (
        <>
            <div className="feat-items">
                <label>Top-Selling</label>
            </div>

            <div>
                {
                    TopSellingItems.filter(post => {
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
                            <Button
                                style={{
                                    borderColor: "#f8f8f8",
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

            <div className="feat-items">
                <label>Closing Soon!</label>
            </div>

            <div>
            {
                    ItemsClosing.filter(post => {
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
                            <Button
                                style={{
                                    borderColor: "#f8f8f8",
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

        </>
    );
}

export default BrowsePage;