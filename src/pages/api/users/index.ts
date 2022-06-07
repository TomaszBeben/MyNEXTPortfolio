import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../utils/dbConnect";
import User from "../models/user";
import { getSession } from "next-auth/react";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req
    const session = await getSession({req})
    console.log(session?.user?.email);
    dbConnect()


    switch (method) {
        case 'GET':
            try {
                const user = await User.find({email: session?.user?.email})
                res.status(200).json({success: true, data: user})
            } catch (error) {
                res.status(500).json({success: false, error})
            }
            break

        case "POST":
            try {
                const {email} = req.body
                const exist = await User.find({email})
                if(exist.length > 0){
                    console.log('user exist');
                }else{
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