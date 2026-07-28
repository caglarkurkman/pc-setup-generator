import { DevConfig } from "./dev-config";

export interface SavedConfig {
  selectedAppIds: string[];
  enabledTweakIds: string[];
  devConfig: DevConfig;
}