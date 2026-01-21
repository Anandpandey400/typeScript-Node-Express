import { Test } from "../types/index.types";

export const CheckIndex = async (test: Test) => {
    try {
        return test;
    } catch (error) {
        console.error("Error fetching inventory:", error);
        throw error;
    }
};
