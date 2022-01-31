import React, { useState } from "react";

import noImg from "../../imgs/Image_not_available.png"

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Input = styled('input')({
    display: 'none',
});

function SellPage() {

    const [list, setList] = useState([]);

    function AddData() {
        const items = list;
        setList([...items, `item-${items.length}`]);
    };

    return (
        <div className="sell-items">
            <form>
                <img src={noImg} alt="No Image" width="400" height="350" ></img>
                <Box style={{ display: "flex", justifyContent: "left", flexWrap: "wrap", listStyle: "none" }}>
                    <Stack>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">Upload</Button>
                        </label>
                    </Stack>
                </Box>
                <div className="sell-settings">
                    <form>
                        <input type="text" id="title" placeholder="title"></input>
                        <br />
                        <input type="text" id="price" placeholder="price"></input>
                        <br />
                        <input type="text" id="startdate" placeholder="startdate"></input>
                        <br />
                        <input type="text" id="enddate" placeholder="enddate"></input>
                        <br />
                        <textarea></textarea>
                    </form>
                </div>
            </form>
            <div className="auction-viewer">
                <Box id="sellButtons">
                    {/* <div id="auctionBtns">
                        <Button variant="contained">My Auctions</Button>
                        <Button variant="contained">Completed Auctions</Button>
                        <Button variant="contained">Expired Auctions</Button>
                    </div> */}
                    <div id="postBtn">
                        <Button variant="contained" onClick={AddData} >Post Auction</Button>
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default SellPage;