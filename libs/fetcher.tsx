export default async function fetcher<JSON = any>(input: RequestInfo): Promise<any> {
  const res = await fetch(input);
  return res.json();
}