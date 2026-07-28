import { SavedConfig } from "@/types";

export function exportConfig(config: SavedConfig): void {
  const json = JSON.stringify(config, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "pc-setup-config.json";
  link.click();

  URL.revokeObjectURL(url);
}