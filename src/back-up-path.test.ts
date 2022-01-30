import { SettingsManager } from './settings-manager';
import { getBackupPath } from './back-up-path';
import { expect } from 'chai';

describe('поведение back-up-path', () => {
  const getMockSettingsManager = (): SettingsManager => { 
    const result: SettingsManager = {
      name: 'test1',
      path: 'test2',      
    }
    return result;
   }
  it('добавляет название файла к базовому пути', () => {
    const mockSettingsManager = getMockSettingsManager()
    const backupPath = getBackupPath(mockSettingsManager);
    expect(backupPath.startsWith(mockSettingsManager.path)).eq(true);
  })
})