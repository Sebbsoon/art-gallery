import { ThemeProvider } from '@emotion/react';
import { AppBar, Container, createTheme, Toolbar, Typography } from '@mui/material';
import AppAppBar from './components/AppAppBar.js';
import importGallery from './ImportGallery.js';
import ImagesDisplay from './components/ImagesDisplay.js';

function App() {
  const theme = createTheme();
  const images = importGallery();
  console.log(images)

  return (
    <ThemeProvider theme={theme}>
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
        <ImagesDisplay images={images} />
    </ThemeProvider>
  );
}

export default App
