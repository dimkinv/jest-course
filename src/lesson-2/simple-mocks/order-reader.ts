import { FileManager } from './file-manager';

export class OrderReader {
  private fileManager: FileManager;

  constructor(fileManager: FileManager) {
    this.fileManager = fileManager;
  }

  getOrders(filePath: string): string[] {
    const data = this.fileManager.readFile(filePath);
    return data.split('\n');
  }
}