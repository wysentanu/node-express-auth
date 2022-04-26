import { Get, Response, Route, Security, Tags } from 'tsoa';
import { IMessageResponseDto } from '../dto/messageResponse.dto';

@Route('/ping')
@Tags('Ping')
export default class PingControllerClass {
  @Security('bearer')
  @Response(401, 'Unauthorized')
  @Get()
  public ping(): IMessageResponseDto {
    return {
      message: 'pong',
    };
  }
}
