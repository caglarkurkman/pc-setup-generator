import { App, Tweak, DevConfig } from "@/types";

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

export function buildTweaksSection(selectedTweaks: Tweak[]): string {
  if (selectedTweaks.length === 0) return "";

  const header = `\nWrite-Host "Sistem ayarlari uygulaniyor..." -ForegroundColor Cyan\n`;

  const tweakCommands = selectedTweaks
    .map(
      (tweak) =>
        `Write-Host "Uygulaniyor: ${tweak.title}" -ForegroundColor Yellow\n${tweak.psCommand}`
    )
    .join("\n\n");

  return `${header}\n${tweakCommands}\n`;
}

// Git kullanıcı bilgisi ve VS Code eklentilerini script'e ekler
export function buildDevConfigSection(devConfig: DevConfig): string {
  const hasGitConfig = devConfig.gitUserName.trim() !== "" && devConfig.gitUserEmail.trim() !== "";
  const hasExtensions = devConfig.vscodeExtensionIds.length > 0;

  if (!hasGitConfig && !hasExtensions) return "";

  const header = `\nWrite-Host "Gelistirici ayarlari uygulaniyor..." -ForegroundColor Cyan\n`;

  const gitCommands = hasGitConfig
    ? `git config --global user.name "${devConfig.gitUserName}"\ngit config --global user.email "${devConfig.gitUserEmail}"`
    : "";

  const extensionCommands = hasExtensions
    ? devConfig.vscodeExtensionIds.map((id) => `code --install-extension ${id}`).join("\n")
    : "";

  return [header, gitCommands, extensionCommands].filter(Boolean).join("\n");
}