import fs from 'fs/promises'

export class FileManager {
    async readFile(filePath: string): Promise<string> {
      try {
        const data = await fs.readFile(filePath, 'utf-8');
        return data;
      } catch (error) {
        console.error(`Error reading file at ${filePath}:`, error);
        throw new Error('Failed to read file');
      }
    }
  }