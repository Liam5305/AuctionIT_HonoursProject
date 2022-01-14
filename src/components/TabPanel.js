import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
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

TabPanel.propTypes = {
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
                    <Tab label="Google Map" {...a11yProps(0)} />
                    <Tab label="HQ Address Details" {...a11yProps(1)} />
                    <Tab label="Contact Details" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Google Map
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h3>Buchanan Galleries</h3>
                <p>Glasgow</p>
                <p>G1 2GF</p>
                <p>Floor G-2 Buchanan Galleries</p>
                <hr/>
                <p>Monday   10am-6pm</p>
                <p>Tuesday   9.30am-6pm</p>
                <p>Wednesday   9.30am-6pm</p>
                <p>Thursday   9.30am-7pm</p>
                <p>Friday   9.30am-6pm</p>
                <p>Saturday   9am-6pm</p>
                <p>Sunday   10am-6pm</p>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h2>CEO - Liam Rutherford</h2>
                <h3>Owner of AuctionIt</h3>
                <p>Phone Number - 0141 774 2214</p>
                <p>Email Address - l.rutherford@aucit.com</p>
            </TabPanel>
        </Box>
    );
}