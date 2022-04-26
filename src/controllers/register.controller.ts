import { Body, Post, Response, Route, Tags } from 'tsoa';
import {
  IRegisterRequestDto,
  IRegisterResponseDto,
  IValidationError,
} from '../dto/auth';
import { User } from '../models/user.model';

@Route('/register')
@Tags('Authentication')
export default class RegisterControllerClass {
  @Post()
  @Response<IValidationError>(422, 'Validation Error')
  public async register(
    @Body() registerRequest: IRegisterRequestDto,
  ): Promise<IRegisterResponseDto> {
    const user = await User.create(registerRequest);

    return {
      _id: user._id,
      email: user.email,
      name: user.name,
    };
  }
}
