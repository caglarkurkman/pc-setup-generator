"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { AppGrid } from "@/components/apps/app-grid";
import { TweaksPanel } from "@/components/tweaks/tweaks-panel";
import { SummaryBar } from "@/components/summary/summary-bar";
import { apps } from "@/data/apps";
import { tweaks } from "@/data/tweaks";
import { presets } from "@/data/presets";
import { Preset } from "@/types";

export default function Home() {
  const [selectedAppIds, setSelectedAppIds] = useState<Set<string>>(new Set());
  const [enabledTweakIds, setEnabledTweakIds] = useState<Set<string>>(new Set());

  const toggleApp = (id: string) => {
    setSelectedAppIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleTweak = (id: string) => {
    setEnabledTweakIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Preset butonuna basıldığında mevcut seçimin üzerine yazar
  const applyPreset = (preset: Preset) => {
    setSelectedAppIds(new Set(preset.appIds));
    setEnabledTweakIds(new Set(preset.tweakIds));
  };

  const selectedApps = apps.filter((app) => selectedAppIds.has(app.id));
  const selectedTweaks = tweaks.filter((tweak) => enabledTweakIds.has(tweak.id));

  return (
    <main className="pb-24">
      <SiteHeader presets={presets} onApplyPreset={applyPreset} />
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-4 text-2xl font-semibold">Uygulamalar</h2>
        <AppGrid selectedIds={selectedAppIds} onToggle={toggleApp} />
      </section>
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-4 text-2xl font-semibold">Sistem Ayarları</h2>
        <TweaksPanel enabledIds={enabledTweakIds} onToggle={toggleTweak} />
      </section>
      <SummaryBar
        appCount={selectedAppIds.size}
        tweakCount={enabledTweakIds.size}
        selectedApps={selectedApps}
        selectedTweaks={selectedTweaks}
      />
    </main>
  );
}