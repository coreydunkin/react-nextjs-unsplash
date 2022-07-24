import { NextApiRequest, NextApiResponse } from 'next';
import { createApi } from 'unsplash-js';

export default function getSearch(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const unsplash = createApi({ accessKey: process.env.API_KEY});
  unsplash.search.getPhotos({
    query: "cats"
  }).then(result => {
    res.statusCode = 200;
    res.status(200).json(result.response.results);
  }).catch((error) => {
    res.json(error);
    res.status(404).end();
  })
}
