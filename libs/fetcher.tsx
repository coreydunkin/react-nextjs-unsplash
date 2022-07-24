export default async function fetcher<JSON = any>(input: RequestInfo): Promise<any> {
  const res = await fetch(input);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    throw error
  }
  return res.json();
}
