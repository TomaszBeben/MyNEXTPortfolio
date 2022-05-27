import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../utils/dbConnect";
import User from "../models/user";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req
    const {UserId} = req.query
    // console.log(UserId);

    dbConnect()

    switch (method) {
        case 'PUT':
            try {
                const user = await User.updateOne({_id: UserId}, req.body)
                res.status(200).json({success: true, data: user})
            } catch (error) {
                console.log(error)
                res.status(500).json({success: false, error})
            }
            break

        case "DELETE":
            try {
                await User.deleteOne({_id: UserId})
                res.status(201).json({success: true})
            } catch (error) {
                console.log(error)
                res.status(500).json({success: false, error})
            }
            break
    }
}