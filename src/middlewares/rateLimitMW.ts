import { rateLimit } from "express-rate-limit";

export const rateLimiter = rateLimit({
    windowMs: 300,
    limit: 1,
});
