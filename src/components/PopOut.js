import React from "react";
import Button from "@mui/material/Button";

function Popout(props) {
    return (props.trigger) ? (
        <div className="popout">
            <div className="popout-inner">
                <Button className="close-btn" onClick={() => props.setTrigger(false)}>Close</Button>
                { props.children }</div>
        </div>
    ) : "";
}

export default Popout;