import {Welcome} from "../components/Welcome";
import useSWR from 'swr';
import {useEffect, useState} from "react";
import useSWRFetch from "../components/hooks/useSWRFetch";
import ImageGallery from "../components/ImageGallery";
import SearchHandler from "../components/SearchHandler";
import { useRouter } from "next/router";
import {SWRConfig} from "swr";
import fetcher from "../libs/fetcher";
import getDefaultSearch from "./api/search";
import getSearch from "./api/search/[search]";

export default function Home({ fallback }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const {search, count, pageNumber} = router.query;
  const [query, setQuery] = useState(null);
  const url = query ? "/search/photos" : "/photos/random";
  const limit = 2;

  const { data, error } = useSWR('/api/search' + (query ? `/${query}` : '') + `/?limit=${limit}&page=${page}`, fetcher);



  const handleSubmit = (val) => {
    setQuery(val);
  };

  const handleClear = () => {
    setQuery(null);
  };

  // Todo:
  // Create a users page
  // Pull in the search component into the users page
  // Style with styled components and tailwind
  // create error and loading pages

  return (
        <div>
          <SearchHandler handleSubmit={handleSubmit} handleClear={handleClear} />
          <p>Show us the {query} query</p>
          <p>Show us the search {search} param</p>
          <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>decrement</button>
          <button onClick={() => setPage(page + 1)}>Increment</button>
          {page}
          {/*{isLoading && <Loading />}*/}
          {/*{isError && <Error />}*/}
          {data && <ImageGallery data={data}/>}

          {/*{JSON.stringify(data)}*/}
        </div>

    )
}