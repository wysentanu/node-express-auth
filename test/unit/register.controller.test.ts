import * as dbHandler from '../db';
import RegisterControllerClass from '../../src/controllers/register.controller';
import { IRegisterRequestDto } from '../../src/dto/auth';

beforeAll(async () => {
  await dbHandler.connect();
});

afterEach(async () => {
  await dbHandler.clearDatabase();
});

afterAll(async () => {
  await dbHandler.closeDatabase();
});

describe('register controller', () => {
  it('can register a user', async () => {
    // Arrange
    const authController = new RegisterControllerClass();
    const data: IRegisterRequestDto = {
      name: 'testing',
      email: 'test@test.com',
      password: 'secret',
    };

    // Act
    const res = await authController.register(data);

    // Assert
    expect(res.email).toBe('test@test.com');
    expect(res.name).toBe('testing');
  });

  it('can login a user', async () => {
    expect(true);
  });
});
