import { type Request as ExpressRequest } from 'express';

declare module 'express' {
  interface Request extends ExpressRequest {
    cookies: Record<string, string>;
  }
}
