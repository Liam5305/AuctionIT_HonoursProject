import React, { Component } from "react";
import bagImg from "./imgs/backpack1.png";
import laptopImg from "./imgs/laptop1.png";
import notepadImg from "./imgs/notepad1.jpg";
import Button from "@mui/material/Button";

class Home extends Component {
    render() {
        return (
            <div className="seasonal-advert">
                <h2>Back to Uni?</h2>
                <h3>We've got all that you need!</h3>

                {/* Laptop Image */}
                <img src={laptopImg} alt="Laptop" width="200" height="250" ></img>
                {/* NotePad Image */}
                <img src={notepadImg} alt="Notepad" width="200" height="250" ></img>
                {/* BackPack Image */}
                <img src={bagImg} alt="BackPack" width="200" height="250" ></img>
                <br/>
                    <Button 
                        style={{
                            borderColor: "#f8f8f8",
                            color: "#f8f8f8"
                        }}
                        variant="outlined">Shop Now!
                    </Button>
            </div>
        );
    }
}

export default Home;