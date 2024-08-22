import { NextApiRequest, NextApiResponse } from "next";
import data from "../../public/api/cars.json";

export default function Handler (req: NextApiRequest, res: NextApiResponse){
    res.status(200).json(data);
};

