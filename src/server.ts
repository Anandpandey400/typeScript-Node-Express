import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import globalRoute from "./globalRoute";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

/* -------------------- MIDDLEWARE (ORDER MATTERS) -------------------- */

// parse JSON bodies
app.use(express.json());

// parse urlencoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// optional but recommended
app.use(cors());

/* -------------------- DEBUG LOGGER (TEMPORARY) -------------------- */
app.use((req, _res, next) => {
    // console.log("📦 Body:", req.body);
    next();
});

/* -------------------- ROUTES -------------------- */

// health check
app.get("/health", (_req: Request, res: Response) => {
    res.send("Server is running 🚀");
});

//  routes
app.use("/api", globalRoute);



/* -------------------- SERVER START -------------------- */

async function startServer() {
    try {
        app.listen(PORT, () => {
            console.log(`Database and sever running 🚀`);
        });
    } catch (error) {
        console.error("❌ Failed to connect to database ", error);
        process.exit(1);
    }
}

startServer();
