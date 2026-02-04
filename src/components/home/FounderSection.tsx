import { motion } from "framer-motion";
import founderPortrait from "@/assets/founder-portrait.jpg";

const FounderSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10">
              <img
                src={founderPortrait}
                alt="Fundadora de Poems & Patterns"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-sm shadow-elegant"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full max-w-md h-full bg-primary/10 rounded-sm -z-0 hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium">
              Acerca de Mí
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-8 text-foreground">
              La Historia
              <br />
              <span className="italic">Detrás del Diseño</span>
            </h2>

            <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
              <p>
                Soy diseñadora de moda, docente y creadora detrás de{" "}
                <span className="text-foreground font-medium">Poems & Patterns</span>.
              </p>

              <p>
                Mi pasión por el diseño comenzó de pequeña al coleccionar revistas 
                Vogue, Elle y Harper's Bazaar, leyendo fielmente cada edición. Esa 
                curiosidad me llevó a formarme como aprendiz a los 16 años en Ajuar 
                Casa de Modas, una base práctica en pasarelas y diseño de colecciones 
                que luego perfeccioné con la Licenciatura en Diseño de la Moda e 
                Industria del Vestido en la UVM.
              </p>

              <p>
                Esa etapa culminó con la presentación de mi trabajo en Uniimoda en 
                Aguascalientes —homenaje a Lila Downs— y más tarde, con el{" "}
                <span className="text-foreground font-medium">
                  Primer Lugar en el concurso "Diseña tu Colección de Zapatos"
                </span>{" "}
                de Estación Quince.
              </p>

              <p>
                He dedicado mi carrera a construir puentes entre el know-how y la 
                inspiración: enseñando patronaje, moldeando identidades de marca a 
                través del visual merchandising, desarrollando colecciones con 
                concepto y vistiendo personajes desde el lenguaje escénico del 
                bellydance. La síntesis de este recorrido es el diplomado que diseñé 
                y dirijo:{" "}
                <span className="text-foreground font-medium italic">
                  Diseño y Dirección Creativa de Vestuario Escénico
                </span>
                , donde la mirada curatorial y la técnica se funden.
              </p>

              <p>
                Ahora, en Poems & Patterns, he creado un espacio donde esa experiencia 
                se transforma en herramientas claras, cursos estructurados y 
                acompañamiento personalizado para quienes quieren aprender moda desde 
                la base.
              </p>

              <p className="text-foreground italic border-l-2 border-primary pl-6 mt-8">
                "Porque creo que el buen diseño se construye desde el desarrollo del 
                pensamiento crítico —pilar fundamental de todas mis formaciones."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
