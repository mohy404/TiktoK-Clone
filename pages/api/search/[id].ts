import { client } from '@/utlis/client';
import { searchPostsQuery } from '@/utlis/queries';
import type { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;

    const videosQuery = searchPostsQuery(id);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}
