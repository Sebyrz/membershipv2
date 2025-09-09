import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Heart, Users, Calendar, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-br from-background via-primary-lighter/10 to-secondary-light/20">
        <div className="container-neopausia text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Tu bienestar en la <span className="text-primary">menopausia</span> importa
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Acompañamiento profesional con médicas especialistas para vivir 
            esta etapa con confianza y bienestar integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membresia" className="btn-neopausia-primary inline-flex items-center gap-2">
              Explorar Membresía
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/membresia-solo" className="btn-neopausia-secondary">
              Ya tuve mi consulta
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gradient-to-b from-secondary-light/20 to-background">
        <div className="container-neopausia">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Acompañamiento profesional en cada etapa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestras médicas especialistas en menopausia están aquí para guiarte con un enfoque integral, 
              respaldado por evidencia científica y mucha empatía.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Atención Personalizada
              </h3>
              <p className="text-muted-foreground">
                Consultas individuales con médicas especialistas en menopausia
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Comunidad de Apoyo
              </h3>
              <p className="text-muted-foreground">
                Conecta con otras mujeres que viven la misma experiencia
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Seguimiento Continuo
              </h3>
              <p className="text-muted-foreground">
                Acompañamiento a largo plazo adaptado a tus necesidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
