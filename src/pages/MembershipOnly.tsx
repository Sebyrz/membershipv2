import React from 'react';
import { Header } from '@/components/Header';
import { Check, Heart, Users, MessageCircle, Shield, Calendar, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MembershipOnly = () => {
  const membershipBenefits = [
    {
      icon: Heart,
      text: "Consultas de seguimiento con tu médica y nutricionista",
      value: "$50.000"
    },
    {
      icon: MessageCircle,
      text: "Pregúntale lo que quieras a tu equipo médico",
      value: "Ilimitado"
    },
    {
      icon: Star,
      text: "Caja de bienvenida con productos que necesitas",
      value: "$40.000"
    },
    {
      icon: Shield,
      text: "Acompañamiento continuo de médicas especialistas",
      value: "24/7"
    },
    {
      icon: Users,
      text: "Comunidad de mujeres que te entienden",
      value: "Próximamente"
    },
    {
      icon: Calendar,
      text: "Charlas mensuales para aprender y compartir",
      value: "Próximamente"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-lighter/5 to-secondary-light/10">
      <Header />
      
      <div className="py-16">
        <div className="container-neopausia">
          
          {/* Back link */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-12 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-accent-warm/10 text-accent-warm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Para mujeres que ya tuvieron su consulta
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Continúa tu
                <span className="block text-transparent bg-clip-text bg-gradient-medical">
                  Membresía
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                No dejes que tu bienestar se detenga. Continúa con el apoyo continuo y consultas de seguimiento, 
                con <span className="font-semibold text-accent-warm">más de $500.000 en valor estimado al año</span> considerando controles, descuentos y beneficios.
              </p>

              {/* Value Proposition Inmediata */}
              <div className="bg-accent-warm-light/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Tu inversión se recupera en el primer mes
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$29.990</div>
                    <div className="text-sm text-muted-foreground">Pagas/mes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">$50.000</div>
                    <div className="text-sm text-muted-foreground">Valor consultas</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  *Solo en consultas médicas y nutricionales ya recuperas tu inversión
                </p>
              </div>
            </div>


            {/* Main Membership Card */}
            <div className="card-medical-featured mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Membresía Premium
                  </h2>
                  <p className="text-muted-foreground">
                    Soporte especializado para que no transites sola esta etapa
                  </p>
                </div>
                <div className="text-center lg:text-right mt-4 lg:mt-0">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    $29.990
                    <span className="text-lg font-normal text-muted-foreground">/mes</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mínimo 3 meses • Cancela cuando quieras
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-4">
                {membershipBenefits.map((benefit, index) => (
                  <div key={index} className={`flex items-start gap-3 p-3 md:p-4 rounded-lg ${
                    benefit.value === "Próximamente" 
                      ? "bg-muted/30 border border-dashed border-muted-foreground/30" 
                      : "bg-accent-warm-light/5"
                  }`}>
                    <benefit.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      benefit.value === "Próximamente" 
                        ? "text-muted-foreground" 
                        : "text-accent-warm"
                    }`} />
                    <div className="flex-1">
                      <span className={`text-sm font-medium block ${
                        benefit.value === "Próximamente" 
                          ? "text-muted-foreground" 
                          : "text-foreground"
                      }`}>{benefit.text}</span>
                      <span className={`text-xs font-medium ${
                        benefit.value === "Próximamente" 
                          ? "text-muted-foreground" 
                          : "text-accent-warm"
                      }`}>{benefit.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Value Proposition */}
              <div className="bg-gradient-medical text-white p-4 md:p-6 rounded-lg mb-6">
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Tu inversión vs el valor que recibes
                  </h3>
                  <div className="grid grid-cols-2 gap-4 md:gap-8 mt-4">
                    <div>
                      <div className="text-xl md:text-2xl font-bold">$89.970</div>
                      <div className="text-sm opacity-90">Pagas en 3 meses</div>
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold">+$500.000</div>
                      <div className="text-sm opacity-90">Valor estimado en beneficios al año</div>
                    </div>
                  </div>
                  <p className="text-xs opacity-80 mt-3">
                    *Incluye: 4 consultas con nutricionista al año, 2 consultas de seguimiento con médica en menopausia, descuentos desde $10.000/mes (≈$120.000/año), productos y acceso prioritario. Valor anual estimado sobre $500.000.
                  </p>
                </div>
              </div>

              {/* Nueva sección: Propuesta de valor detallada */}
              <div className="grid md:grid-cols-2 gap-4 -mt-2 md:-mt-4 mb-10">
                <div className="card-medical">
                  <h4 className="font-semibold text-foreground mb-2">Consultas incluidas al año</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 4 consultas de nutrición ($50.000 c/u) → <span className="text-white bg-success/70 rounded px-1">$200.000</span></li>
                    <li>• 2 consultas de seguimiento en menopausia ($50.000 c/u) → <span className="text-white bg-success/70 rounded px-1">$100.000</span></li>
                  </ul>
                </div>
                <div className="card-medical">
                  <h4 className="font-semibold text-foreground mb-2">Descuentos y beneficios</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Descuentos desde $10.000/mes en remedios y suplementos → <span className="text-white bg-success/70 rounded px-1">≈$120.000/año</span></li>
                    <li>• Caja de bienvenida con productos útiles → <span className="text-white bg-success/70 rounded px-1">$40.000</span></li>
                    <li>• Acceso prioritario y chat directo con equipo clínico → <span className="text-white bg-success/70 rounded px-1">$50.000</span></li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <Link 
                to="/checkout?package=membership-only" 
                className="btn-neopausia-warm w-full inline-block"
              >
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                  <span className="font-semibold">Adquiere tu Membresía</span>
                  <span className="text-lg font-bold">$29.990/mes</span>
                </div>
              </Link>
            </div>

            {/* Social Proof Section */}
            <div className="text-center space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Testimonial específico */}
              <div className="bg-gradient-to-r from-success/5 to-primary/5 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-foreground font-medium mb-4">
                  "Después de mi consulta inicial, la membresía me permitió hacer seguimiento 
                  de mis síntomas y ajustar mi tratamiento. Vale cada peso."
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-success text-success" />
                    ))}
                  </div>
                  <span>Carmen, 48 años - Miembro desde hace 6 meses</span>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  ✓ Médicas especialistas • ✓ Soporte 24/7 • ✓ Garantía de satisfacción
                </p>
                <p className="text-xs text-muted-foreground">
                  Puedes cancelar tu membresía en cualquier momento sin penalizaciones
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
                Preguntas frecuentes
              </h3>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="card-medical">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Puedo cancelar cuando quiera?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Sí, puedes cancelar en cualquier momento después del período mínimo de 3 meses. 
                    No hay penalizaciones ni costos ocultos.
                  </p>
                </div>
                <div className="card-medical">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Qué incluyen las consultas de seguimiento?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Incluyen sesiones con tu médica especialista y nutricionista, 
                    enfocadas en tu progreso y ajustes necesarios en tu tratamiento.
                  </p>
                </div>
                <div className="card-medical">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Cuándo recibiré mi caja de bienvenida?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Tu caja será enviada dentro de los primeros 5 días hábiles después de activar tu membresía.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipOnly;