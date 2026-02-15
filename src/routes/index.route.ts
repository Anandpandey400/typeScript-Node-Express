import { Router } from "express";
import {
  checkIndexData,
  createIndexData,
  fetchDataById,
} from "../controller/index.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/createIndex", createIndexData);
router.post("/getDatabyId",fetchDataById)
router.use(authMiddleware);
router.post("/checkIndex",  checkIndexData);

export default router;
