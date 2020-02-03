import {Response, NextFunction} from "express";
import {HTTPClientError, HTTP404Error} from "../utils/httpErrors";

export function notFoundError() {
  throw new HTTP404Error("Method not found.");
};

export function clientError(err: Error, res: Response, next: NextFunction) {
  if (err instanceof HTTPClientError) {
    console.warn(err);
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

export function serverError(err: Error, res: Response, next: NextFunction) {
  console.error(err);
  if (process.env.NODE_ENV === "production") {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(500).send(err.stack);
  }
};
