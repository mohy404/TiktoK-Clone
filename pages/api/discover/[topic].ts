import { client } from '@/utlis/client';
import { topicPostsQuery } from '@/utlis/queries';
import type { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { topic } = req.query;

    const videosQuery = topicPostsQuery(topic);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}
