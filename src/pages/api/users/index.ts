import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/Database/dbConnect";
import User from "../../../utils/Database/User";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req

    dbConnect()

    if(method === 'GET') {
        try {
            const users = await User.find()
            res.status(200).json(users)

        } catch (error) {
            res.status(500).json(error)
        }
    }
    if(method === 'POST') {
        try {
            const user = await User.create(req.body)
            res.status(200).json(user)

        } catch (error) {
            res.status(500).json(error)
        }

    }
}