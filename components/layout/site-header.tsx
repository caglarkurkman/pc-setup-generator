import { Button } from "@/components/ui/button";

export function SiteHeader() {
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

        {/* Fonksiyonelliği FAZ 4'te bağlanacak, şimdilik sadece görsel */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline">Geliştirici Profili</Button>
          <Button variant="outline">Oyuncu Profili</Button>
          <Button variant="outline">Ofis Profili</Button>
        </div>
      </div>
    </header>
  );
}