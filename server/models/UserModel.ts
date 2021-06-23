import connection from '../libs/db';
import { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
  avatar: string;
  email: string;
  displayname: string;
  userName: string;
  password: string;
  role: 'гость' | 'админ' | 'менеджер';
  about: string;
}

const UserSchema = new Schema({
  avatar: String,
  email: {
    type: String,
    required: 'Email пользователя не должен быть пустым',
    lowercase: true,
    index: true,
    validate: [
      {
        validator(value: string) {
          return /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
        },
        message: 'Некорректный email.',
      }
    ],
    unique: 'Такой Email уже существует',
  },
  displayname: {
    type: String,
    minlength: [5, 'Минимальная длина 6 символов'],
  },
  userName: {
    type: String,
    minlength: [5, 'Минимальная длина 6 символов'],
  },
  password: {
    type: String,
    minlength: [6, 'Минимальная длина пароля 6 символов'],
    maxlength: [32, 'Максимальная длина пароля 32 символа'],
    required: true,
  },
  role: {
    enum: ['гость', 'админ', 'менеджер'],
    type: String,
    required: true,
    default: 'гость',
  },
  about: String,
}, {
  timestamps: true,
});

UserSchema.pre<IUser>('save', async function (next) {
  try {
    const hashedPass = await bcrypt.hash(this.password, 10);
    this.password = hashedPass;
    next();
  } catch (err) {
    return next(err);
  }
});

export default connection.model<IUser>('User', UserSchema);