import { Router } from "express";
import * as singlePlayerSessionController from "../controllers/singlePlayerSessionController";

const singlePlayerSessionRouter = Router();

singlePlayerSessionRouter.post(
    "/single-player-session/new",
    singlePlayerSessionController.createSinglePlayerSession
);

export default singlePlayerSessionRouter;
