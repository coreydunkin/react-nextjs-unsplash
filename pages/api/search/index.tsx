import { NextApiRequest, NextApiResponse } from 'next';
import { createApi } from 'unsplash-js';

export default function getDefaultSearch(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  const { limit }: any = query;
  const unsplash = createApi({ accessKey: process.env.API_KEY});
  unsplash.photos.list({
    perPage: parseInt(limit),
  }).then(result => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.status(200).json(result.response);
  }).catch((error) => {
    res.json(error);
    res.status(404).end();
  })
}
