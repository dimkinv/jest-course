// order-reader.spec.ts
import { OrderReader } from './order-reader';
import { FileManager } from './file-manager';

describe('OrderReader', () => {
  let fileManager: FileManager;
  let orderReader: OrderReader;

  beforeEach(() => {
    fileManager = new FileManager();
    orderReader = new OrderReader(fileManager);
  });

  test('should return orders from file', () => {
    // given
    // TODO: Implement test logic
    
    // when
    // TODO: Implement test logic
    
    // then
    // TODO: Implement assertions
  });
});