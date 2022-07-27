import '../styles/globals.scss'
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {styled} from '@mui/material';
import GalleryContextProvider from '../providers/GalleryDataProvider';

const StyledContainer = styled(Container)`
  background-color: #eee;
  padding: 1em;
  box-shadow: 0px 0px 19px 14px rgb(0 0 0 / 5%);
  border-left: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
`;

function MyApp({ Component, pageProps }) {
  return (
    <GalleryContextProvider>
      <CssBaseline />
      <StyledContainer maxWidth='lg'>
        <Box>
          <Component {...pageProps} />
        </Box>
      </StyledContainer>
    </GalleryContextProvider>
  )
}

export default MyApp
