import {useContext, useEffect, useState} from "react";
import ImageGallery from "../components/ImageGallery";
import Search from "../components/Search";
import useSWRFetch from "../hooks/useSWRFetch";
import {GalleryDataContext} from "./_app";
import {ButtonGroup, Button} from "@mui/material";
import {Grid} from "@mui/material";
import {IunsplashDataResult} from "../libs/types";

export default function Home() {
  const { query, page, limit, setPage } = useContext(GalleryDataContext);
  const { data, loading, error }: IunsplashDataResult = useSWRFetch(query, limit, page);
  return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <Search />
          </Grid>
          <Grid item xs={12} md={2}>
            {query !== null &&
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button disabled={page === 1} onClick={() => setPage(page > 1 ? page - 1 : 1)}>Previous</Button>
                <Button onClick={() => setPage(page + 1)}>Next</Button>
              </ButtonGroup>
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