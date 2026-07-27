"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tweaks } from "@/data/tweaks";
import { TweakCategory } from "@/types";
import { TweakItem } from "./tweak-item";

const categoryTitles: Record<TweakCategory, string> = {
  privacy: "Gizlilik",
  performance: "Performans",
  appearance: "Görünüm",
};

interface TweaksPanelProps {
  enabledIds: Set<string>;
  onToggle: (id: string) => void;
}

export function TweaksPanel({ enabledIds, onToggle }: TweaksPanelProps) {
  const categories = Object.keys(categoryTitles) as TweakCategory[];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {categories.map((cat) => (
        <Card key={cat}>
          <CardHeader>
            <CardTitle>{categoryTitles[cat]}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {tweaks
              .filter((t) => t.category === cat)
              .map((tweak) => (
                <TweakItem
                  key={tweak.id}
                  tweak={tweak}
                  isEnabled={enabledIds.has(tweak.id)}
                  onToggle={onToggle}
                />
              ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}