import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import imageNotAvail from "../../imgs/Image_not_available.png"

function sellPage() {
    return (
        <div className="sell-items">
            <form>
                <img src={imageNotAvail} alt="No Image" width="400" height="350" ></img>
                <Box style={{ display: "flex", justifyContent: "left", flexWrap: "wrap", listStyle: "none" }}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>Add Image</Button>
                        <Button>Resize Current Image</Button>
                        <Button>Delete Image</Button>
                    </ButtonGroup>
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
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>My Auctions</Button>
                    <Button>Completed Auctions</Button>
                    <Button>Expired Auctions</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default sellPage;