// Ürettiğimiz script metnini tarayıcı üzerinden .ps1 dosyası olarak indirir
export function downloadScript(content: string, fileName: string = "setup.ps1"): void {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();

  URL.revokeObjectURL(url);
}