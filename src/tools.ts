import fs from 'fs';

export const readJsonFile = (pathAndFileName: string) => {
  try {
    const data = fs.readFileSync(pathAndFileName, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${pathAndFileName}:`, error);
    return null;
  }
};