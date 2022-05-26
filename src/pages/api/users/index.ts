import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../utils/dbConnect";
import User from "../models/user";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req

    dbConnect()

    switch (method) {
        case 'GET':
            try {
                const user = await User.find({})
                res.status(200).json({success: true, data: user})
            } catch (error) {
                console.log(error)
                res.status(500).json({success: false, error})
            }
            break

        case "POST":
            try {
                const user = await User.create(req.body)
                res.status(201).json({success: true, data: user})
            } catch (error) {
                console.log(error)
                res.status(500).json({success: false, error})
            }
            break
    }
    // if(method === 'GET') {
    //     try {
    //         const user = await User.find()
    //         res.status(200).json(user)

    //     } catch (error) {
    //         res.status(500).json(error)
    //     }
    // }
    // if(method === 'POST') {
    //     try {
    //         const user = await User.create(req.body)
    //         res.status(200).json(user)

    //     } catch (error) {
    //         res.status(500).json(error)
    //     }

    // }
    // if(method === 'DELETE') {
    //     try {
    //         const user = await User.deleteOne(_id)
    //         res.status(200).json(user)

    //     } catch (error) {
    //         res.status(500).json(error)
    //     }

    // }
}