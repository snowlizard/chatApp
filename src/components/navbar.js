import React from 'react';
import { getAuth } from 'firebase/auth';
import { List, ListItemButton, ListItemText } from '@mui/material';

const style = {
    textAlign: 'center'
}

export const Navbar = () => {
    const auth = getAuth();

    const signout = () => {
        auth.signOut();
    }

    return (
        <List id="signOut">
            <ListItemButton onClick={signout}
                style={style}
                component='nav'>
                <ListItemText>Sign Out</ListItemText>
            </ListItemButton>
        </List>
    );
}