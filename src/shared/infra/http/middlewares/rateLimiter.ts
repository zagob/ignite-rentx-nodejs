import { NextFunction, Request, Response } from "express";
import * as redis from "redis";
import { RateLimiterRedis } from "rate-limiter-flexible";
import { AppError } from "@shared/errors/AppError";

const redisClient = redis.createClient({
  legacyMode: true,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "rateLimiter",
  points: 20,
  duration: 20, // por 5 second by IP
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    await redisClient.connect();
    await limiter.consume(request.ip);

    return next();
  } catch (err) {
    throw new AppError("To many requests", 429);
  } finally {
    await redisClient.disconnect();
  }
}
