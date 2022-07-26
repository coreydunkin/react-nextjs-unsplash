import '../styles/globals.scss'
import React, {useState} from 'react';
import useSWRFetch from "../hooks/useSWRFetch";

export const GalleryDataContext = React.createContext({});

function MyApp({ Component, pageProps }) {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<null | string>(null);
  const limit: number = 5;
  const value = {page, query, limit, setPage, setQuery};

  return (
    <GalleryDataContext.Provider value={value}>
      <Component {...pageProps} />
    </GalleryDataContext.Provider>

  )
}

export default MyApp
