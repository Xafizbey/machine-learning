import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Lightbulb, Beaker, BookOpen, FileQuestion, Sparkles, Brain, Rocket, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-16 w-full md:py-24 lg:py-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-gradient"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000 hidden sm:block"></div>
        
        <div className="container relative z-10 flex flex-col items-center text-center px-4">
          {/* <Badge variant="secondary" className="mb-4 md:mb-6 animate-fade-in px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm">
            <Sparkles className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
            Учебный портал
          </Badge> */}
          
          <h1 className="animate-fade-in-delay-1 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none max-w-4xl px-2">
            Машинное обучение{" "}
            <span className="gradient-text">нового поколения</span>
          </h1>
          
          <p className="mt-4 md:mt-6 animate-fade-in-delay-2 text-muted-foreground text-base md:text-lg lg:text-xl max-w-3xl px-2">
            Все материалы для изучения искусственного интеллекта и машинного обучения
          </p>
          
          <div className="mt-6 md:mt-10 animate-fade-in-delay-3 flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 w-full max-w-md sm:max-w-none">
            <Button asChild size="default" className="text-sm md:text-base group w-full sm:w-auto">
              <Link href="/lectures">
                <Rocket className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                Начать обучение
              </Link>
            </Button>
            <Button asChild variant="outline" size="default" className="text-sm md:text-base w-full sm:w-auto">
              <Link href={`/viewer?url=${encodeURIComponent("https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/labs/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B0%D1%8F+%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0+%D0%9A%D1%83%D1%80%D1%81%D0%B0.pdf")}&title=${encodeURIComponent("Программа курса")}`}>
                Программа курса
              </Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-10 md:mt-16 grid grid-cols-3 gap-3 md:gap-8 w-full max-w-3xl">
            <div className="flex flex-col items-center p-3 md:p-6 rounded-lg md:rounded-xl bg-card/50 backdrop-blur border border-border/50 hover-scale">
              <div className="text-2xl md:text-3xl font-bold gradient-text">14+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Лекций</div>
            </div>
            <div className="flex flex-col items-center p-3 md:p-6 rounded-lg md:rounded-xl bg-card/50 backdrop-blur border border-border/50 hover-scale">
              <div className="text-2xl md:text-3xl font-bold gradient-text">2+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Лаб. работ</div>
            </div>
            <div className="flex flex-col items-center p-3 md:p-6 rounded-lg md:rounded-xl bg-card/50 backdrop-blur border border-border/50 hover-scale">
              <div className="text-2xl md:text-3xl font-bold gradient-text">20+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Терминов</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sections */}
      <section className="container py-12 md:py-20 px-4">
        <div className="text-center mb-10 md:mb-16">
          <Badge variant="outline" className="mb-3 md:mb-4 text-xs md:text-sm">
            <Brain className="mr-1 md:mr-2 h-3 w-3" />
            Учебные материалы
          </Badge>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 px-2">
          Разделы курса
        </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Материалы для изучения машинного обучения от основ до продвинутых техник
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="group transition-smooth hover:shadow-xl hover:scale-[1.02] hover:border-purple-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className="text-xs">14 шт</Badge>
              </div>
              <CardTitle className="text-xl">Лекции</CardTitle>
              <CardDescription>Теоретические материалы по ML</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Полный комплект лекций, охватывающий фундаментальные концепции, алгоритмы и современные подходы в машинном обучении
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group/btn">
                <Link href="/lectures">
                  Перейти к лекциям
                  <TrendingUp className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="group transition-smooth hover:shadow-xl hover:scale-[1.02] hover:border-blue-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Beaker className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className="text-xs">2 шт</Badge>
              </div>
              <CardTitle className="text-xl">Лабораторные</CardTitle>
              <CardDescription>Практические задания</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Практические задания для закрепления теоретических знаний и развития навыков программирования в ML
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group/btn">
                <Link href="/labs">
                  Перейти к лабораторным
                  <TrendingUp className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="group transition-smooth hover:shadow-xl hover:scale-[1.02] hover:border-pink-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className="text-xs">20+ шт</Badge>
              </div>
              <CardTitle className="text-xl">Глоссарий</CardTitle>
              <CardDescription>Термины и определения</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Подробный словарь терминов и понятий в области искусственного интеллекта и машинного обучения
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group/btn">
                <Link href="/glossary">
                  Перейти к глоссарию
                  <TrendingUp className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="group transition-smooth hover:shadow-xl hover:scale-[1.02] hover:border-amber-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <FileQuestion className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className="text-xs">PDF</Badge>
              </div>
              <CardTitle className="text-xl">Тесты</CardTitle>
              <CardDescription>Проверка знаний</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Набор тестовых вопросов для проверки и закрепления полученных знаний по всем темам курса
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group/btn">
                <Link href={`/viewer?url=${encodeURIComponent("https://machine-learning-kstu.s3.eu-north-1.amazonaws.com/7%D0%90+-+%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B5+%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B.pdf")}&title=${encodeURIComponent("Тестовые вопросы")}`}>
                  Перейти к тестам
                  <TrendingUp className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      {/* Feature section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container relative px-4">
          <div className="text-center mb-10 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 text-xs md:text-sm">
              <Sparkles className="mr-1 md:mr-2 h-3 w-3" />
              Преимущества
            </Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 px-2">
              Почему выбирают нас
          </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
              Обучение машинному обучению с упором на практические навыки
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent hover:from-purple-500/10 transition-all hover:scale-105 hover:shadow-lg border border-transparent hover:border-purple-500/20">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Актуальные материалы</h3>
              <p className="text-muted-foreground leading-relaxed">
                Постоянно обновляемый контент, соответствующий последним достижениям в области машинного обучения
              </p>
            </div>
            
            <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent hover:from-blue-500/10 transition-all hover:scale-105 hover:shadow-lg border border-transparent hover:border-blue-500/20">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Структурированный подход</h3>
              <p className="text-muted-foreground leading-relaxed">
                Логическая последовательность материалов от основ до продвинутых тем с постепенным усложнением
              </p>
            </div>
            
            <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-pink-500/5 to-transparent hover:from-pink-500/10 transition-all hover:scale-105 hover:shadow-lg border border-transparent hover:border-pink-500/20">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative rounded-full bg-gradient-to-br from-pink-500 to-rose-500 p-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Практический подход</h3>
              <p className="text-muted-foreground leading-relaxed">
                Лабораторные работы с реальными примерами и задачами из индустрии для закрепления навыков
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-20 text-center px-4">
            <div className="inline-flex flex-col items-center p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-purple-500/20 w-full max-w-2xl">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Готовы начать обучение?
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6 max-w-md">
                Изучите основы и продвинутые методы машинного обучения
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                <Button asChild size="default" className="group w-full sm:w-auto">
                  <Link href="/lectures">
                    <Rocket className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                    Начать сейчас
                  </Link>
                </Button>
                <Button asChild variant="outline" size="default" className="w-full sm:w-auto">
                  <Link href="/glossary">
                    Изучить глоссарий
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}