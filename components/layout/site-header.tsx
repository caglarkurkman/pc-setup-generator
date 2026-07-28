import { Button } from "@/components/ui/button";
import { Preset } from "@/types";

interface SiteHeaderProps {
  presets: Preset[];
  onApplyPreset: (preset: Preset) => void;
}

export function SiteHeader({ presets, onApplyPreset }: SiteHeaderProps) {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-16 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold tracking-tight">
            PC Setup Generator
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Format sonrası bilgisayarını dakikalar içinde hazır hale getir.
            Programlarını seç, ayarlarını yap, tek script indir.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {presets.map((preset) => (
            <Button key={preset.id} variant="outline" onClick={() => onApplyPreset(preset)}>
              {preset.name}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}