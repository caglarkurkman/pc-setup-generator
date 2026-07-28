"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { vscodeExtensions } from "@/data/vscode-extensions";
import { DevConfig } from "@/types";

interface DevConfigPanelProps {
  devConfig: DevConfig;
  onChange: (devConfig: DevConfig) => void;
}

export function DevConfigPanel({ devConfig, onChange }: DevConfigPanelProps) {
  const toggleExtension = (id: string) => {
    const next = devConfig.vscodeExtensionIds.includes(id)
      ? devConfig.vscodeExtensionIds.filter((extId) => extId !== id)
      : [...devConfig.vscodeExtensionIds, id];
    onChange({ ...devConfig, vscodeExtensionIds: next });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Geliştirici Ayarları (Opsiyonel)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="git-name">Git Kullanıcı Adı</Label>
            <Input
              id="git-name"
              placeholder="Ör: Çağlar Kürkman"
              value={devConfig.gitUserName}
              onChange={(e) => onChange({ ...devConfig, gitUserName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="git-email">Git E-posta</Label>
            <Input
              id="git-email"
              type="email"
              placeholder="Ör: caglar@example.com"
              value={devConfig.gitUserEmail}
              onChange={(e) => onChange({ ...devConfig, gitUserEmail: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>VS Code Eklentileri</Label>
          <div className="grid gap-2 sm:grid-cols-2">
            {vscodeExtensions.map((ext) => (
              <div key={ext.id} className="flex items-center gap-2">
                <Checkbox
                  id={ext.id}
                  checked={devConfig.vscodeExtensionIds.includes(ext.id)}
                  onCheckedChange={() => toggleExtension(ext.id)}
                />
                <Label htmlFor={ext.id} className="font-normal">
                  {ext.name}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}