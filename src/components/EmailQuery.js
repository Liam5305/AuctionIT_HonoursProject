import React from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function FreqQuestions() {
    return (
        <div className="query_header">
            <h2>Do you have a query?</h2>
            <div className="query_items">
                <form>
                    <input type="text" id="fname" placeholder="Enter Your First Name"></input>
                    <br />
                    <input type="text" id="email" placeholder="Enter Your Email Address"></input>
                    <br /><input type="textarea" id="query" rows="4" cols="50" placeholder="What Is Your Query?"></input>
                    <br />
                    <Button variant="contained" endIcon={<SendIcon />} href="mailto:auctionit@gmail.com">
                        Send Query
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default FreqQuestions;