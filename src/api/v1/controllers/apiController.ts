import { Request, Response } from 'express'
import { jsonResponse } from '../../../common/models'

export class ApiController {
  public static getRoot(req: Request, res: Response) {
    jsonResponse().send(res)
  }
}
