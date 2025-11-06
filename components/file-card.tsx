"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { File as FilePdf, FileText, Eye } from "lucide-react";
import Link from "next/link";

interface FileCardProps {
  number: number;
  title: string;
  description: string;
  fileType: "pdf" | "docx";
  fileUrl: string;
}

export default function FileCard({ number, title, description, fileType, fileUrl }: FileCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  
  const FileIcon = fileType === "pdf" ? FilePdf : FileText;
  const fileTypeName = fileType === "pdf" ? "PDF" : "DOCX";
  
  // Создаем URL для viewer
  const viewerUrl = `/viewer?url=${encodeURIComponent(fileUrl)}&title=${encodeURIComponent(title)}`;
  
  return (
    <Card 
      className="group relative transition-smooth hover:shadow-xl hover:scale-[1.02] overflow-hidden border-2 hover:border-purple-500/50 flex flex-col justify-between cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className="font-mono text-xs px-2 py-1 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-colors">
            #{number.toString().padStart(2, '0')}
          </Badge>
          <Badge 
            className={`text-xs font-medium ${
              fileType === "pdf" 
                ? "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20" 
                : "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
            }`}
          >
            {fileTypeName}
          </Badge>
        </div>
        <CardTitle className="line-clamp-2 text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex items-center justify-center py-8 relative z-10">
        <div className="relative">
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${
            fileType === "pdf" ? "from-red-500/20 to-pink-500/20" : "from-blue-500/20 to-cyan-500/20"
          } rounded-full blur-2xl transition-all duration-300 ${isHovering ? "scale-150 opacity-100" : "scale-100 opacity-0"}`}></div>
          
          {/* Icon */}
          <div className={`relative transition-all duration-300 ${isHovering ? "scale-110 rotate-3" : "scale-100 rotate-0"}`}>
            <FileIcon className={`w-16 h-16 ${
              fileType === "pdf" 
                ? "text-red-500/80 dark:text-red-400/80" 
                : "text-blue-500/80 dark:text-blue-400/80"
            }`} />
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="relative z-10">
        <Button 
          size="sm" 
          asChild 
          className="w-full group/btn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          <Link href={viewerUrl}>
            <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
            Открыть для просмотра
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}