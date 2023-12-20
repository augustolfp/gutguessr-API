import { Router } from "express";
import singlePlayerSessionRouter from "./singlePlayerSessionRouter";
import rankingRouter from "./rankingRouter";

const router = Router();

router.use(singlePlayerSessionRouter);
router.use(rankingRouter);

export default router;
