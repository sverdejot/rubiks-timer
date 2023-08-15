import {
  ConsoleLogger,
  ConsoleLoggerOptions,
  LoggerService,
  Module,
} from '@nestjs/common';
import { createLogger, transports, format, Logger } from 'winston';

export default class WinstonLogger
  extends ConsoleLogger
  implements LoggerService
{
  private readonly logger: Logger;

  constructor(context: string, options?: ConsoleLoggerOptions) {
    options !== null || options !== undefined
      ? super(context)
      : super(context, options);
    this.logger = this.winstonFactory();
  }
  // TODO: make this config injectable
  private winstonFactory(): Logger {
    const fileTransport = new transports.File({
      format: format.combine(format.timestamp(), format.json()),
      filename: 'var/logs/application.log',
      maxsize: 10485760,
      maxFiles: 5,
      tailable: true,
      zippedArchive: true,
    });
    return createLogger({
      transports: [fileTransport],
    });
  }

  log(message: any, ...optionalParams: any[]): any {
    this.logger.info(message, { ...optionalParams });
    super.log(message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]): any {
    this.logger.error(message, { ...optionalParams });
    super.error(message, ...optionalParams);
  }
  warn(message: any, ...optionalParams: any[]): any {
    this.logger.warn(message, { ...optionalParams });
    super.warn(message, ...optionalParams);
  }

  debug(message: any, ...optionalParams: any[]): void {
    this.logger.debug(message, { ...optionalParams });
    super.debug(message, ...optionalParams);
  }

  verbose(message: any, ...optionalParams: any[]): void {
    this.logger.verbose(message, { ...optionalParams });
    super.verbose(message, ...optionalParams);
  }
}

@Module({
  providers: [WinstonLogger],
  exports: [WinstonLogger],
})
export class WinstonLoggerModule {}
