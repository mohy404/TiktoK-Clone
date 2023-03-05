import { client } from '@/utlis/client';
import { allUsersQuery } from '@/utlis/queries';
import type { NextApiRequest, NextApiResponse } from 'next';




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await client.fetch(allUsersQuery());
  
  if(data) {
    res.status(200).json(data);
  } else {
    res.json([]);
  }
}