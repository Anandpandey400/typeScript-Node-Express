import { Router } from "express";
import {
  checkIndexData,
  createIndexData,
} from "../controller/index.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/checkIndex",  checkIndexData);
router.post("/createIndex", createIndexData);

export default router;
