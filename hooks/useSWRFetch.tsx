import useSWR from "swr";
import fetcher from "../libs/fetcher";

export default function useSWRFetch(user: string, query: string, limit: number, page: number) {
  const apiRoute = user.length > 1
    ? `/api/user${user}` : '/api/gallery' + (query ? `/${query}` : '') + `/?limit=${limit}&page=${page}`;
  const { data, error } = useSWR(apiRoute, fetcher);
  return {
    data: data,
    loading: !error && !data,
    error: error || JSON.stringify(data) === '{}'
  }
}