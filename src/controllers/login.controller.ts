import { Body, Post, Response, Route, Tags } from 'tsoa';
import {
  ILoginRequestDto,
  ILoginResponseDto,
  IValidationError,
} from '../dto/auth';
import { User } from '../models/user.model';
import { generateToken } from '../libs/utils';

@Route('login')
@Tags('Authentication')
export default class LoginControllerClass {
  @Post()
  @Response<IValidationError>(422, 'Validation Error')
  public async login(
    @Body() loginRequest: ILoginRequestDto,
  ): Promise<ILoginResponseDto | null> {
    const user = await User.findOne({
      where: {
        email: loginRequest.email,
      },
    });

    if (user) {
      const isPasswordValid = await user.validatePassword(
        loginRequest.password,
      );
      if (isPasswordValid) {
        return {
          token: generateToken(user._id),
        };
      }
    }

    return null;
  }
}
