import {useContext, useEffect, useState} from "react";
import ImageGallery from "../components/ImageGallery";
import Search from "../components/Search";
import useSWRFetch from "../hooks/useSWRFetch";
import {GalleryDataContext} from "./_app";

export default function Home() {
  const { query, page, limit, setPage } = useContext(GalleryDataContext);
  const {data, loading, error} = useSWRFetch(query, limit, page);
  console.log(data)
  return (
      <div>

        <Search />
        <p>Show us the {query} query</p>
        {query !== null &&
          <>
            <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>decrement</button>
            <button onClick={() => setPage(page + 1)}>Increment</button>
          </>
        }

        {/*{isLoading && <Loading />}*/}
        {/*{isError && <Error />}*/}
        {data && <ImageGallery data={data}/>}

        {/*{JSON.stringify(data)}*/}

      </div>
    )
}