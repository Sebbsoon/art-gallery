
import { Toolbar, Typography, Container, Box, Menu, MenuItem, Button, Tooltip, IconButton, Avatar, AppBar } from '@mui/material';

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