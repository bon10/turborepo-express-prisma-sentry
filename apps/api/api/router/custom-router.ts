import type { Request, Response, NextFunction, RequestHandler } from "express";
import { Router } from "express";

// Define the type for an async request handler
type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

// Async handler function
const asyncHandler =
  (fn: AsyncRequestHandler): RequestHandler =>
  (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

// Custom Router class
class AsyncRouter {
  private router = Router();

  private wrapAsync(fn: AsyncRequestHandler): RequestHandler {
    return asyncHandler(fn);
  }

  public get(path: string, ...handlers: AsyncRequestHandler[]): void {
    this.router.get(
      path,
      handlers.map((handler) => this.wrapAsync(handler))
    );
  }

  public post(path: string, ...handlers: AsyncRequestHandler[]): void {
    this.router.post(
      path,
      handlers.map((handler) => this.wrapAsync(handler))
    );
  }

  public put(path: string, ...handlers: AsyncRequestHandler[]): void {
    this.router.put(
      path,
      handlers.map((handler) => this.wrapAsync(handler))
    );
  }

  public delete(path: string, ...handlers: AsyncRequestHandler[]): void {
    this.router.delete(
      path,
      handlers.map((handler) => this.wrapAsync(handler))
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default AsyncRouter;
