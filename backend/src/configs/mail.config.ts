import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

export const getMailConfig = async (): Promise<any> => {
  return {
    transport: {
      host: 'smtp.mail.ru',
      port: 465,
      ignoreTLS: false,
      secure: true,
      auth: {
        user: 'test-web21@mail.ru',
        pass: 'djWEYXgZuiWVYzE4dxgq',
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
