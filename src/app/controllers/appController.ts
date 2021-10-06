import { Request, Response } from 'express'

export class AppController {
  public static root(req: Request, res: Response) {
    res.sendStatus(200)
  }
}
