import React, { useState } from "react";
import bagImg from "../../imgs/backpack1.png"
import laptopImg from "../../imgs/laptop1.png";
import notepadImg from "../../imgs/notepad1.jpg";
import Button from "@mui/material/Button";
import { shadows } from '@mui/system';
import Box from '@mui/material/Box';
import { aucItems } from "../auction-items.js";

function HomePage() {
    const [item] = useState("")

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
                        aucItems.filter(post => {
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
                                </div>                                  <button>Select</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default HomePage;