import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import patternDress from "@/assets/pattern-dress.jpg";
import patternPants from "@/assets/pattern-pants.jpg";
import patternBlouse from "@/assets/pattern-blouse.jpg";

const LatestProducts = () => {
  const products = [
    {
      id: 1,
      name: "Vestido Clásico",
      category: "Vestidos",
      price: "$299 MXN",
      image: patternDress,
    },
    {
      id: 2,
      name: "Pantalón Palazzo",
      category: "Pantalones",
      price: "$249 MXN",
      image: patternPants,
    },
    {
      id: 3,
      name: "Blusa Romántica",
      category: "Blusas",
      price: "$199 MXN",
      image: patternBlouse,
    },
  ];

  return (
    <section className="py-24 md:py-32 gradient-soft">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-medium">
              Nuevos Lanzamientos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 text-foreground">
              Últimos <span className="italic">Moldes</span>
            </h2>
          </div>
          <Link to="/moldes" className="mt-6 md:mt-0">
            <Button variant="outline" className="group">
              Ver Todos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/moldes/${product.id}`} className="group block">
                <div className="card-editorial">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-xl font-medium mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-sans text-sm font-medium text-primary">
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
