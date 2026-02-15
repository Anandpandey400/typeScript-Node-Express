import { redisClient } from "../config/redis";
import { Test } from "../types/index.types";
import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecret";

const getUserFromDB = async (userId: number): Promise<Test> => {
  console.log("Fetching from DB...");
  return {
    id: userId,
    name: "Anand from local db",
   
  };
};

export const checkIndexWithId = async(id: number)=>{
  try{
    const cacheKey = `user:${id}`;
  const cachedUser = await redisClient.get(cacheKey);
    if (cachedUser) {
      console.log("Cache HIT");
      const parsedUser: Test = JSON.parse(cachedUser);
      return parsedUser;
    }
    console.log("Cache MISS");
     const user = await getUserFromDB(id);
      // 3️⃣ Store in Redis with TTL (60 seconds)
    await redisClient.set(cacheKey, JSON.stringify(user), {
      EX: 60,
    });
     return user;
  }catch(error){
    console.error("Error", error)
    throw error
  }
}

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
