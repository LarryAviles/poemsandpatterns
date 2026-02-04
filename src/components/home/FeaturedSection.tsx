import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, FileText } from "lucide-react";
import patternDress from "@/assets/pattern-dress.jpg";
import courseDesign from "@/assets/course-design.jpg";

const FeaturedSection = () => {
  const features = [
    {
      title: "Cursos Online",
      subtitle: "Aprende diseño & confección",
      description:
        "Cursos profesionales con videos, lecciones paso a paso, y certificación al completar.",
      image: courseDesign,
      icon: Sparkles,
      link: "/cursos",
      cta: "Ver Cursos",
    },
    {
      title: "Tienda de Moldes",
      subtitle: "Patrones listos para usar",
      description:
        "Descarga moldes PDF de alta calidad con instrucciones detalladas para cada talla.",
      image: patternDress,
      icon: FileText,
      link: "/moldes",
      cta: "Explorar Moldes",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium">
            Nuestras Categorías
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-foreground">
            Explora & <span className="italic">Aprende</span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link to={feature.link} className="group block">
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 p-3 bg-background/90 backdrop-blur-sm rounded-full">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">
                  {feature.subtitle}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light mt-2 mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <span className="inline-flex items-center text-sm uppercase tracking-[0.15em] text-primary font-sans font-medium group-hover:gap-3 gap-2 transition-all">
                  {feature.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
