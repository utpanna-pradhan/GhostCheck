
import { Router } from "express";
import { analyzeJobController } from "../controllers/analysis.controller";

const router = Router();

router.post("/", analyzeJobController);

export default router;
