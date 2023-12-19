import { Router } from "express";
import * as singlePlayerSessionController from "../controllers/singlePlayerSessionController";

const singlePlayerSessionRouter = Router();

singlePlayerSessionRouter.post(
    "/single-player-session/new",
    singlePlayerSessionController.createSinglePlayerSession
);

singlePlayerSessionRouter.post(
    "/single-player-session/round",
    singlePlayerSessionController.createRound
);

singlePlayerSessionRouter.post(
    "/single-player-session/score",
    singlePlayerSessionController.updateLastRoundScore
);

export default singlePlayerSessionRouter;
