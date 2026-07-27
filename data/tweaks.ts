import { Tweak } from "@/types";

export const tweaks: Tweak[] = [
  // --- Gizlilik ---
  {
    id: "disable-telemetry",
    title: "Telemetriyi Kapat",
    category: "privacy",
    description: "Windows'un kullanım verisi göndermesini engeller",
    psCommand: `Set-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" -Name "AllowTelemetry" -Value 0`,
    regPath: "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection",
  },
  {
    id: "disable-advertising-id",
    title: "Reklam Kimliğini Kapat",
    category: "privacy",
    description: "Kişiselleştirilmiş reklam takibini devre dışı bırakır",
    psCommand: `Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\AdvertisingInfo" -Name "Enabled" -Value 0`,
    regPath: "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\AdvertisingInfo",
  },
  {
    id: "disable-activity-history",
    title: "Etkinlik Geçmişini Kapat",
    category: "privacy",
    description: "Microsoft'a kullanıcı aktivite gönderimini durdurur",
    psCommand: `Set-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\System" -Name "PublishUserActivities" -Value 0`,
    regPath: "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\System",
  },

  // --- Performans ---
  {
    id: "high-performance-power-plan",
    title: "Yüksek Performans Güç Planı",
    category: "performance",
    description: "Güç tasarrufu yerine maksimum performans moduna geçer",
    psCommand: `powercfg -setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c`,
  },
  {
    id: "disable-search-indexing",
    title: "Windows Arama Dizinlemeyi Kapat",
    category: "performance",
    description: "Arka planda disk kullanan indeksleme servisini durdurur",
    psCommand: `Stop-Service "WSearch" -Force; Set-Service "WSearch" -StartupType Disabled`,
  },
  {
    id: "best-performance-visuals",
    title: "Görsel Efektleri Performans İçin Ayarla",
    category: "performance",
    description: "Pencere animasyonlarını kapatıp sistemi hızlandırır",
    psCommand: `Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects" -Name "VisualFXSetting" -Value 2`,
    regPath: "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\VisualEffects",
  },

  // --- Görünüm ---
  {
    id: "enable-dark-mode",
    title: "Koyu Temayı Aç",
    category: "appearance",
    description: "Uygulama ve sistem genelinde koyu temayı etkinleştirir",
    psCommand: `Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" -Name "AppsUseLightTheme" -Value 0; Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" -Name "SystemUsesLightTheme" -Value 0`,
    regPath: "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize",
  },
  {
    id: "show-file-extensions",
    title: "Dosya Uzantılarını Göster",
    category: "appearance",
    description: "Explorer'da tüm dosya uzantılarının görünmesini sağlar",
    psCommand: `Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" -Name "HideFileExt" -Value 0`,
    regPath: "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced",
  },
  {
    id: "align-taskbar-left",
    title: "Görev Çubuğunu Sola Yasla",
    category: "appearance",
    description: "Windows 11'in ortalanmış görev çubuğunu klasik sol hizaya döndürür",
    psCommand: `Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" -Name "TaskbarAl" -Value 0`,
    regPath: "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced",
  },
];