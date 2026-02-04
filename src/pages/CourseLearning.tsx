import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  Lock, 
  CheckCircle2, 
  FileText, 
  Download, 
  ChevronDown,
  Clock,
  BookOpen,
  ClipboardList,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  type: "video" | "exercise" | "task";
}

interface Unit {
  id: string;
  title: string;
  lessons: Lesson[];
}

const courseData = {
  title: "Corte, Confección y Terminados de Lencería",
  progress: 35,
  units: [
    {
      id: "1",
      title: "Textiles y materiales",
      lessons: [
        { id: "1-1", title: "Los textiles", duration: "05:21", completed: true, locked: false, type: "video" as const },
        { id: "1-2", title: "Los materiales", duration: "01:49", completed: true, locked: false, type: "video" as const },
        { id: "1-3", title: "Materiales para confeccionar tus primeras piezas", duration: "00:00", completed: false, locked: false, type: "video" as const },
      ],
    },
    {
      id: "2",
      title: "Conocimiento de patrones y despierta tu creatividad",
      lessons: [
        { id: "2-1", title: "Patrón 1", duration: "00:38", completed: false, locked: false, type: "video" as const },
        { id: "2-2", title: "Diseño (Despierta tu creatividad)", duration: "00:40", completed: false, locked: true, type: "video" as const },
      ],
    },
    {
      id: "3",
      title: "Puntadas a utilizar para el primer proyecto",
      lessons: [
        { id: "3-1", title: "Puntada recta y zig zag", duration: "04:28", completed: false, locked: true, type: "video" as const },
        { id: "3-2", title: "Ejercicio: Práctica de puntadas", duration: "15:00", completed: false, locked: true, type: "exercise" as const },
      ],
    },
    {
      id: "4",
      title: "Corte, confección y terminados Bra I",
      lessons: [
        { id: "4-1", title: "Identifica los materiales Bra I", duration: "01:23", completed: false, locked: true, type: "video" as const },
        { id: "4-2", title: "Identificación del Derecho y el Revés", duration: "00:43", completed: false, locked: true, type: "video" as const },
        { id: "4-3", title: "Corte", duration: "06:25", completed: false, locked: true, type: "video" as const },
        { id: "4-4", title: "Unir piezas", duration: "09:56", completed: false, locked: true, type: "video" as const },
        { id: "4-5", title: "Elastizar o encauchetar", duration: "06:10", completed: false, locked: true, type: "video" as const },
        { id: "4-6", title: "Coser tapa varilla o cubre varilla", duration: "06:20", completed: false, locked: true, type: "video" as const },
        { id: "4-7", title: "Coser Gafete o broche", duration: "05:19", completed: false, locked: true, type: "video" as const },
        { id: "4-8", title: "Coser tiras para unirlas al bralette", duration: "09:55", completed: false, locked: true, type: "video" as const },
        { id: "4-9", title: "Detalles finales", duration: "01:30", completed: false, locked: true, type: "video" as const },
        { id: "4-10", title: "Tarea: Confecciona tu primer Bra", duration: "—", completed: false, locked: true, type: "task" as const },
      ],
    },
    {
      id: "5",
      title: "Corte, confección y terminados Bra II",
      lessons: [
        { id: "5-1", title: "Diseño, materiales & Patrón 2", duration: "00:36", completed: false, locked: true, type: "video" as const },
        { id: "5-2", title: "Corte", duration: "05:11", completed: false, locked: true, type: "video" as const },
        { id: "5-3", title: "Unir piezas", duration: "12:32", completed: false, locked: true, type: "video" as const },
        { id: "5-4", title: "Encauchetar y coser tapa varilla", duration: "08:03", completed: false, locked: true, type: "video" as const },
        { id: "5-5", title: "Coser Gafete y tiras para unirlas al bralette", duration: "05:46", completed: false, locked: true, type: "video" as const },
        { id: "5-6", title: "Detalles finales", duration: "00:37", completed: false, locked: true, type: "video" as const },
      ],
    },
  ],
  resources: [
    { id: "r1", title: "Patrón Bra I - Talla S", type: "PDF" },
    { id: "r2", title: "Patrón Bra I - Talla M", type: "PDF" },
    { id: "r3", title: "Patrón Bra I - Talla L", type: "PDF" },
    { id: "r4", title: "Guía de materiales recomendados", type: "PDF" },
    { id: "r5", title: "Tabla de medidas y tallas", type: "PDF" },
  ],
};

const CourseLearning = () => {
  const [selectedLesson, setSelectedLesson] = useState(courseData.units[0].lessons[2]);
  const [activeTab, setActiveTab] = useState<"content" | "resources" | "exercises">("content");

  const getLessonIcon = (lesson: Lesson) => {
    if (lesson.completed) return <CheckCircle2 className="h-4 w-4 text-green-600" />;
    if (lesson.locked) return <Lock className="h-4 w-4 text-muted-foreground" />;
    if (lesson.type === "exercise") return <ClipboardList className="h-4 w-4 text-primary" />;
    if (lesson.type === "task") return <BookOpen className="h-4 w-4 text-primary" />;
    return <Play className="h-4 w-4 text-primary" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Course Header */}
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                  Curso en progreso
                </p>
                <h1 className="font-serif text-2xl md:text-3xl text-foreground">
                  {courseData.title}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Tu progreso</p>
                  <p className="text-lg font-medium text-primary">{courseData.progress}% completado</p>
                </div>
                <div className="w-32">
                  <Progress value={courseData.progress} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - Video Player & Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-foreground/95 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary transition-colors">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-primary-foreground/80 text-sm">
                    {selectedLesson.title}
                  </p>
                </div>
              </motion.div>

              {/* Lesson Info */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Lección actual
                    </Badge>
                    <h2 className="font-serif text-2xl text-foreground">
                      {selectedLesson.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{selectedLesson.duration}</span>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="flex gap-4 border-b border-border mb-4">
                  {[
                    { id: "content", label: "Contenido", icon: BookOpen },
                    { id: "resources", label: "Recursos", icon: FileText },
                    { id: "exercises", label: "Ejercicios", icon: ClipboardList },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`flex items-center gap-2 pb-3 px-1 text-sm font-medium transition-colors border-b-2 -mb-[1px] ${
                        activeTab === tab.id
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === "content" && (
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p>
                      En esta lección aprenderás sobre los materiales esenciales 
                      que necesitarás para confeccionar tus primeras piezas de lencería. 
                      Cubriremos desde las telas más adecuadas hasta los accesorios 
                      y herramientas básicas.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li>Tipos de telas para lencería</li>
                      <li>Elásticos y sus usos</li>
                      <li>Gafetes y broches</li>
                      <li>Varillas y copas</li>
                    </ul>
                  </div>
                )}

                {activeTab === "resources" && (
                  <div className="space-y-3">
                    {courseData.resources.map((resource) => (
                      <div
                        key={resource.id}
                        className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {resource.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {resource.type}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "exercises" && (
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="flex items-start gap-3">
                        <ClipboardList className="h-5 w-5 text-primary mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">
                            Ejercicio: Identifica los materiales
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Observa las imágenes y selecciona el nombre correcto 
                            de cada material mostrado.
                          </p>
                          <Button variant="outline" size="sm">
                            Comenzar ejercicio
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">
                            Tarea: Lista de materiales
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Crea una lista con los materiales que necesitarás 
                            para tu primer proyecto y súbela en formato PDF.
                          </p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Subir tarea
                            </Button>
                            <Badge variant="secondary">Pendiente</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button variant="outline">
                  ← Lección anterior
                </Button>
                <Button variant="editorial">
                  Siguiente lección →
                </Button>
              </div>
            </div>

            {/* Sidebar - Course Content */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-border sticky top-24">
                <div className="p-4 border-b border-border">
                  <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Contenido del curso
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {courseData.units.reduce((acc, unit) => acc + unit.lessons.length, 0)} lecciones • 5 unidades
                  </p>
                </div>
                
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                  <Accordion type="multiple" defaultValue={["1", "2"]} className="w-full">
                    {courseData.units.map((unit) => (
                      <AccordionItem key={unit.id} value={unit.id} className="border-b border-border">
                        <AccordionTrigger className="px-4 py-3 hover:bg-secondary/30 text-left">
                          <span className="font-medium text-sm text-foreground pr-4">
                            {unit.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0">
                          <div className="space-y-0.5">
                            {unit.lessons.map((lesson) => (
                              <button
                                key={lesson.id}
                                onClick={() => !lesson.locked && setSelectedLesson(lesson)}
                                disabled={lesson.locked}
                                className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${
                                  selectedLesson.id === lesson.id
                                    ? "bg-primary/10 border-l-2 border-primary"
                                    : lesson.locked
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-secondary/30"
                                }`}
                              >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                  {getLessonIcon(lesson)}
                                  <span className="text-sm text-foreground truncate">
                                    {lesson.title}
                                  </span>
                                </div>
                                <span className="text-xs text-muted-foreground ml-2 shrink-0">
                                  {lesson.duration}
                                </span>
                              </button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Certificate Banner */}
                <div className="p-4 border-t border-border bg-gradient-to-r from-primary/5 to-secondary/30">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Certificado de finalización
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Completa el 100% para obtenerlo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearning;
