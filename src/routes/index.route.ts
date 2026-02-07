import { Router } from "express";
import {
  checkIndexData,
  createIndexData,
} from "../controller/index.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/createIndex", createIndexData);
router.use(authMiddleware);
router.post("/checkIndex",  checkIndexData);

export default router;
