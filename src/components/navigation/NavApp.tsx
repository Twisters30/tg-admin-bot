import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const NavApp = () => {
    const location = useLocation();
    console.log(location.pathname);
    const [valueNav, setValue] = React.useState(0);
    return (
        <Box sx={{ backgroundColor: 'transparent' }}>
            <BottomNavigation
                sx={{borderRadius: "25px"}}
                showLabels
                value={valueNav}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction classes={{selected: "Mui-selected"}} className={location.pathname === '/login' ? 'Mui-selected' : ''} component={NavLink} to="/login" label="login" icon={<AccountCircleIcon />} />
                <BottomNavigationAction classes={{selected: "Mui-selected"}} className={location.pathname === '/' ? 'Mui-selected' : ''} component={NavLink} to="/" label="quiz" icon={<AutoAwesomeIcon />} />
                
            </BottomNavigation>
        </Box>
    )
}
export default NavApp;