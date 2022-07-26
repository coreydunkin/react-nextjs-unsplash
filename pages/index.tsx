import {useContext, useEffect, useState} from "react";
import ImageGallery from "../components/ImageGallery";
import Search from "../components/Search";
import useSWRFetch from "../hooks/useSWRFetch";
import {GalleryDataContext} from "./_app";
import {ButtonGroup, Button} from "@mui/material";
import {Grid} from "@mui/material";
import {IunsplashDataResult} from "../libs/types";
import {Pagination} from "@mui/material";

export default function Home() {
  const {query, page, limit, setPage} = useContext(GalleryDataContext);
  const {data, loading, error}: IunsplashDataResult = useSWRFetch(query, limit, page);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Search />
          </Grid>
          <Grid item xs={12} md={4}>
            {query !== null && data?.totalPages > 0 &&
              <>
                <Pagination count={data?.totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange} />
              </>
            }
          </Grid>
        </Grid>



        {/*{isLoading && <Loading />}*/}
        {/*{isError && <Error />}*/}
        {data && <ImageGallery data={data.results}/>}

        {/*{JSON.stringify(data)}*/}

      </div>
    )
}