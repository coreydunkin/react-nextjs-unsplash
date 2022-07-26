import {useContext, useEffect, useState} from "react";
import ImageGallery from "../components/ImageGallery";
import Search from "../components/Search";
import useSWRFetch from "../hooks/useSWRFetch";
import {GalleryDataContext} from "./_app";
import {Grid} from "@mui/material";
import {IunsplashDataResult} from "../libs/types";
import PaginationItem from '../components/PaginationItem';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Home() {
  const {query, page, limit} = useContext(GalleryDataContext);
  const {data, loading, error}: IunsplashDataResult = useSWRFetch(query, limit, page);
  const pageData = {...data, query};
  return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Search />
          </Grid>
          <Grid item xs={12} md={4}>
            <PaginationItem data={pageData} />
          </Grid>
        </Grid>
        {loading && <Loading />}
        {error && <Error />}
        {data && <ImageGallery data={data.results}/>}
      </div>
    )
}