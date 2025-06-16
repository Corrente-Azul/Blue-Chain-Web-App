import { EmailTemplate } from '../../../components/EmailTemplate/email-template';
import { Resend } from 'resend';

const resend = new Resend("re_67cd9Rxz_4odK8dnsYoAa8btBzkTLMzKb");

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const emailTemplate = await EmailTemplate({ message: body.message, name: body.name });
    const { data, error } = await resend.emails.send({
      from: `${body.name} <onboarding@resend.dev>`,
      to: ['jdnn2006@gmail.com'],
      subject: 'Corrente-Azul',
      react: emailTemplate,
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}