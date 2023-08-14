/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';// Ajusta la ruta
import { LogService } from './log/log.service';

@Injectable()
export class LogHandler implements NestMiddleware {
  constructor(private readonly logsService: LogService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const logMessage = `${req.method} ${req.originalUrl} from ${req.ip}`;
    
    // Almacena el mensaje en la tabla de logs
    await this.logsService.create({ content: logMessage });

    next();
  }
}