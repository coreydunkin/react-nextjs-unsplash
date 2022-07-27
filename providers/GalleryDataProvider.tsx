import React, {useEffect, useState} from 'react';
import {IGalleryDataContext, IunsplashDataResult} from '../libs/types';
import useSWRFetch from '../hooks/useSWRFetch';
import {useRouter} from 'next/router';

export const GalleryDataContext = React.createContext<IGalleryDataContext>({} as IGalleryDataContext);

function GalleryContextProvider({ children }) {
  // Set the initial values for the gallery page
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<null | string>(null);
  const limit: number = 10;
  const {data, loading, error}: IunsplashDataResult = useSWRFetch(router.isReady && router.asPath, query, limit, page);
  const value = {page, setPage, query, setQuery, limit, data, loading, error};
  return (
    <GalleryDataContext.Provider value={value}>
      {children}
    </GalleryDataContext.Provider>
  )
}

export default GalleryContextProvider
