/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';
import { StoringData } from './storing-data';

export class Telescope {
  constructor() {}

  static start(req: Request, res: Response, next: NextFunction) {
    const test = new StoringData;
    test.accessingData(req , res)
    
    next();
  }

}
