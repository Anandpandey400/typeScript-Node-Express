const express = require("express");
const app = express();
const router = express.Router();
import indexRoutes from "./routes/index.route";

router.use("/index", indexRoutes);

export default router;
