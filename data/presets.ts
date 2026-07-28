import { Preset } from "@/types";

export const presets: Preset[] = [
  {
    id: "developer",
    name: "Geliştirici Profili",
    description: "Kod editörü, Git, Node.js ve geliştirme araçları",
    appIds: ["vscode", "git", "nodejs", "docker", "postman", "windows-terminal", "powertoys", "chrome"],
    tweakIds: ["high-performance-power-plan", "show-file-extensions", "disable-search-indexing"],
  },
  {
    id: "gamer",
    name: "Oyuncu Profili",
    description: "Steam, Discord ve performans odaklı ayarlar",
    appIds: ["steam", "epic-games", "discord", "obs", "chrome"],
    tweakIds: ["high-performance-power-plan", "best-performance-visuals"],
  },
  {
    id: "office",
    name: "Ofis Profili",
    description: "Ofis paketi, PDF okuyucu ve iletişim araçları",
    appIds: ["libreoffice", "acrobat-reader", "notepadpp", "teams", "zoom", "chrome"],
    tweakIds: ["show-file-extensions", "enable-dark-mode"],
  },
];