import Joi, { ValidationError } from 'joi';
import { compareSync, hashSync } from 'bcrypt';
import Prisma from '../lib/prisma';

function getUserSchema(isLogin = false) {
  if (isLogin) {
    return Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
  }
  return Joi.object({
    username: Joi.string().alphanum().min(2).max(15)
      .required(),
    email: Joi.string().email().required(),
    name: Joi.string().max(35).required(),
    password: Joi.string().min(14).max(30).required(),
  });
}

export async function registerUser(payload) {
  try {
    const userSchema = getUserSchema();
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

export async function loginUser(payload) {
  try {
    const userSchema = getUserSchema(true);
    const { email, password } = await userSchema.validateAsync(payload);
    const user = await Prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      const passwordIsValid = compareSync(password, user.hash);
      if (passwordIsValid) {
        return {
          status: true,
          data: {
            email,
            name: user.name,
            username: user.username,
          },
        };
      }
      return {
        status: false,
        message: 'Invalid email or password',
      };
    }
    return {
      status: false,
      message: 'This email does not exist in our records',
    };
  } catch (e) {
    if (e instanceof ValidationError) {
      const [error] = e.details;
      return { status: false, message: error.message };
    }
    throw e;
  }
}
