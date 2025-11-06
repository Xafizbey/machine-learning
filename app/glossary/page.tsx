"use client";

import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Lightbulb, Filter, BookOpenText } from "lucide-react";
import { useState } from "react";

// Словарь терминов
const glossaryItems = [
  {
    term: "Машинное обучение",
    definition:
      "Раздел искусственного интеллекта, изучающий методы построения алгоритмов, способных обучаться на данных.",
    category: "basic",
  },
  {
    term: "AI Agent/ Интеллектуальный агент",
    definition:
      "Бот, используемый при решении задач искусственным интеллектом.",
    category: "basic",
  },
  {
    term: "Алгоритм",
    definition:
      "Конечная последовательность точно определённых действий, исполнение которых приводит к решению поставленной задачи.",
    category: "basic",
  },
  {
    term: "Artificial Intelligence (AI) / Искусственный интеллект (ИИ)",
    definition:
      "Искусственный интеллект (ИИ), по определению профессора Эндрю Мура, — это наука и технология разработки компьютеров, выполняющих функции, которые до недавнего времени считались прерогативой человеческого интеллекта.",
    category: "neural",
  },
  {
    term: "Autonomous / Автономный",
    definition:
      "Автономным называется устройство или инструмент, работающий без непосредственного управления человеком",
    category: "neural",
  },
  {
    term: "Сверточная нейронная сеть (CNN)",
    definition:
      "Специальная архитектура нейронных сетей, предложенная для эффективного распознавания изображений.",
    category: "neural",
  },
  {
    term: "Рекуррентная нейронная сеть (RNN)",
    definition:
      "Вид нейронных сетей, где связи между элементами образуют направленную последовательность, что позволяет обрабатывать последовательные данные.",
    category: "neural",
  },
  {
    term: "Градиентный спуск",
    definition:
      "Метод нахождения локального минимума функции с помощью движения вдоль градиента.",
    category: "method",
  },
  {
    term: "Переобучение",
    definition:
      "Явление, когда модель хорошо работает на обучающих данных, но плохо обобщает новые примеры.",
    category: "method",
  },
  {
    term: "Недообучение",
    definition:
      "Явление, когда модель не может уловить структуру данных и показывает плохие результаты как на тренировочных, так и на тестовых данных.",
    category: "method",
  },
  {
    term: "Функция потерь",
    definition:
      "Мера того, насколько прогноз модели отличается от фактического значения.",
    category: "method",
  },
  {
    term: "Метрика качества",
    definition:
      "Способ оценки эффективности модели машинного обучения на конкретной задаче.",
    category: "method",
  },
  {
    term: "Обучение с учителем",
    definition:
      "Тип машинного обучения, когда алгоритм обучается на размеченных данных.",
    category: "basic",
  },
  {
    term: "Обучение без учителя",
    definition:
      "Тип машинного обучения, когда алгоритм обучается на неразмеченных данных.",
    category: "basic",
  },
  {
    term: "Обучение с подкреплением",
    definition:
      "Область машинного обучения, где агент учится взаимодействовать с окружающей средой, получая вознаграждения за правильные действия.",
    category: "advanced",
  },
  {
    term: "Трансформер",
    definition:
      "Архитектура нейронной сети, основанная на механизме внимания, используемая для задач обработки естественного языка.",
    category: "advanced",
  },
  {
    term: "GPT (Generative Pre-trained Transformer)",
    definition:
      "Семейство языковых моделей, основанных на архитектуре трансформер, обученных генерировать текст, похожий на человеческий.",
    category: "advanced",
  },
  {
    term: "Эмбеддинги",
    definition:
      "Представление категориальных данных, таких как слова или предложения, в виде векторов в многомерном пространстве.",
    category: "advanced",
  },
  {
    term: "Тензор",
    definition:
      "Многомерный массив, обобщение матриц на произвольное число измерений.",
    category: "basic",
  },
  {
    term: "Gated Recurrent Unit (GRU)",
    definition:
      "Разновидность рекуррентных нейронных сетей, предназначенная для решения проблемы исчезающего градиента.",
    category: "neural",
  },
  {
    term: "Long Short-Term Memory (LSTM)",
    definition:
      "Особая разновидность архитектуры рекуррентных нейронных сетей, способная запоминать значения как на короткие, так и на длинные промежутки времени.",
    category: "neural",
  },
  {
    term: "Батч-нормализация",
    definition:
      "Метод, используемый для ускорения обучения нейронных сетей и повышения их стабильности путем нормализации входных данных каждого слоя.",
    category: "method",
  },
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Сортируем термины по алфавиту
  const sortedGlossary = [...glossaryItems].sort((a, b) =>
    a.term.localeCompare(b.term, "ru-RU")
  );

  // Фильтруем термины по поиску и категории
  const filteredGlossary = sortedGlossary.filter((item) => {
    const matchesSearch = searchQuery === "" || 
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Категории терминов
  const categories = [
    { value: "all", label: "Все термины", count: glossaryItems.length },
    { value: "basic", label: "Основные", count: glossaryItems.filter(i => i.category === "basic").length },
    { value: "neural", label: "Нейронные сети", count: glossaryItems.filter(i => i.category === "neural").length },
    { value: "method", label: "Методы", count: glossaryItems.filter(i => i.category === "method").length },
    { value: "advanced", label: "Продвинутые", count: glossaryItems.filter(i => i.category === "advanced").length },
  ];
  
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="relative mb-8 md:mb-12 py-8 md:py-12 rounded-2xl md:rounded-3xl overflow-hidden mx-4">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
        <div className="relative mx-auto max-w-3xl text-center px-4">
          <Badge variant="outline" className="mb-3 md:mb-4 text-xs md:text-sm">
            <Lightbulb className="mr-1 md:mr-2 h-3 w-3" />
            {glossaryItems.length} терминов
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight mb-3 md:mb-4 md:text-4xl lg:text-5xl">
            <span className="gradient-text">Глоссарий</span> ML
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
            Словарь ключевых терминов и понятий в области машинного обучения и искусственного интеллекта
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5" />
          <Input
            type="text"
            placeholder="Поиск терминов..."
            className="pl-10 md:pl-12 pr-4 py-3 md:py-6 text-sm md:text-base rounded-xl border-2 focus:border-pink-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground text-center">
          Найдено: {filteredGlossary.length} из {glossaryItems.length} терминов
        </p>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-8 md:mb-10 overflow-x-auto">
          <TabsList className="grid grid-cols-5 w-full max-w-3xl h-auto p-1">
            {categories.map((cat) => (
              <TabsTrigger 
                key={cat.value} 
                value={cat.value}
                className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600 dark:data-[state=active]:text-pink-400 py-2 md:py-3 flex flex-col gap-0.5 md:gap-1"
              >
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">{cat.label}</span>
                <span className="text-[10px] md:text-xs opacity-70">{cat.count}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={selectedCategory} className="max-w-5xl mx-auto">
          {filteredGlossary.length > 0 ? (
            <div className="grid gap-4">
              {filteredGlossary.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-pink-500/50 transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                        {item.term}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      {item.category === "basic" && "Основы"}
                      {item.category === "neural" && "НС"}
                      {item.category === "method" && "Методы"}
                      {item.category === "advanced" && "Продвинутые"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpenText className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground text-lg mb-2">Термины не найдены</p>
              <p className="text-sm text-muted-foreground">Попробуйте изменить поисковый запрос или выберите другую категорию</p>
      </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
