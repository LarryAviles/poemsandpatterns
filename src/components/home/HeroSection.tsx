import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-editorial opacity-50" />

      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion editorial"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium mb-6"
          >
            Educación en Moda & Diseño
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading text-foreground mb-6"
          >
            Crea tu propia
            <br />
            <span className="italic font-light">colección</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
          >
            Descubre nuestros cursos profesionales de diseño y confección, junto
            con moldes de patrones listos para crear tus prendas favoritas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg">
              Explorar Cursos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/moldes">
              <Button variant="hero-outline" size="lg">
                Ver Moldes
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="w-32 h-32 rounded-full border border-primary/20 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center">
            <span className="font-serif text-sm italic text-primary">2026</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
