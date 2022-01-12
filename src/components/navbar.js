import React from 'react';
import { getAuth } from 'firebase/auth';
import { List, ListItemButton, ListIteemI, ListItemIcon, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const Navbar = () => {
    const auth = getAuth();

    const signout = () => {
        auth.signOut();
    }

    return (
        <List id="navbar">
            <IconButton onClick={signout} sx={{ background: '#e4e4e7'}}>
                <LogoutIcon />
            </IconButton>
        </List>
    );
}