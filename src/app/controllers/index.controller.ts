import { Request, RequestHandler, Response } from 'express'
import { param, validationResult } from 'express-validator'

export class AppController {
  public static root(req: Request, res: Response) {
    res.sendStatus(200)
  }
}
