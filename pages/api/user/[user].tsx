import { NextApiRequest, NextApiResponse } from 'next';
import { createApi } from 'unsplash-js';

export default function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query: { user } } = req;
  return new Promise<void>((resolve) => {
    const unsplash = createApi({ accessKey: process.env.API_KEY});
    unsplash.users.getPhotos({
      username: `${user}`
    }).then(result => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.status(200).json({ total: result.response.total, totalPages: 0, results: result.response.results, });
      resolve();
    }).catch((error) => {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      //res.json(error);
      res.status(404).json(error);
      resolve();
    })
  })
}
