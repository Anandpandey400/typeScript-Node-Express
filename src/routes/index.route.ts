import { Router } from "express";
import { checkIndexData } from "../controller/index.controller";


const router = Router();

router.post("/checkIndex",checkIndexData);

export default router;