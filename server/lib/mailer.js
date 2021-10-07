import config from 'config';
import fs from 'fs';
import handlebars from 'handlebars';
import juice from 'juice';
import nodemailer from 'nodemailer';
import path from 'path';

const header = fs.readFileSync(
  path.join(__dirname, '../../templates/partials/header.hbs'),
  'utf-8',
);
const footer = fs.readFileSync(
  path.join(__dirname, '../../templates/partials/footer.hbs'),
  'utf-8',
);

handlebars.registerPartial('header', header);
handlebars.registerPartial('footer', footer);

function getMailer() {
  if (process.env.NODE_ENV !== 'production') {
    return nodemailer.createTransport({
      ignoreTLS: true,
      port: 1025,
    });
  }
  return nodemailer.createTransport({
    service: config.get('mailer.provider'),
    auth: {
      user: config.get('mailer.user'),
      pass: config.get('mailer.pass'),
    },
  });
}

function generateEmailTemplate(template, data = {}) {
  const file = fs.readFileSync(
    path.join(__dirname, `../../templates/emails/${template}.hbs`),
    'utf-8',
  );
  const source = handlebars.compile(file);
  const html = juice(source(data));
  return html;
}

function getTemplateAttributes(html) {
  // Parse email subject from template
  const attributes = {};
  const [subject, ...body] = html.split('\n');
  const [key, value] = subject.split(':');
  attributes[key.toLowerCase()] = value.trim();
  attributes.html = body.join('\n').trim();
  return attributes;
}

export default {
  async sendMail({ template, to, data }) {
    const mailer = getMailer();
    const emailTemplate = generateEmailTemplate(template, data);
    const { html, subject } = getTemplateAttributes(emailTemplate);
    await mailer.sendMail({
      from: `Giftpal ${config.get('mailer.user')}`,
      to,
      html,
      subject,
    });
  },
};
