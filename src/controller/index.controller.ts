import { Request, Response } from "express";
import { CheckIndex } from "../service/index.service";

export async function checkIndexData(req: Request, res: Response): Promise<void> {
    try {
        const items = await CheckIndex();
        res.status(200).json({
            message: "Data fetched successfully",
            data: items,
        });
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Failed to fetch items" });
    }
}
