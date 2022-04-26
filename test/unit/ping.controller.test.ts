import PingControllerClass from '../../src/controllers/ping.controller';

describe('ping controller', () => {
  it('response pong', async () => {
    // Arrange
    const pingController = new PingControllerClass();

    // Act
    const res = await pingController.ping();

    // Assert
    expect(res.message).toBe('pong');
  });
});
