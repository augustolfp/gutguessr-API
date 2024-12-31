import { Request, Response } from "express";
import * as rankingServices from "../services/rankingServices";

export async function getRanking(req: Request, res: Response) {
    const sessionId: string = req.params.sessionId;

    const result = await rankingServices.getRanking(sessionId);

    return res.status(200).send(result);
}
