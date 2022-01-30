import { SettingsManager } from "./settings-manager";

export const getBackupPath = (settings:SettingsManager)=>{
  return `${settings.path}/daily-backup.txt`;
}