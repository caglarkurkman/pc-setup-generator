import { App } from "@/types";

export const ELEVATION_HEADER = `# ============================================
# PC Setup Generator - Otomatik Kurulum Script'i
# ============================================

if (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File \`"$PSCommandPath\`"" -Verb RunAs
    exit
}

Write-Host "Kurulum basliyor..." -ForegroundColor Cyan
`;

export const SCRIPT_FOOTER = `
Write-Host "Kurulum tamamlandi!" -ForegroundColor Green
`;

// Her uygulama için sessiz (silent) winget kurulum komutu üretir
export function buildWingetSection(selectedApps: App[]): string {
  if (selectedApps.length === 0) return "";

  const header = `\nWrite-Host "Uygulamalar kuruluyor..." -ForegroundColor Cyan\n`;

  const installCommands = selectedApps
    .map(
      (app) =>
        `Write-Host "Kuruluyor: ${app.name}" -ForegroundColor Yellow\nwinget install --id ${app.wingetId} -e --silent --accept-source-agreements --accept-package-agreements`
    )
    .join("\n\n");

  return `${header}\n${installCommands}\n`;
}