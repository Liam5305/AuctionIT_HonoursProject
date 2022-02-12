import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import aboutImg from "../imgs/Auction.jpg";
import noImg from "../imgs/Image_not_available.png";

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
                    <div className="about-box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra sodales quam, sit amet imperdiet urna varius scelerisque. Etiam vel orci arcu. Nam quis lobortis leo. Nullam vel porta quam, in scelerisque justo. Integer accumsan sed tortor elementum rutrum. Nunc ut eleifend risus, fringilla vulputate odio. Praesent vulputate eget ex a commodo. Nunc tempor aliquet metus et viverra. Duis sed luctus sem, sit amet condimentum tortor. Morbi fringilla, tellus et lacinia tempor, elit orci aliquet mi, eu eleifend lectus diam a massa. Vestibulum quis tellus id mi sollicitudin ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eu consectetur dui. Aliquam erat volutpat. Vivamus rutrum mattis massa. Vivamus pellentesque venenatis magna vel laoreet.

                            Nam pharetra erat ac venenatis gravida. Cras non mi elit. Donec vestibulum, odio sed molestie tempor, quam nisi tempus nisl, nec vehicula leo enim dignissim sem. In semper est vitae orci elementum, et iaculis odio auctor. Aenean sodales et diam eget euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vitae fringilla nibh. Sed id dolor ac justo tempor ultrices id id nunc. Vestibulum ligula libero, posuere quis ullamcorper sit amet, pretium vel magna. Sed sed ex ac nibh efficitur pretium. Suspendisse vitae neque hendrerit, pretium nulla sit amet, venenatis ligula.
                        </p>
                    </div>
                </AboutTabs>
                <AboutTabs value={value} index={1}>
                    <img src={aboutImg} alt="auction" width="350" height="350" ></img>
                    <div className="team-box">
                        <ul>
                            <img src={noImg} alt="invalid-img" width="200" height="150"></img>
                            <h3>Name</h3>
                            <h4>Role</h4>
                        </ul>
                    </div>
                </AboutTabs>
            </div>
            <AboutTabs value={value} index={1}>
            </AboutTabs>
            <AboutTabs value={value} index={2}>
            </AboutTabs>
        </Box>
    );
}