import React, { Component } from "react";
import TextField from "@mui/material/TextField";

function ContactPage() {
    return (
        <div className="team-help">
            <h2>How can the team help you today?</h2>
            <br/>
            <TextField id="oulined-basic" label="Search AuctionIt Help!"variant="outlined" />
        </div>
    );
}

export default ContactPage;