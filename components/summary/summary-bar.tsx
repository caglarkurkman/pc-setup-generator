import { Button } from "@/components/ui/button";

interface SummaryBarProps {
  appCount: number;
  tweakCount: number;
}

export function SummaryBar({ appCount, tweakCount }: SummaryBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 border-t bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{appCount}</span> uygulama,{" "}
          <span className="font-semibold text-foreground">{tweakCount}</span> ayar seçildi
        </p>
        {/* Script üretim mantığı FAZ 3'te bağlanacak */}
        <Button disabled={appCount === 0 && tweakCount === 0}>Script'i İndir</Button>
      </div>
    </div>
  );
}