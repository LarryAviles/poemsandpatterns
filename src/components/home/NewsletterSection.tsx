import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70 font-sans font-medium">
            Newsletter
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6">
            Inspírate <span className="italic">cada semana</span>
          </h2>
          <p className="font-sans text-primary-foreground/80 leading-relaxed mb-10">
            Suscríbete para recibir consejos de moda, tutoriales exclusivos 
            y ofertas especiales directamente en tu correo.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-primary-foreground"
            >
              <CheckCircle className="h-6 w-6" />
              <span className="font-sans">¡Gracias por suscribirte!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground"
                required
              />
              <Button
                type="submit"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shrink-0"
              >
                Suscribir
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
