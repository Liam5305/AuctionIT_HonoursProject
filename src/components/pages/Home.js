import React, { useState } from "react";
import bagImg from "../../imgs/backpack1.png"
import laptopImg from "../../imgs/laptop1.png";
import notepadImg from "../../imgs/notepad1.jpg";
import Button from "@mui/material/Button";
import { shadows } from '@mui/system';
import Box from '@mui/material/Box';
import auctionItemsData from "../auction-items.json";

function HomePage() {
    const [item, setItems] = useState("")

    return (
        <>
            <div>
                <div className="seasonal-advert">
                    <Box sx={{
                        boxShadow: 3,
                        padding: 2,
                        backgroundColor: "#4361FF"
                    }} >
                        <h2>Back to Uni?</h2>
                        <h3>We've got all that you need!</h3>

                        {/* Laptop Image */}
                        <img src={laptopImg} alt="Laptop" width="200" height="250" ></img>
                        {/* NotePad Image */}
                        <img src={notepadImg} alt="Notepad" width="200" height="250" ></img>
                        {/* BackPack Image */}
                        <img src={bagImg} alt="BackPack" width="200" height="250" ></img>
                        <br />
                        <Button
                            style={{
                                borderColor: "#f8f8f8",
                                color: "#f8f8f8"
                            }}
                            variant="outlined">Shop Now!
                        </Button>
                    </Box>
                </div>
                <br />

                <div>

                    {
                        auctionItemsData.filter(post => {
                            if (item === '') {
                                return post;
                            } else if (post.item.toLowerCase().includes(item.toLowerCase())) {
                                return post;
                            }
                        }).map((post, index) => (
                            <div className="auction-items" key={index}>
                                <h3>{post.item}</h3>
                                <p>Current Bid:</p>
                                <div id="post-price">
                                    <p>£{post.price}</p>
                                </div>
                                <button>Select</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default HomePage;