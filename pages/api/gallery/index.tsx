import { NextApiRequest, NextApiResponse } from 'next';
import { createApi } from 'unsplash-js';

export default function getDefaultSearch(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query: { limit } } = req;
  return new Promise<void>((resolve) => {
    const unsplash = createApi({ accessKey: process.env.API_KEY});
    unsplash.photos.list({
      perPage: parseInt(`${limit}`),
    }).then(result => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.status(200).json({ total: result.response.total, totalPages: 0, results: result.response.results });
      resolve();
    }).catch((error) => {
      res.json(error);
      res.status(404).end();
      resolve();
    })
  })
}
