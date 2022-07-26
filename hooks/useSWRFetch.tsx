import useSWR from "swr";
import fetcher from "../libs/fetcher";

export default function useSWRFetch(query: string, limit: number, page: number) {
  const { data, error } = useSWR('/api/gallery' + (query ? `/${query}` : '') + `/?limit=${limit}&page=${page}`, fetcher);
  return {
    data: data,
    loading: !error && !data,
    error: error
  }
}