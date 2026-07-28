import { App, Tweak, DevConfig } from "@/types";
import {
  ELEVATION_HEADER,
  SCRIPT_FOOTER,
  buildWingetSection,
  buildTweaksSection,
  buildDevConfigSection,
} from "./templates";

interface GenerateScriptParams {
  selectedApps: App[];
  selectedTweaks: Tweak[];
  devConfig: DevConfig;
}

export function generateScript({ selectedApps, selectedTweaks, devConfig }: GenerateScriptParams): string {
  const wingetSection = buildWingetSection(selectedApps);
  const tweaksSection = buildTweaksSection(selectedTweaks);
  const devConfigSection = buildDevConfigSection(devConfig);
  return [ELEVATION_HEADER, wingetSection, tweaksSection, devConfigSection, SCRIPT_FOOTER].join("\n");
}
