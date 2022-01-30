import { SettingsManager } from "./i-face-settings-manager";

export const getBackupPath = (settings:SettingsManager)=>{
  return `${settings.path}/daily-backup.txt`;
}