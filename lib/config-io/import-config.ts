import { SavedConfig } from "@/types";

// Kullanıcının seçtiği .json dosyasını okuyup SavedConfig'e çevirir
export function importConfig(file: File): Promise<SavedConfig> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string) as SavedConfig;
        resolve(parsed);
      } catch {
        reject(new Error("Gecersiz JSON dosyasi"));
      }
    };
    reader.onerror = () => reject(new Error("Dosya okunamadi"));
    reader.readAsText(file);
  });
}