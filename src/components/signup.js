import React from "react";
import { Link } from 'react-router-dom';
import { TextField, Button } from "@mui/material";

export const Signup = () => {
    return (
        <div id="signup-wrapper">
            <form id="signup-box">
                <TextField
                className='text-input'
                label="username"
                type="text"
                required
                />

                <TextField
                className='text-input'
                label="password"
                type="text"
                required
                />

                <TextField
                className='text-input'
                label="password"
                type="text"
                required
                />

                <TextField
                className='text-input'
                label="email"
                type="text"
                required
                />

                <div id="bottom-btns">
                    <Link to="/">
                        <Button variant="contained">
                            cancel
                        </Button>
                    </Link>

                    <Button variant="contained" type="submit">
                        sign up
                    </Button>
                </div>

            </form>
        </div>
    );
}