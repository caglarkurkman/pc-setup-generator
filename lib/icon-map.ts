import {
  Code, GitBranch, Hexagon, Terminal, Box, Send, SquareTerminal, Wrench,
  Gamepad2, MessageCircle, Video, PlayCircle, Music, Image, AudioLines,
  Users, MessageSquare, Hash, FileText, File, FileEdit, Globe, Shield,
  Archive, Search, Trash2, ShieldCheck, Usb, Download,
  type LucideIcon,
} from "lucide-react";

// data/apps.ts içindeki "icon" string'ini gerçek Lucide bileşenine eşler
const iconMap: Record<string, LucideIcon> = {
  code: Code, "git-branch": GitBranch, hexagon: Hexagon, terminal: Terminal,
  box: Box, send: Send, "square-terminal": SquareTerminal, wrench: Wrench,
  "gamepad-2": Gamepad2, "message-circle": MessageCircle, video: Video,
  "play-circle": PlayCircle, music: Music, image: Image, "audio-lines": AudioLines,
  users: Users, "message-square": MessageSquare, hash: Hash, "file-text": FileText,
  file: File, "file-edit": FileEdit, globe: Globe, shield: Shield, archive: Archive,
  search: Search, "trash-2": Trash2, "shield-check": ShieldCheck, usb: Usb, download: Download,
};

export function getAppIcon(name: string): LucideIcon {
  return iconMap[name] ?? Box;
}