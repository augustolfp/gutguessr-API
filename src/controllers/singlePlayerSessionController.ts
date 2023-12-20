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

export async function createRound(req: Request, res: Response) {
    const sessionId: string = req.body.sessionId;

    const result = await singlePlayerSessionServices.createRound(sessionId);

    return res.status(201).send(result);
}

export async function updateLastRoundScore(req: Request, res: Response) {
    const sessionId: string = req.body.sessionId;
    const distance: number = req.body.distance;

    const result = await singlePlayerSessionServices.updateLastRoundScore(
        sessionId,
        distance
    );

    return res.status(201).send(result);
}
