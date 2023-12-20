import { Router } from "express";
import { rateLimiter } from "../middlewares/rateLimitMW";
import * as singlePlayerSessionController from "../controllers/singlePlayerSessionController";

const singlePlayerSessionRouter = Router();

singlePlayerSessionRouter.post(
    "/single-player-session/new",
    singlePlayerSessionController.createSinglePlayerSession
);

singlePlayerSessionRouter.post(
    "/single-player-session/round",
    rateLimiter,
    singlePlayerSessionController.createRound
);

singlePlayerSessionRouter.post(
    "/single-player-session/score",
    singlePlayerSessionController.updateLastRoundScore
);

export default singlePlayerSessionRouter;
