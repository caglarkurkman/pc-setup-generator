export type AppCategory =
  | "development"
  | "gaming"
  | "media"
  | "communication"
  | "productivity"
  | "utility";

export interface App {
  id: string;
  name: string;
  category: AppCategory;
  description: string;
  wingetId: string; // winget install --id <wingetId>
  icon: string;
  isRecommended: boolean;
}