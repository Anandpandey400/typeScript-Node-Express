import { Request, Response } from "express";
import { CheckIndex, createIndex } from "../service/index.service";

export async function checkIndexData(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const items = await CheckIndex({ id: 1, name: "Sample Test" });
    res.status(200).json({
      message: "Data fetched successfully",
      data: items,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Failed to fetch items" });
  }
}

export async function createIndexData(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const items = await createIndex({ id: 1, name: "Sample Test" });
    res.status(200).json({
      message: "Token created successfully",
      data: items,
    });
  } catch (error) {
    console.error("Error creating token:", error);
    res.status(500).json({ message: "Failed to create token" });
  }
}
