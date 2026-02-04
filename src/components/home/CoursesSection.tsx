import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import courseDesign from "@/assets/course-design.jpg";
import patternDress from "@/assets/pattern-dress.jpg";
import patternPants from "@/assets/pattern-pants.jpg";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Fundamentos de Patronaje",
      description:
        "Aprende las bases del patronaje profesional desde cero. Ideal para principiantes que desean dominar las técnicas básicas.",
      image: courseDesign,
      level: "Principiante",
      duration: "12h",
      lessons: 8,
      price: 1200,
      currency: "MXN",
      link: "/cursos/fundamentos-patronaje",
    },
    {
      id: 2,
      title: "Diseño de Vestidos Avanzado",
      description:
        "Técnicas avanzadas para diseñar y confeccionar vestidos profesionales de alta costura.",
      image: patternDress,
      level: "Avanzado",
      duration: "20h",
      lessons: 12,
      price: 2500,
      currency: "MXN",
      link: "/cursos/vestidos-avanzado",
    },
    {
      id: 3,
      title: "Confección de Pantalones Profesionales",
      description:
        "Domina la confección de pantalones con técnicas profesionales y acabados impecables.",
      image: patternPants,
      level: "Intermedio",
      duration: "15h",
      lessons: 10,
      price: 1800,
      currency: "MXN",
      link: "/cursos/pantalones-profesionales",
    },
  ];

  const getLevelVariant = (level: string) => {
    switch (level.toLowerCase()) {
      case "principiante":
        return "outline";
      case "intermedio":
        return "secondary";
      case "avanzado":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide">
            CURSOS
          </h2>
          <p className="font-sans text-muted-foreground mt-6 max-w-xl mx-auto">
            Aprende confección y diseño de moda con cursos profesionales estructurados
          </p>
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link to={course.link} className="group block">
                {/* Image */}
                <div className="relative overflow-hidden rounded-sm mb-5">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={getLevelVariant(course.level)} className="uppercase text-[10px] tracking-widest font-sans">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex items-center gap-1 text-xs font-sans">
                      <Clock className="h-3.5 w-3.5" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-sans">
                      <BookOpen className="h-3.5 w-3.5" />
                      {course.lessons}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-foreground">
                    ${course.price.toLocaleString()}.00 {course.currency}
                  </span>
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.15em] text-primary font-sans font-medium group-hover:gap-2 gap-1 transition-all">
                    Ver más
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 md:mt-28 text-center py-16 border-t border-border"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4">
            Inicia Sesión para Acceder a los Cursos
          </h3>
          <p className="font-sans text-muted-foreground mb-8">
            Crea una cuenta gratuita para comprar y acceder a nuestros cursos de moda
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors rounded-sm"
          >
            Crear Cuenta
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
