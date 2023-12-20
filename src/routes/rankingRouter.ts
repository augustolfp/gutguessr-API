import { Router } from "express";
import * as rankingController from "../controllers/rankingController";

const rankingRouter = Router();

rankingRouter.get("/ranking/:sessionId", rankingController.getRanking);

export default rankingRouter;
