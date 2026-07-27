"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { getAppIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { App } from "@/types";

interface AppCardProps {
  app: App;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export function AppCard({ app, isSelected, onToggle }: AppCardProps) {
  const Icon = getAppIcon(app.icon);

  return (
    <Card
      onClick={() => onToggle(app.id)}
      className={cn(
        "cursor-pointer transition-colors hover:border-primary",
        isSelected && "border-primary bg-primary/5"
      )}
    >
      <CardContent className="flex items-start gap-3 p-4">
        <Icon className="mt-1 size-5 shrink-0 text-muted-foreground" />
        <div className="flex-1">
          <p className="font-medium">{app.name}</p>
          <p className="text-sm text-muted-foreground">{app.description}</p>
        </div>
        <Checkbox checked={isSelected} className="mt-1" />
      </CardContent>
    </Card>
  );
}