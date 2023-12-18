import {Body, Controller, Get, Query} from '@nestjs/common';
import { AppService } from './app.service';
import { SendMailDto } from './dto/sendMail.dto';
import {JoiValidationPipe} from "./pipes/validation.pipe";
import * as schema from './schema/client.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/mail')
  sendMail(
       @Query(
           new JoiValidationPipe(
           schema.usersCreateSchema,
           'validationError',
       ),) dto: SendMailDto): Promise<void> {
    return this.appService.sendMail(dto);
  }
}
