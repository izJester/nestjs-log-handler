/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';// Ajusta la ruta
import { LogService } from './log/log.service';

@Injectable()
export class LogHandler implements NestMiddleware {
  constructor(private readonly logService: LogService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const logMessage = {method: req.method, originalUrl: req.originalUrl, ip: req.ip};
    
    // Almacena el mensaje en la tabla de logs
    await this.logService.create({ content: logMessage });

    next();
  }
}