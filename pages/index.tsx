import {Welcome} from "../components/Welcome";
import useSWR from 'swr';
import {useEffect, useState} from "react";
import useSWRFetch from "../components/hooks/useSWRFetch";
import ImageGallery from "../components/ImageGallery";
import SearchHandler from "../components/SearchHandler";
import { useRouter } from "next/router";
import {SWRConfig} from "swr";
import fetcher from "../libs/fetcher";

export default function Home({ fallback }) {
  const router = useRouter();
  const {search} = router.query
  const [query, setQuery] = useState(null);
  const url = query ? "/search/photos" : "/photos/random";
  console.log(query)

  const { data, error } = useSWR(
    '/api/search',
    fetcher
  )


  useEffect(() => {
    setQuery(search);
  }, [search]);

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

          {/*{isLoading && <Loading />}*/}
          {/*{isError && <Error />}*/}
          {data && <ImageGallery data={data}/>}
        </div>

    )
}