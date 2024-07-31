import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import {url} from "../../router/AppRouter";
import {useEffect} from "react";

const NavApp = () => {
    const urlPathName = useLocation().pathname.split('/')[2];
    const [valueNav, setValue] = React.useState('/');
    useEffect(() => {
        setValue(urlPathName)
    }, )
    return (
        <Box sx={{ backgroundColor: 'transparent' }}>
            <BottomNavigation
                sx={{borderRadius: "25px"}}
                showLabels={false}
                value={valueNav}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    component={NavLink} to={url + '/quiz'}
                    value="quiz"
                    label="quiz"
                    icon={<AutoAwesomeIcon />}
                />
                <BottomNavigationAction
                    component={NavLink} to={url + '/login'}
                    value="login"
                    label="login"
                    icon={<AccountCircleIcon />}
                />
            </BottomNavigation>
        </Box>
    )
}
export default NavApp;