import {Welcome} from "../components/Welcome";
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home({ pageProps }) {
  const { data, error } = useSWR('/api/hello', fetcher);
  console.log(data);
  return (
        <div>
            <Welcome/>
        </div>
    )
}

