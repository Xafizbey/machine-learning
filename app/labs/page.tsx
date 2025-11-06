"use client";

import { Metadata } from "next";
import FileCard from "@/components/file-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Beaker, Code, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

// Моковые данные для лабораторных работ
const labs = [
  {
    id: 1,
    title: "Лабораторная работа 1",
    description: "Работа с табличными данными и Рandas",
    fileType: "pdf" as const,
    fileUrl:
      "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0+1.pdf",
    category: "setup",
  },
  {
    id: 2,
    title: "Лабораторная работа 2",
    description: "Sklearn и линейная регрессия",
    fileType: "pdf" as const,
    fileUrl:
      "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%9B%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0+2.pdf",
    category: "setup",
  },
];

export default function LabsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Группируем лабораторные по категориям
  const setupLabs = labs.filter((lab) => lab.category === "setup");
  const basicLabs = labs.filter((lab) => lab.category === "basic");
  const advancedLabs = labs.filter((lab) => lab.category === "advanced");
  const researchLabs = labs.filter((lab) => lab.category === "research");

  // Функция поиска
  const filterLabs = (labsList: typeof labs) => {
    if (!searchQuery) return labsList;
    return labsList.filter(lab => 
      lab.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="relative mb-8 md:mb-12 py-8 md:py-12 rounded-2xl md:rounded-3xl overflow-hidden mx-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10"></div>
        <div className="relative mx-auto max-w-3xl text-center px-4">
          <Badge variant="outline" className="mb-3 md:mb-4 text-xs md:text-sm">
            <Beaker className="mr-1 md:mr-2 h-3 w-3" />
            {labs.length} лабораторных работ
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight mb-3 md:mb-4 md:text-4xl lg:text-5xl">
            <span className="gradient-text">Лабораторные</span> работы
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
            Практические задания для закрепления теоретических знаний и развития навыков программирования
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5" />
          <Input
            type="text"
            placeholder="Поиск лабораторных работ..."
            className="pl-10 md:pl-12 pr-4 py-3 md:py-6 text-sm md:text-base rounded-xl border-2 focus:border-blue-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-8 md:mb-10">
          <TabsList className="grid grid-cols-2 w-full max-w-md h-auto p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 py-2 md:py-3 text-xs md:text-sm">
              Все ({labs.length})
            </TabsTrigger>
            <TabsTrigger value="setup" className="data-[state=active]:bg-teal-500/10 data-[state=active]:text-teal-600 dark:data-[state=active]:text-teal-400 py-2 md:py-3 text-xs md:text-sm">
              Установка ({setupLabs.length})
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterLabs(labs).map((lab) => (
              <FileCard
                key={lab.id}
                number={lab.id}
                title={lab.title}
                description={lab.description}
                fileType={lab.fileType}
                fileUrl={lab.fileUrl}
              />
            ))}
          </div>
          {filterLabs(labs).length === 0 && (
            <div className="text-center py-16">
              <Code className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground text-lg">Лабораторные работы не найдены</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="setup" className="space-y-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Установка и настройка</h2>
            <Badge variant="outline">{filterLabs(setupLabs).length} работ</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterLabs(setupLabs).map((lab) => (
              <FileCard
                key={lab.id}
                number={lab.id}
                title={lab.title}
                description={lab.description}
                fileType={lab.fileType}
                fileUrl={lab.fileUrl}
              />
            ))}
          </div>
          {filterLabs(setupLabs).length === 0 && (
            <div className="text-center py-16">
              <Code className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground text-lg">Лабораторные работы не найдены</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
