import { Request, Response } from "express";
import * as rankingServices from "../services/rankingServices";

export async function getRanking(req: Request, res: Response) {
    const result = await rankingServices.getRanking();

    return res.status(200).send(result);
}
