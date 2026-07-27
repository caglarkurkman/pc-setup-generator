"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tweak } from "@/types";

interface TweakItemProps {
  tweak: Tweak;
  isEnabled: boolean;
  onToggle: (id: string) => void;
}

export function TweakItem({ tweak, isEnabled, onToggle }: TweakItemProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border p-4">
      <div className="space-y-1">
        <Label htmlFor={tweak.id} className="font-medium">
          {tweak.title}
        </Label>
        <p className="text-sm text-muted-foreground">{tweak.description}</p>
      </div>
      <Switch id={tweak.id} checked={isEnabled} onCheckedChange={() => onToggle(tweak.id)} />
    </div>
  );
}