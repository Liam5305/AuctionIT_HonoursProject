import React, { useState } from "react";
import { Items } from "../AuctionArray/Items";
import { TopSellingItems } from "../AuctionArray/Items";
import { FeaturedItems } from "../AuctionArray/Items";
import Button from "@mui/material/Button";
import Popout from "../PopOut";

function BrowsePage() {

    const [item] = useState("");
    const [buttonPopout, setButtonPopout] = useState(false);
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
                                <h4>£{post.price}</h4>
                            </div>
                            <Button
                                style={{
                                    borderColor: "#f8f8f8",
                                    backgroundColor: "#b0b0b0",
                                    width: "125px",
                                    height: "45px",
                                    fontSize: "10px"
                                }}
                                variant="outlined" onClick={() => setButtonPopout(true)}>Select This!</Button>
                            <Popout trigger={buttonPopout} setTrigger={setButtonPopout}>
                                <img src={post.image} alt="{post.image}" width={325} height={225} />
                                <h3>{post.item}</h3>
                                <h4>Current Bid:</h4>
                                <h4>£{post.price}</h4>
                                <Button>Buy</Button>
                            </Popout>
                        </div>
                    ))
                }
            </div>

            <div className="feat-items">
                <label>All Items</label>
            </div>

            {
                Items.filter(post => {
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
                            <h4>£{post.price}</h4>
                        </div>
                        <Button
                            style={{
                                borderColor: "#f8f8f8",
                                backgroundColor: "#b0b0b0",
                                width: "125px",
                                height: "45px",
                                fontSize: "10px",
                            }}
                            variant="outlined">Select This!
                        </Button>
                    </div>
                ))
            }

        </>
    );
}

export default BrowsePage;