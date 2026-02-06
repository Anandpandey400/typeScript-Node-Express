import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import globalRoute from "./globalRoute";
import { getDbPool } from "./config/dbconfig";
import { apiRateLimiter } from "./middleware/rate-limit.middleware";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


// parse JSON bodies
app.use(express.json());
//limiter
app.use(apiRateLimiter); 

app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

//logger
app.use((req, _res, next) => {
    // console.log("📦 Body:", req.body);
    next();
});


//ROutes

// health check
app.get("/health", (_req: Request, res: Response) => {
    res.send("Server is running 🚀");
});

//  routes
app.use("/api", globalRoute);



//main server
async function startServer() {
    try {
//        await getDbPool();
        app.listen(PORT, () => {
            console.log(`Sever running at http://localhost:${PORT}/health 🚀`);
        });
    } catch (error) {
        console.error("❌ Failed to connect to database ", error);
        process.exit(1);
    }
}

startServer();
