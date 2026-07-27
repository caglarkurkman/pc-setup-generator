import { App } from "@/types";
import { ELEVATION_HEADER, SCRIPT_FOOTER, buildWingetSection } from "./templates";

interface GenerateScriptParams {
  selectedApps: App[];
}

export function generateScript({ selectedApps }: GenerateScriptParams): string {
  const wingetSection = buildWingetSection(selectedApps);
  return [ELEVATION_HEADER, wingetSection, SCRIPT_FOOTER].join("\n");
}