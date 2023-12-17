import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMailDto } from './dto/sendMail.dto';
import * as path from 'path';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}
  async sendMail(dto: SendMailDto): Promise<void> {
    console.log(path.join(__dirname, '/../templates', 'formTemplate'));
    return await this.mailerService
      .sendMail({
        to: 'belyashhh12@gmail.com',
        from: 'shattilov@mail.ru',
        subject: 'Прием заказа',
        template: path.join(__dirname, '/../templates', 'formTemplate'),
        context: {
          name: dto.name || 'Не указано',
          surname: dto.surname || 'Не указано',
          jobType: dto.jobType || 'Не указано',
          phoneNumber: dto.phoneNumber || 'Не указано',
          email: dto.email || 'Не указано',
        },
      })
      .catch((e) => {
        console.log(e);
        throw new HttpException(
          `Ошибка работы почты: ${JSON.stringify(e)}`,
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      });
  }
}
