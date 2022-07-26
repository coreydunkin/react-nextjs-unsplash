import {useEffect, useState} from "react";
import ImageGallery from "../components/ImageGallery";
import Search from "../components/Search";
import useSWRFetch from "../hooks/useSWRFetch";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<null | string>(null);
  const limit: number = 5;
  const {data, loading, error} = useSWRFetch(query, limit, page);

  const handleSubmit = (val) => {
    setQuery(val);
  };

  const handleClear = () => {
    setQuery(null);
  };

  if(error) return <div>Error fetching data</div>
  if(loading) return <div>Loading...</div>

  return (
      <div>

        <Search handleSubmit={handleSubmit} handleClear={handleClear} />
        <p>Show us the {query} query</p>
        {query !== null &&
          <>
            <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>decrement</button>
            <button onClick={() => setPage(page + 1)}>Increment</button>
          </>
        }

        {page}
        {/*{isLoading && <Loading />}*/}
        {/*{isError && <Error />}*/}
        {data && <ImageGallery data={data}/>}

        {/*{JSON.stringify(data)}*/}

      </div>
    )
}