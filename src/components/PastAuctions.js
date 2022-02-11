import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function PastAuctions() {

    const [auctionItem, setAuctionItem] = useState("");
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setAuctionItem(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="pastauctions-box">
            <div className="pastauctions-input">
                <h3>Placeholder</h3>
            </div>
            <div className="pastauctions-dropmenu">
                <Button sx={{ display: 'block', mt: 2, BackgroundColor: 'grey', color: 'grey' }} onClick={handleOpen}>
                    Open Menu
                </Button>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-controlled-open-select-label">Select One</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={auctionItem}
                        label="Select One"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"1"}>My Auctions</MenuItem>
                        <MenuItem value={"2"}>Completed Auctions</MenuItem>
                        <MenuItem value={"3"}>Expired Auctions</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default PastAuctions;