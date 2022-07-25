import {useEffect, useState} from "react";
import ImageGallery from "../components/ImageGallery";
import SearchHandler from "../components/SearchHandler";
import useSWRFetch from "../hooks/useSWRFetch";

export default function Home() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const limit = 5;
  const {data, loading, error} = useSWRFetch(query, limit, page);

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
  if(error) return <div>Error fetching data</div>
  if(loading) return <div>Loading...</div>

  return (
        <div>
          <SearchHandler handleSubmit={handleSubmit} handleClear={handleClear} />
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