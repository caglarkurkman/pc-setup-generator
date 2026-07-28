"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { importConfig } from "@/lib/config-io/import-config";
import { SavedConfig } from "@/types";

interface ConfigIoBarProps {
  onExport: () => void;
  onImport: (config: SavedConfig) => void;
}

export function ConfigIoBar({ onExport, onImport }: ConfigIoBarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const config = await importConfig(file);
      onImport(config);
    } catch {
      alert("JSON dosyası okunamadı, dosyanın bozuk olmadığından emin ol.");
    } finally {
      e.target.value = ""; // ayni dosyayi tekrar secebilmek icin input'u sifirla
    }
  };

  return (
    <div className="mx-auto flex max-w-5xl justify-end gap-2 px-4 pt-6">
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        onChange={handleFileChange}
        className="hidden"
      />
      <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
        JSON İçe Aktar
      </Button>
      <Button variant="outline" size="sm" onClick={onExport}>
        JSON Dışa Aktar
      </Button>
    </div>
  );
}