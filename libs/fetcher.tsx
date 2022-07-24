export default async function fetcher<JSON = any>(input: RequestInfo, count = 10, page = 1): Promise<JSON> {
  const res = await fetch(input);
  return res.json();
}