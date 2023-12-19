import { Router } from "express";
import singlePlayerSessionRouter from "./singlePlayerSessionRouter";

const router = Router();

router.use(singlePlayerSessionRouter);

export default router;
