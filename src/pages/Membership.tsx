import React from 'react';
import { FunnelHero } from '@/components/FunnelHero';
import { Header } from '@/components/Header';
import { Check, Heart, Users, MessageCircle, Shield, Calendar, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  const additionalBenefits = [
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Cada mujer es única. Tu plan se adapta a tus síntomas y necesidades específicas."
    },
    {
      icon: Users,
      title: "Comunidad de Apoyo",
      description: "Conecta con mujeres que entienden lo que estás viviendo y comparten sus experiencias."
    },
    {
      icon: Shield,
      title: "Seguimiento Continuo",
      description: "No te dejamos sola. Acompañamos tu proceso con consultas regulares y ajustes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FunnelHero />
      
      {/* Additional membership info section */}
      <div className="py-16 bg-gradient-to-b from-secondary-light/20 to-background">
        <div className="container-neopausia">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tu bienestar, nuestra prioridad
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestro enfoque integral combina expertise médico, apoyo nutricional y 
              acompañamiento emocional para guiarte en esta etapa de tu vida.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-accent-warm-light/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">
                ¿Lista para comenzar tu camino hacia el bienestar?
              </h3>
              <p className="text-muted-foreground mb-6">
                Únete a cientos de mujeres que ya están viviendo una menopausia más tranquila y saludable.
              </p>
              <div className="flex flex-col items-center gap-4">
                <a 
                  href="https://neopausia.com/products/atencion-medica-menopausia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neopausia-primary flex items-center justify-center gap-2"
                >
                  Agendar mi Consulta
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link 
                  to="/membresia-solo" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
                >
                  Ya tuve mi consulta
                </Link>
              </div>
              
              {/* Clarificación para usuarias con consulta previa */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>¿Ya tuviste tu consulta?</strong> Accede directamente a tu membresía 
                  con beneficios exclusivos y seguimiento personalizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;