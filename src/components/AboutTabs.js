import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import aboutImg from "../imgs/Auction.jpg";

function AboutTabs(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

AboutTabs.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="About" {...a11yProps(0)} />
                    <Tab label="The Team" {...a11yProps(1)} />
                    <Tab label="Careers" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <div className="auctionabout-img">
                <AboutTabs value={value} index={0}>
                    <img src={aboutImg} alt="auction" width="350" height="350" ></img>
                </AboutTabs>
            </div>
            <AboutTabs value={value} index={0}>

            </AboutTabs>
            <AboutTabs value={value} index={1}>
                <img src={aboutImg} alt="auction" width="350" height="350" ></img>
            </AboutTabs>
            <AboutTabs value={value} index={2}>
                <img src={aboutImg} alt="auction" width="350" height="350" ></img>
            </AboutTabs>
        </Box>
    );
}