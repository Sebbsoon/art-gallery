
import { Toolbar, Typography, Container, Box, Menu, MenuItem, Button, Tooltip, IconButton, Avatar, AppBar } from '@mui/material';
import { useState } from 'react';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function AppAppBar() {

    return (
        <AppBar>
            <Container >
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                    >
                        LOGO
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>

    );
} 