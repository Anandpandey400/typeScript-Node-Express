import { Router } from "express";
import { checkIndexData } from "../controller/index.controller";


const router = Router();

router.get("/checkIndex",checkIndexData);

export default router;