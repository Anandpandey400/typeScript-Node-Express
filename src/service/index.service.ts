import { Test } from "../types/index.types";
import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecret";

export const CheckIndex = async (test: Test) => {
  try {
    return test;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    throw error;
  }
};

export const createIndex = async (test: Test) => {
  try {
    const { name } = test;
    const token = jwt.sign({ name }, JWT_SECRET, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.error("Error fetching inventory:", error);
    throw error;
  }
};
