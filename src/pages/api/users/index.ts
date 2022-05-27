import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../utils/dbConnect";
import User from "../models/user";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req
    const {UserId} = req.query

    dbConnect()

    switch (method) {
        case 'GET':
            try {
                const user = await User.find({})
                res.status(200).json({success: true, data: user})
            } catch (error) {
                // console.log(error)
                res.status(500).json({success: false, error})
            }
            break

        case "POST":
            try {
                const exist = await User.find({'name':'Tomasz'})
                if(exist.length > 0){
                    console.log('user exist');
                }else{
                    console.log('nie');
                    const user = await User.create(req.body)
                res.status(201).json({success: true, data: user})
                }
            } catch (error) {
                console.log(error)
                res.status(500).json({success: false, error})
            }
            break
    }
}