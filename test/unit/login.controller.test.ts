import * as dbHandler from '../db';
import LoginControllerClass from '../../src/controllers/login.controller';
import { ILoginRequestDto, IRegisterRequestDto } from '../../src/dto/auth';
import RegisterControllerClass from '../../src/controllers/register.controller';

beforeAll(async () => {
  await dbHandler.connect();

  // @todo: create a faker user
  const authController = new RegisterControllerClass();
  const data: IRegisterRequestDto = {
    name: 'testing',
    email: 'test@test.com',
    password: 'secret',
  };
  await authController.register(data);
});

afterEach(async () => {
  await dbHandler.clearDatabase();
});

afterAll(async () => {
  await dbHandler.closeDatabase();
});

describe('login controller', () => {
  it('can login a correct user', async () => {
    // Arrange
    const authController = new LoginControllerClass();
    const data: ILoginRequestDto = {
      email: 'test@test.com',
      password: 'secret',
    };

    // Act
    const res = await authController.login(data);

    // Assert
    expect(res).not.toBeNull();
  });

  it('can not login a wrong user', async () => {
    // Arrange
    const authController = new LoginControllerClass();
    const data: ILoginRequestDto = {
      email: 'test@test.com',
      password: 'secretfalse',
    };

    // Act
    const res = await authController.login(data);

    // Assert
    expect(res).toBeNull();
  });
});
