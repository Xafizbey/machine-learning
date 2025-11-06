"use client";

import { Metadata } from "next";
import FileCard from "@/components/file-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Filter } from "lucide-react";
import { useState } from "react";

// Моковые данные для лекций
const lectures = [
  {
    id: 1,
    title: "Введение в машинное обучение",
    description: "Основные понятия, история развития и области применения машинного обучения",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+1.+%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B2+%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%BD%D0%BE%D0%B5+%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5.pdf",
    category: "basics"
  },
  {
    id: 2,
    title: "Линейная регрессия",
    description: "Математические основы, градиентный спуск, оценка качества модели",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+2.%D0%9B%D0%B8%D0%BD%D0%B5%D0%B8%CC%86%D0%BD%D0%B0%D1%8F+%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F%2C+%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8+%D0%BF%D0%BE%D1%82%D0%B5%D1%80%D1%8C.pdf",
    category: "basics"
  },
  {
    id: 3,
    title: "Обобщающая способность, градиентные методы обучения",
    description: "Переобучение, Оценивание качества моделей, Обучение линейной регрессии",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+3+%D0%9E%D0%B1%D0%BE%D0%B1%D1%89%D0%B0%D1%8E%D1%89%D0%B0%D1%8F+%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%2C+%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B5+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B+%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.pdf",
    category: "basics"
  },
  {
    id: 4,
    title: "Градиен методы.",
    description: "Регуляризация, гиперпараметры, разреженные модели",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+4.+%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B.pdf", 
    category: "basics"
  },
  {
    id: 5,
    title: "Линейная классификация",
    description: "Логистическая регрессия, SVM, Softmax, KNN",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+5.+%D0%9B%D0%B8%D0%BD%D0%B5%D0%B8%CC%86%D0%BD+%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F.pdf",
    category: "neural"
  },
  {
    id: 6,
    title: "Логистическая регрессия",
    description: "Архитектура CNN, свертки, пулинг и применение в компьютерном зрении",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+6.+%D0%9B%D0%BE%D0%B3%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F.pdf",
    category: "neural"
  },
  {
    id: 7,
    title: "Полиномиальная регрессия",
    description: "Полиномиальная регрессия, регуляризация, переобучение и недообучение",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+7.+%D0%9F%D0%BE%D0%BB%D0%B8%D0%BD%D0%BE%D0%BC%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B8%D1%8F..pdf",
    category: "neural"
  },
  {
    id: 8,
    title: "Многоклассовая классификация",
    description: "Softmax, SVM, KNN, многоклассовая логистическая регрессия",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+8.+%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F.pdf",
    category: "neural"
  },
  {
    id: 9,
    title: "Решающие деревья",
    description: "Определение решающего дерева, Построение деревьев, Критерии информативности",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+9.++%D0%A0%D0%B5%D1%88%D0%B0%D1%8E%D1%89%D0%B8%D0%B5+%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D1%8F.pdf",
    category: "advanced"
  },
  {
    id: 10,
    title: "Бэггинг, случайные леса",
    description: "Бутстрап,  Bias-Variance decomposition, Минимум среднеквадратичного ри",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+10+.%D0%91%D1%8D%D0%B3%D0%B3%D0%B8%D0%BD%D0%B3%2C+%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B8%CC%86%D0%BD%D1%8B%D0%B5+%D0%BB%D0%B5%D1%81%D0%B0.pdf",
    category: "advanced"
  },
  {
    id: 11,
    title: "Градиентный бустинг",
    description: "Бустинг в задаче регрессии, Градиентный бустинг",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+11.+%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B8%CC%86+%D0%B1%D1%83%D1%81%D1%82%D0%B8%D0%BD%D0%B3.pdf",
    category: "advanced"
  },
  {
    id: 12,
    title: "Градиентный бустинг",
    description: "Бустинг в задаче регрессии, Градиентный бустинг",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+12.+%D0%93%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B8%CC%86+%D0%B1%D1%83%D1%81%D1%82%D0%B8%D0%BD%D0%B3.pdf",
    category: "advanced"
  },
  {
    id: 13,
    title: "Бустинг и случайные леса",
    description: "Линейные композиции, бустинг и случайные леса",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+13.+%D0%B1%D1%83%D1%81%D1%82%D0%B8%D0%BD%D0%B3+%D0%B8+%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B8%CC%86%D0%BD%D1%8B%D0%B5+%D0%BB%D0%B5%D1%81%D0%B0..pdf",
    category: "advanced"
  },
  {
    id: 14,
    title: "Класстеризация . Обучение без учителя",
    description: "Кластеризация, Метрики качества кластеризации, Алгоритм k-means",
    fileType: "pdf" as const,
    fileUrl: "https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/lectures/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F+14.+%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D1%82%D0%B5%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F+.+%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B1%D0%B5%D0%B7+%D1%83%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8F.pdf",
    category: "advanced"
  },
];

export default function LecturesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Группируем лекции по категориям
  const basicLectures = lectures.filter(lecture => lecture.category === "basics");
  const neuralLectures = lectures.filter(lecture => lecture.category === "neural");
  const advancedLectures = lectures.filter(lecture => lecture.category === "advanced");
  
  // Функция поиска
  const filterLectures = (lecturesList: typeof lectures) => {
    if (!searchQuery) return lecturesList;
    return lecturesList.filter(lecture => 
      lecture.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecture.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="relative mb-8 md:mb-12 py-8 md:py-12 rounded-2xl md:rounded-3xl overflow-hidden mx-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
        <div className="relative mx-auto max-w-3xl text-center px-4">
          <Badge variant="outline" className="mb-3 md:mb-4 text-xs md:text-sm">
            <BookOpen className="mr-1 md:mr-2 h-3 w-3" />
            14 лекций доступно
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight mb-3 md:mb-4 md:text-4xl lg:text-5xl">
            <span className="gradient-text">Лекции</span> по ML
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
            Теоретические материалы по машинному обучению, алгоритмам и нейронным сетям
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5" />
          <Input
            type="text"
            placeholder="Поиск по лекциям..."
            className="pl-10 md:pl-12 pr-4 py-3 md:py-6 text-sm md:text-base rounded-xl border-2 focus:border-purple-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="all" className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-8 md:mb-10 overflow-x-auto">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl h-auto p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-400 py-2 md:py-3 text-xs md:text-sm">
              Все
            </TabsTrigger>
            <TabsTrigger value="basics" className="data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 py-2 md:py-3 text-xs md:text-sm">
              Основы
            </TabsTrigger>
            <TabsTrigger value="neural" className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600 dark:data-[state=active]:text-pink-400 py-2 md:py-3 text-xs md:text-sm">
              НС
            </TabsTrigger>
            <TabsTrigger value="advanced" className="data-[state=active]:bg-amber-500/10 data-[state=active]:text-amber-600 dark:data-[state=active]:text-amber-400 py-2 md:py-3 text-xs md:text-sm">
              Продвин.
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterLectures(lectures).map((lecture) => (
              <FileCard
                key={lecture.id}
                number={lecture.id}
                title={lecture.title}
                description={lecture.description}
                fileType={lecture.fileType}
                fileUrl={lecture.fileUrl}
              />
            ))}
          </div>
          {filterLectures(lectures).length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Лекции не найдены</p>
            </div>
          )}
        </TabsContent>
      
        <TabsContent value="basics" className="space-y-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Основы ML</h2>
            <Badge variant="outline">{filterLectures(basicLectures).length} лекций</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterLectures(basicLectures).map((lecture) => (
              <FileCard
                key={lecture.id}
                number={lecture.id}
                title={lecture.title}
                description={lecture.description}
                fileType={lecture.fileType}
                fileUrl={lecture.fileUrl}
              />
            ))}
          </div>
          {filterLectures(basicLectures).length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Лекции не найдены</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="neural" className="space-y-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Нейронные сети</h2>
            <Badge variant="outline">{filterLectures(neuralLectures).length} лекций</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterLectures(neuralLectures).map((lecture) => (
              <FileCard
                key={lecture.id}
                number={lecture.id}
                title={lecture.title}
                description={lecture.description}
                fileType={lecture.fileType}
                fileUrl={lecture.fileUrl}
              />
            ))}
          </div>
          {filterLectures(neuralLectures).length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Лекции не найдены</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Продвинутые темы</h2>
            <Badge variant="outline">{filterLectures(advancedLectures).length} лекций</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterLectures(advancedLectures).map((lecture) => (
              <FileCard
                key={lecture.id}
                number={lecture.id}
                title={lecture.title}
                description={lecture.description}
                fileType={lecture.fileType}
                fileUrl={lecture.fileUrl}
              />
            ))}
          </div>
          {filterLectures(advancedLectures).length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Лекции не найдены</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}