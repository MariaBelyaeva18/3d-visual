import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMailDto } from './dto/sendMail.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/mail')
  sendMail(@Query() dto: SendMailDto): Promise<void> {
    return this.appService.sendMail(dto);
  }
}
