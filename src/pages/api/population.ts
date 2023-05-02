import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const url =
      'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
      req.query.prefCode
    const header = {
      headers: { 'X-API-KEY': process.env.API_KEY },
    }
    const result = await axios.get(url, header).then((response) => response.data)

    return res.status(200).json(result)
  }
}

export default handler
