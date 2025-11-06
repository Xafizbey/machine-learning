"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";

export default function ViewerPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const fileUrl = searchParams.get("url");
  const title = searchParams.get("title") || "Документ";

  if (!fileUrl) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Файл не найден</h1>
        <Button onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться назад
        </Button>
      </div>
    );
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`flex flex-col ${
        isFullscreen ? "fixed inset-0 z-50 bg-background" : "min-h-screen"
      }`}
    >
      {/* Header */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between gap-1 py-4 px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад
            </Button>
            <div className="border-l pl-4">
              <h1 className="text-lg font-semibold line-clamp-1">{title}</h1>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleFullscreen}
            className="hidden md:flex"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="mr-2 h-4 w-4" />
                Выход
              </>
            ) : (
              <>
                <Maximize2 className="mr-2 h-4 w-4" />
                Полный экран
              </>
            )}
          </Button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 bg-muted/20 w-[100%]">
        <iframe
          allowFullScreen
          src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-[100%] h-full"
          style={{
            minHeight: isFullscreen ? "100vh" : "calc(100vh - 100px)",
            border: "none",
          }}
          title={title}
        />
      </div>
    </div>
  );
}
