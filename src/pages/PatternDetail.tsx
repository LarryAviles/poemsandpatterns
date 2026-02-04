import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Check, AlertCircle, Sparkles, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import patternDress from "@/assets/pattern-dress.jpg";
import patternBlouse from "@/assets/pattern-blouse.jpg";
import patternPants from "@/assets/pattern-pants.jpg";

const patterns = [
  {
    id: 1,
    name: "Patrón Vestido Wrap",
    price: 189.00,
    currency: "MXN",
    images: [patternDress, patternBlouse, patternPants],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Vestidos",
    description: "Patrón de Vestido Wrap – PDF A3 & oficio (Tallas XS, S, M, L, XL)",
    tagline: "Diseña y cose tu propio vestido wrap con este patrón profesional en PDF. Ideal para quienes aman la costura y quieren crear piezas elegantes y versátiles.",
  },
  {
    id: 2,
    name: "Patrón Blusa Romántica",
    price: 149.00,
    currency: "MXN",
    images: [patternBlouse, patternDress, patternPants],
    sizes: ["XS", "S", "M", "L"],
    category: "Blusas",
    description: "Patrón de Blusa Romántica – PDF A3 & oficio (Tallas XS, S, M, L)",
    tagline: "Crea una blusa romántica con mangas abullonadas y detalles delicados. Perfecta para ocasiones especiales o el día a día.",
  },
  {
    id: 3,
    name: "Patrón Pantalón Wide Leg",
    price: 169.00,
    currency: "MXN",
    images: [patternPants, patternDress, patternBlouse],
    sizes: ["S", "M", "L", "XL"],
    category: "Pantalones",
    description: "Patrón de Pantalón Wide Leg – PDF A3 & oficio (Tallas S, M, L, XL)",
    tagline: "Confecciona un pantalón de pierna ancha con corte impecable. Elegante, cómodo y perfecto para cualquier temporada.",
  },
];

const relatedPatterns = [
  { id: 4, name: "Patrón Falda Midi", price: 139.00, image: patternDress },
  { id: 5, name: "Patrón Top Corset", price: 159.00, image: patternBlouse },
  { id: 6, name: "Patrón Blazer Oversize", price: 199.00, image: patternPants },
];

const PatternDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState("1");

  const pattern = patterns.find((p) => p.id === Number(id)) || patterns[0];

  const includes = [
    { text: "Patrón digital en formato PDF A3 y Oficio", highlight: "PDF A3 y Oficio", suffix: "(listo para imprimir)." },
    { text: "Guía de tallas detallada", highlight: "Guía de tallas detallada", suffix: "para elegir la medida correcta." },
    { text: "Tallas disponibles:", highlight: `Tallas disponibles: ${pattern.sizes.join(", ")}`, suffix: "" },
  ];

  const benefits = [
    "Perfecto para proyectos de costura creativa.",
    "Ideal para personalizar tus propias prendas o iniciar tu emprendimiento.",
    "Puedes imprimirlo fácilmente en casa en hojas tamaño A3 y Oficio.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <div className="container mx-auto px-6 py-12 md:py-20">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li>/</li>
              <li><Link to="/moldes" className="hover:text-primary transition-colors">Moldes</Link></li>
              <li>/</li>
              <li className="text-foreground">{pattern.name}</li>
            </ol>
          </nav>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-4"
            >
              {/* Thumbnails */}
              <div className="flex flex-col gap-3">
                {pattern.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-20 md:w-20 md:h-24 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Vista ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 aspect-[3/4] rounded-sm overflow-hidden bg-secondary/30">
                <img
                  src={pattern.images[selectedImage]}
                  alt={pattern.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground uppercase tracking-wide">
                {pattern.name.replace("Patrón ", "")}
              </h1>
              
              <p className="font-sans text-xl md:text-2xl text-foreground mt-4">
                ${pattern.price.toFixed(2)} {pattern.currency}
              </p>

              <p className="font-sans text-muted-foreground mt-6 leading-relaxed">
                {pattern.description}
              </p>

              <p className="font-sans text-muted-foreground mt-4 leading-relaxed">
                <Sparkles className="inline h-4 w-4 text-primary mr-2" />
                {pattern.tagline}
              </p>

              {/* What's Included */}
              <div className="mt-8">
                <h3 className="font-sans text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="text-primary">◆</span>
                  ¿QUÉ INCLUYE?
                </h3>
                <ul className="mt-4 space-y-3">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        <strong className="text-foreground">{item.highlight}</strong> {item.suffix}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important Note */}
              <div className="mt-8">
                <h3 className="font-sans text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="text-primary">◆</span>
                  IMPORTANTE
                </h3>
                <div className="mt-4 flex items-start gap-3 font-sans text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <p>
                    <strong className="text-foreground">Este patrón no incluye paso a paso ni instrucciones de confección.</strong>
                    <br />
                    Si deseas aprender a coserlo correctamente, puedes{" "}
                    <Link to="/cursos" className="text-primary underline underline-offset-2 hover:text-primary/80">
                      unirte a mi curso de confección
                    </Link>
                    {" "}
                    <MessageCircle className="inline h-4 w-4" />
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8">
                <h3 className="font-sans text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="text-primary">◆</span>
                  ¿POR QUÉ TE ENCANTARÁ?
                </h3>
                <ul className="mt-4 space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="font-sans text-sm text-muted-foreground">
                      ✓ {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Print Instructions */}
              <div className="mt-8 p-4 bg-secondary/50 rounded-sm">
                <p className="font-sans text-sm text-foreground font-medium">
                  Pasos para Imprimir Patrones:
                </p>
                <p className="font-sans text-sm text-muted-foreground mt-2">
                  <strong className="text-foreground">Asegúrate de que el archivo esté diseñado para el archivo:</strong>{" "}
                  Al descargar el patrón, verifica que esté diseñado para ser impreso en el tamaño correspondiente.
                </p>
                <p className="font-sans text-sm text-muted-foreground mt-2">
                  Seleccionar la opción: imprimir en <strong className="text-foreground">TAMAÑO REAL</strong>
                </p>
              </div>

              {/* Add to Cart */}
              <div className="mt-8 flex items-center gap-4">
                <Select value={quantity} onValueChange={setQuantity}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button variant="editorial" size="lg" className="flex-1">
                  Añadir al Carrito
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          <section className="mt-24 md:mt-32">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground uppercase tracking-wide mb-10">
              También Te Puede Gustar
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPatterns.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/molde/${item.id}`} className="group block">
                    <div className="aspect-[3/4] rounded-sm overflow-hidden bg-secondary/30 mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground mt-1">
                        ${item.price.toFixed(2)} MXN
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PatternDetail;
