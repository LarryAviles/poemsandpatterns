import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl font-medium mb-4">
              Poems <span className="font-light italic">&</span> Patterns
            </h2>
            <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed max-w-md">
              Educación y contenido de moda para crear tus propios diseños. 
              Aprende patronaje, confección y diseño con cursos profesionales 
              y moldes listos para usar.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] mb-6 text-primary-foreground/50">
              Navegación
            </h3>
            <ul className="space-y-3">
              {["Inicio", "Moldes", "Cursos", "Nosotros"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-sans"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] mb-6 text-primary-foreground/50">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm font-sans text-primary-foreground/80">
              <li>hola@poemsandpatterns.com</li>
              <li>Ciudad de México, MX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs font-sans">
            © 2026 Poems & Patterns. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs font-sans text-primary-foreground/50">
            <Link to="/privacidad" className="hover:text-primary-foreground transition-colors">
              Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-primary-foreground transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
