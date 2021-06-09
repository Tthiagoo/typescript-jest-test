import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('message')).toBeUndefined();
  });

  it('should call console.log() once ', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('message');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log() with Pedido salvo com sucesso...', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('message');
    expect(consoleSpy).toHaveBeenCalledWith('message');
  });
});
