import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

export const getMailConfig = async (): Promise<any> => {
  return {
    transport: {
      host: 'smtp.mail.ru',
      port: 465,
      ignoreTLS: false,
      secure: true,
      auth: {
        user: 'shattilov@mail.ru',
        pass: 'Gn5LgA7fJG0wwG9qiHwa',
      },
    },
    defaults: {
      from: '',
    },
    template: {
      adapter: new EjsAdapter(),
      options: {
        strict: false,
      },
    },
  };
};
