export type TweakCategory = "privacy" | "performance" | "appearance";

export interface Tweak {
  id: string;
  title: string;
  category: TweakCategory;
  description: string;
  psCommand: string; // script'e gömülecek PowerShell komutu
  regPath?: string; // varsa ilgili registry yolu
}