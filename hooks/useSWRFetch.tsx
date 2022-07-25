import useSWR from "swr";
import {IunsplashDataResult} from "../libs/types";
import fetcher from "../libs/fetcher";

export default function useSWRFetch(query: string, limit: number, page: number): IunsplashDataResult {
  const { data, error } = useSWR('/api/search' + (query ? `/${query}` : '') + `/?limit=${limit}&page=${page}`, fetcher);
  return {
    data: Array.isArray(data) && data.length > 0 ? data : [],
    loading: !error && !data,
    error: error
  }
}