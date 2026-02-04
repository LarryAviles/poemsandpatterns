import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import patternDress from "@/assets/pattern-dress.jpg";
import patternBlouse from "@/assets/pattern-blouse.jpg";
import patternPants from "@/assets/pattern-pants.jpg";

const patterns = [
  {
    id: 1,
    name: "Patrón Vestido Wrap",
    price: 189.00,
    currency: "MXN",
    image: patternDress,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Vestidos",
  },
  {
    id: 2,
    name: "Patrón Blusa Romántica",
    price: 149.00,
    currency: "MXN",
    image: patternBlouse,
    sizes: ["XS", "S", "M", "L"],
    category: "Blusas",
  },
  {
    id: 3,
    name: "Patrón Pantalón Wide Leg",
    price: 169.00,
    currency: "MXN",
    image: patternPants,
    sizes: ["S", "M", "L", "XL"],
    category: "Pantalones",
  },
  {
    id: 4,
    name: "Patrón Falda Midi",
    price: 139.00,
    currency: "MXN",
    image: patternDress,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Faldas",
  },
  {
    id: 5,
    name: "Patrón Top Corset",
    price: 159.00,
    currency: "MXN",
    image: patternBlouse,
    sizes: ["XS", "S", "M", "L"],
    category: "Tops",
  },
  {
    id: 6,
    name: "Patrón Blazer Oversize",
    price: 199.00,
    currency: "MXN",
    image: patternPants,
    sizes: ["S", "M", "L", "XL"],
    category: "Chaquetas",
  },
];

const categories = ["Todos", "Vestidos", "Blusas", "Pantalones", "Faldas", "Tops", "Chaquetas"];

const PatternShop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium">
                Tienda de Moldes
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4 text-foreground">
                Patrones <span className="italic">Profesionales</span>
              </h1>
              <p className="font-sans text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
                Descarga moldes PDF de alta calidad con instrucciones detalladas. 
                Listos para imprimir en casa en formato A3 y Oficio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-sans transition-all duration-300 rounded-sm ${
                    category === "Todos"
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent text-muted-foreground hover:text-primary hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {patterns.map((pattern, index) => (
                <motion.div
                  key={pattern.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/molde/${pattern.id}`} className="group block">
                    <div className="relative overflow-hidden rounded-sm mb-4">
                      <div className="aspect-[3/4] overflow-hidden bg-secondary/50">
                        <img
                          src={pattern.image}
                          alt={pattern.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      {/* Quick view overlay */}
                      <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-background text-xs uppercase tracking-[0.2em] font-sans px-6 py-3 border border-background/80 hover:bg-background hover:text-foreground transition-colors">
                          Ver Detalles
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans">
                        {pattern.category}
                      </span>
                      <h3 className="font-serif text-lg mt-1 text-foreground group-hover:text-primary transition-colors">
                        {pattern.name}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground mt-2">
                        Tallas: {pattern.sizes.join(", ")}
                      </p>
                      <p className="font-sans font-medium text-foreground mt-2">
                        ${pattern.price.toFixed(2)} {pattern.currency}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PatternShop;
