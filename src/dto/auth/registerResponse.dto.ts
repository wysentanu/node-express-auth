import { Types } from 'mongoose';

export interface IRegisterResponseDto {
  _id: Types.ObjectId;
  name: string;
  email: string;
}
