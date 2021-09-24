import Joi, { ValidationError } from 'joi';
import { hashSync } from 'bcrypt';
import Prisma from '../lib/prisma';

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(2).max(15)
    .required(),
  email: Joi.string().email().required(),
  name: Joi.string().max(35).required(),
  password: Joi.string().min(14).max(30).required(),
});

export async function registerUser(payload) {
  try {
    const {
      username, email, name, password,
    } = await userSchema.validateAsync(
      payload,
    );
    const existingUser = await Prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });
    if (existingUser) {
      const data = { status: false, message: '' };
      if (existingUser.email === email) {
        data.message = 'Sorry, this email is already taken';
      } else {
        data.message = 'Sorry, this username is already taken';
      }
      return data;
    }
    const hash = hashSync(password, 10);
    const user = await Prisma.user.create({
      data: {
        username,
        name,
        email,
        hash,
      },
      select: {
        email: true,
        name: true,
        username: true,
      },
    });
    return {
      status: true,
      data: user,
    };
  } catch (e) {
    if (e instanceof ValidationError) {
      const [error] = e.details;
      return { status: false, message: error.message };
    }
    throw e;
  }
}

export async function loginUser() {
  return {};
}
