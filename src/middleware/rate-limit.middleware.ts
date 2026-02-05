import rateLimit from "express-rate-limit";

export const apiRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 5, // max requests 
  standardHeaders: true, //headers
  legacyHeaders: false, 

  message: {
    message: "Too many requests, please try again later",
    errorCode: "RATE_LIMIT_EXCEEDED",
  },
});
