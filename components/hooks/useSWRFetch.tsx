import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const BASE_URL: string = "https://api.unsplash.com";
const clientId: string = "vh4NSIgCqqFDWs1-KE6bbjpBn7Rj-r1xQ0kNvqaDqlo";

const swrConfig = {
  revalidateOnFocus: false // on window focus stop refresh
};

function useSWRFetch(url: string, query = null) {
  const isQuery = query ? `&query=${query}` : '';
  const requestUrl = `${BASE_URL}${url}${isQuery}&client_id=${clientId}`;
  const { data, error } = useSWR(requestUrl, fetcher, swrConfig);

  return {
    data: data && query ? data.results : data,
    isLoading: !error && !data,
    isError: error
  };
}

export default useSWRFetch;
