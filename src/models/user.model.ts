import { HydratedDocument, Model, model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
  name: string;
  email: string;
  password: string;
  validatePassword: (password: string) => boolean;
}

export const userSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre(
  'save',
  async function (this: HydratedDocument<IUser>, next: any) {
    if (!this.isModified('password')) {
      return next();
    }

    this.password = await bcrypt.hash(this.password, 10);
    return next();
  },
);

userSchema.methods.validatePassword = async function (
  this: HydratedDocument<IUser>,
  password: string,
) {
  return await bcrypt.compare(password, this.password);
};

export const User: Model<IUser> = model<IUser>('User', userSchema);
