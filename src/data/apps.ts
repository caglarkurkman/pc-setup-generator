import { App } from "@/types";

export const apps: App[] = [
  // --- Geliştirme ---
  { id: "vscode", name: "Visual Studio Code", category: "development", description: "Hafif ve güçlü kod editörü", wingetId: "Microsoft.VisualStudioCode", icon: "code", isRecommended: true },
  { id: "git", name: "Git", category: "development", description: "Versiyon kontrol sistemi", wingetId: "Git.Git", icon: "git-branch", isRecommended: true },
  { id: "nodejs", name: "Node.js LTS", category: "development", description: "JavaScript çalışma ortamı", wingetId: "OpenJS.NodeJS.LTS", icon: "hexagon", isRecommended: false },
  { id: "python", name: "Python 3", category: "development", description: "Python programlama dili", wingetId: "Python.Python.3.12", icon: "terminal", isRecommended: false },
  { id: "docker", name: "Docker Desktop", category: "development", description: "Konteyner yönetim platformu", wingetId: "Docker.DockerDesktop", icon: "box", isRecommended: false },
  { id: "postman", name: "Postman", category: "development", description: "API test aracı", wingetId: "Postman.Postman", icon: "send", isRecommended: false },
  { id: "windows-terminal", name: "Windows Terminal", category: "development", description: "Modern terminal uygulaması", wingetId: "Microsoft.WindowsTerminal", icon: "square-terminal", isRecommended: true },
  { id: "powertoys", name: "PowerToys", category: "development", description: "Microsoft üretkenlik araçları seti", wingetId: "Microsoft.PowerToys", icon: "wrench", isRecommended: false },

  // --- Oyuncu ---
  { id: "steam", name: "Steam", category: "gaming", description: "PC oyun platformu", wingetId: "Valve.Steam", icon: "gamepad-2", isRecommended: true },
  { id: "epic-games", name: "Epic Games Launcher", category: "gaming", description: "Epic Games mağazası", wingetId: "EpicGames.EpicGamesLauncher", icon: "gamepad-2", isRecommended: false },
  { id: "discord", name: "Discord", category: "gaming", description: "Oyuncu topluluk ve sohbet uygulaması", wingetId: "Discord.Discord", icon: "message-circle", isRecommended: true },
  { id: "obs", name: "OBS Studio", category: "gaming", description: "Yayın ve ekran kaydı yazılımı", wingetId: "OBSProject.OBSStudio", icon: "video", isRecommended: false },

  // --- Medya ---
  { id: "vlc", name: "VLC Media Player", category: "media", description: "Evrensel medya oynatıcı", wingetId: "VideoLAN.VLC", icon: "play-circle", isRecommended: true },
  { id: "spotify", name: "Spotify", category: "media", description: "Müzik akış hizmeti", wingetId: "Spotify.Spotify", icon: "music", isRecommended: true },
  { id: "gimp", name: "GIMP", category: "media", description: "Ücretsiz görsel düzenleme programı", wingetId: "GIMP.GIMP", icon: "image", isRecommended: false },
  { id: "audacity", name: "Audacity", category: "media", description: "Ses düzenleme yazılımı", wingetId: "Audacity.Audacity", icon: "audio-lines", isRecommended: false },
  { id: "blender", name: "Blender", category: "media", description: "3D modelleme ve animasyon", wingetId: "BlenderFoundation.Blender", icon: "box", isRecommended: false },
  { id: "irfanview", name: "IrfanView", category: "media", description: "Hızlı görsel görüntüleyici", wingetId: "IrfanSoftware.IrfanView", icon: "image", isRecommended: false },

  // --- İletişim ---
  { id: "zoom", name: "Zoom", category: "communication", description: "Video konferans uygulaması", wingetId: "Zoom.Zoom", icon: "video", isRecommended: false },
  { id: "teams", name: "Microsoft Teams", category: "communication", description: "Kurumsal iletişim platformu", wingetId: "Microsoft.Teams", icon: "users", isRecommended: false },
  { id: "whatsapp", name: "WhatsApp", category: "communication", description: "Mesajlaşma uygulaması", wingetId: "WhatsApp.WhatsApp", icon: "message-square", isRecommended: false },
  { id: "telegram", name: "Telegram", category: "communication", description: "Hızlı ve güvenli mesajlaşma", wingetId: "Telegram.TelegramDesktop", icon: "send", isRecommended: false },
  { id: "slack", name: "Slack", category: "communication", description: "Takım iletişim aracı", wingetId: "SlackTechnologies.Slack", icon: "hash", isRecommended: false },

  // --- Üretkenlik ---
  { id: "libreoffice", name: "LibreOffice", category: "productivity", description: "Ücretsiz ofis paketi", wingetId: "TheDocumentFoundation.LibreOffice", icon: "file-text", isRecommended: false },
  { id: "acrobat-reader", name: "Adobe Acrobat Reader", category: "productivity", description: "PDF görüntüleyici", wingetId: "Adobe.Acrobat.Reader.64-bit", icon: "file", isRecommended: true },
  { id: "notepadpp", name: "Notepad++", category: "productivity", description: "Gelişmiş metin editörü", wingetId: "Notepad++.Notepad++", icon: "file-edit", isRecommended: false },

  // --- Yardımcı Araçlar ---
  { id: "chrome", name: "Google Chrome", category: "utility", description: "Google'ın web tarayıcısı", wingetId: "Google.Chrome", icon: "globe", isRecommended: true },
  { id: "firefox", name: "Mozilla Firefox", category: "utility", description: "Açık kaynaklı web tarayıcısı", wingetId: "Mozilla.Firefox", icon: "globe", isRecommended: false },
  { id: "brave", name: "Brave Browser", category: "utility", description: "Gizlilik odaklı tarayıcı", wingetId: "Brave.Brave", icon: "shield", isRecommended: false },
  { id: "7zip", name: "7-Zip", category: "utility", description: "Dosya sıkıştırma aracı", wingetId: "7zip.7zip", icon: "archive", isRecommended: true },
  { id: "winrar", name: "WinRAR", category: "utility", description: "Popüler arşivleme programı", wingetId: "RARLab.WinRAR", icon: "archive", isRecommended: false },
  { id: "everything", name: "Everything", category: "utility", description: "Anında dosya arama aracı", wingetId: "voidtools.Everything", icon: "search", isRecommended: true },
  { id: "ccleaner", name: "CCleaner", category: "utility", description: "Sistem temizleme aracı", wingetId: "Piriform.CCleaner", icon: "trash-2", isRecommended: false },
  { id: "malwarebytes", name: "Malwarebytes", category: "utility", description: "Zararlı yazılım tarayıcı", wingetId: "Malwarebytes.Malwarebytes", icon: "shield-check", isRecommended: false },
  { id: "rufus", name: "Rufus", category: "utility", description: "Önyükleme USB oluşturucu", wingetId: "Rufus.Rufus", icon: "usb", isRecommended: false },
  { id: "qbittorrent", name: "qBittorrent", category: "utility", description: "Torrent istemcisi", wingetId: "qBittorrent.qBittorrent", icon: "download", isRecommended: false },
];