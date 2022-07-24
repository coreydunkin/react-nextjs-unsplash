import '../styles/globals.scss'
import {IunsplashDataContext} from "../libs/types";
import React, {useEffect, useState} from 'react';

export const AppDataContext = React.createContext<IunsplashDataContext>({} as IunsplashDataContext);

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState<{}>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const value: IunsplashDataContext = {data, searchValue, setSearchValue};

  return (
    <AppDataContext.Provider value={value}>
      <Component {...pageProps} />
    </AppDataContext.Provider>
  )
}

export default MyApp
