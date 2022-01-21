import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sofa from "../../imgs/Sofa.jpg";
import noImg from "../../imgs/Image_not_available.png"
import auctionData from "../AuctionItems";

function BrowsePage() {

    return (
        <>
            <div className="browseheader">
                <label>Featured Items</label>
            </div>

            <div className="item1">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="Cream Sofa"
                        height="140"
                        image={Sofa}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Cream Sofa
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Current Bid:
                        </Typography>
                        <Typography variant="body3" color="text.secondary">
                            £550
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Place Bid</Button>
                        <Button size="small">Share</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}

export default BrowsePage;