import { client } from '@/utlis/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { allUsersQuery } from './../../utlis/queries';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const doc = req.body;

  client.createIfNotExists(doc).then(() => {
    res.status(200).json('Login successful');
  });
}
