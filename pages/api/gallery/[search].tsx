import { NextApiRequest, NextApiResponse } from 'next';
import { createApi } from 'unsplash-js';

export default function getSearch(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query: { search, limit, page } } = req;
  return new Promise<void>((resolve) => {
    const unsplash = createApi({ accessKey: process.env.API_KEY});
    unsplash.search.getPhotos({
      query: `${search}`,
      page: parseInt(`${page}`),
      perPage: parseInt(`${limit}`),
    }).then(result => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.status(200).json(result.response.results);
      resolve();
    }).catch((error) => {
      res.json(error);
      res.status(404).end();
      resolve();
    })
  })
}
