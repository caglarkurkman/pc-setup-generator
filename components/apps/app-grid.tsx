"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apps } from "@/data/apps";
import { AppCategory } from "@/types";
import { AppCard } from "./app-card";

const categoryLabels: Record<AppCategory | "all", string> = {
  all: "Tümü",
  development: "Geliştirme",
  gaming: "Oyuncu",
  media: "Medya",
  communication: "İletişim",
  productivity: "Üretkenlik",
  utility: "Yardımcı",
};

interface AppGridProps {
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
}

export function AppGrid({ selectedIds, onToggle }: AppGridProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<AppCategory | "all">("all");

  // Kategoriye ve arama metnine göre filtrelenmiş liste; her render'da yeniden hesaplanmasın diye useMemo
  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesCategory = category === "all" || app.category === category;
      const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={category} onValueChange={(v) => setCategory(v as AppCategory | "all")}>
          <TabsList className="h-auto flex-wrap">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <TabsTrigger key={key} value={key}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Input
          placeholder="Uygulama ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:max-w-xs"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredApps.map((app) => (
          <AppCard
            key={app.id}
            app={app}
            isSelected={selectedIds.has(app.id)}
            onToggle={onToggle}
          />
        ))}
        {filteredApps.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">
            Aramanla eşleşen uygulama bulunamadı.
          </p>
        )}
      </div>
    </div>
  );
}