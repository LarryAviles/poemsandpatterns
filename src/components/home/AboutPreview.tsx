import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import courseDesign from "@/assets/course-design.jpg";

const AboutPreview = () => {
  const stats = [
    { icon: Users, value: "2,500+", label: "Estudiantes" },
    { icon: BookOpen, value: "15", label: "Cursos" },
    { icon: Award, value: "50+", label: "Moldes" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={courseDesign}
                alt="About Poems & Patterns"
                className="w-full rounded-sm shadow-elegant"
              />
            </div>
            {/* Decorative background */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-blush rounded-sm -z-0" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium">
              Sobre Nosotros
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6 text-foreground">
              Educación de moda
              <br />
              <span className="italic">con pasión</span>
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              En Poems & Patterns combinamos la elegancia del diseño de moda 
              con metodologías educativas efectivas. Nuestros cursos están 
              diseñados para transformar tu creatividad en prendas reales, 
              desde principiantes hasta diseñadores avanzados.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="font-serif text-2xl font-medium text-foreground">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <Button variant="editorial">
              Conocer Más
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
