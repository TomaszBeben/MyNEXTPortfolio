type mainPageData = {
    id: number;
    href: string;
    name: string;
    description: string;
}

const mainPageData: mainPageData = [
    {
        id:0,
        href:"/app",
        name: 'Share Board',
        description: 'Log in and share your info with your friends'
    },
    {
        id:1,
        href:"https://showyourself-tb.web.app",
        name: 'Show Yourself',
        description: 'Create Your ultimate CV'
    },
    {
        id:2,
        href:"https://github.com/TomaszBeben",
        name: 'Github',
        description: 'Check my Github'
    },
    {
        id:3,
        href:"https://www.linkedin.com/in/tomasz-bęben-1944021a2/",
        name: 'LinkedIn',
        description: 'Reach me out if you want'
    },
    {
        id:4,
        href:"https://tbebenportfolio.web.app/#/",
        name: 'Portfolio',
        description: 'My first deployed app'
    },
]
import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<mainPageData>
) {
  res.status(200).json(mainPageData)
}