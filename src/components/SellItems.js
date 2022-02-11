import React from "react";
import noImg from "../imgs/Image_not_available.png";
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';

function SellPage() {

    const Input = styled('input')({
        display: 'none',
      });

    return (
        <div className="sellitems-box">
            <div className="sellitems-page">
                <img src={noImg} alt="No Image Available" width="300" height="250"></img>
                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
            </div>

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
        </div>
    )
}

export default SellPage;