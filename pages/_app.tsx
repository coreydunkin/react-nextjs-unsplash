import '../styles/globals.scss'
import React, {useState} from 'react';
import {IGalleryDataContext} from "../libs/types";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {styled} from "@mui/system";

export const GalleryDataContext = React.createContext<IGalleryDataContext>({} as IGalleryDataContext);

const StyledContainer = styled(Container)`
  background-color: #eee;
  padding: 1em;
  box-shadow: 0px 0px 19px 14px rgb(0 0 0 / 5%);
  border-left: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
`;

function MyApp({ Component, pageProps }) {
  // Set the initial values for the gallery page
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<null | string>(null);
  const limit: number = 10;
  const value = {page, query, limit, setPage, setQuery};

  return (
    <GalleryDataContext.Provider value={value}>
      <CssBaseline />
      <StyledContainer maxWidth="lg">
        <Box>
          <Component {...pageProps} />
        </Box>
      </StyledContainer>
    </GalleryDataContext.Provider>
  )
}

export default MyApp
