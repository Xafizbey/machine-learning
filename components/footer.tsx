import { BrainCircuit, Github, Mail, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-gradient-to-b from-background to-muted/20">
      <div className="container m-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group hover:scale-105 transition-transform">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-lg group-hover:rotate-6 transition-transform">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                ML Portal
              </span>
            </Link>
            <p className="text-sm text-muted-foreground hover:text-foreground transition-colors text-center md:text-left max-w-xs leading-relaxed">
              Образовательный портал по машинному обучению и искусственному интеллекту
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Быстрый доступ</h3>
            <nav className="flex flex-col items-center md:items-start gap-3 text-sm">
              <Link href="/lectures" className="group flex items-center gap-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all">
                <span className="group-hover:scale-110 transition-transform">📚</span>
                <span className="relative">
                  Лекции
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <Link href="/labs" className="group flex items-center gap-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <span className="group-hover:scale-110 transition-transform">🧪</span>
                <span className="relative">
                  Лабораторные работы
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
              <Link href="/glossary" className="group flex items-center gap-2 text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-all">
                <span className="group-hover:scale-110 transition-transform">💡</span>
                <span className="relative">
                  Глоссарий
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </nav>
          </div>

          {/* Info Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Информация</h3>
            <div className="flex flex-col items-center md:items-start gap-3 text-sm">
              <div className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <span className="group-hover:scale-110 transition-transform">🎓</span>
                <span>Для учебных целей</span>
              </div>
              <div className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <span className="group-hover:scale-110 transition-transform">📖</span>
                <span>14+ лекций</span>
              </div>
              <div className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-default">
                <span className="group-hover:scale-110 transition-transform">✨</span>
                <span>Регулярные обновления</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t container m-auto border-border/40 bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1 hover:text-foreground transition-colors">
              © 2025 ML Portal. Создано с <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> для студентов
            </p>
            <p className="text-xs hover:text-foreground transition-colors">
              Все материалы предназначены для образовательных целей
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}