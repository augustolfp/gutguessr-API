import { Request, Response } from "express";
import * as singlePlayerSessionServices from "../services/singlePlayerSessionServices";

export async function createSinglePlayerSession(req: Request, res: Response) {
    const numOfRounds: number = req.body.numOfRounds;
    const username: string = req.body.username;

    const result = await singlePlayerSessionServices.createSinglePlayerSession(
        username,
        numOfRounds
    );

    return res.status(201).send(result);
}
