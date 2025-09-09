import React, { useState } from 'react';
import { Check, Users, Heart, MessageCircle, Shield, Calendar, Star, Stethoscope, Activity, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MembershipToggle } from './MembershipToggle';
import { PlanCard } from './PlanCard';
import { BenefitsList } from './BenefitsList';
import { UpsellModal } from './UpsellModal';
import medicalConsultation from '@/assets/medical-consultation.jpg';

export const FunnelHero = () => {
  const [showMembership, setShowMembership] = useState(false);
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  const initialConsultationBenefits = [
    {
      icon: Heart,
      text: "Evaluación completa de síntomas de menopausia"
    },
    {
      icon: Users,
      text: "30 minutos con especialista certificada"
    },
    {
      icon: Shield,
      text: "Plan personalizado basado en tu perfil"
    },
    {
      icon: Calendar,
      text: "Sin compromiso, solo una consulta"
    }
  ];

  const membershipBenefits = [
    {
      icon: Gift,
      text: "Caja de bienvenida exclusiva: $40.000 en productos premium"
    },
    {
      icon: Heart,
      text: "Consulta de seguimiento: $50.000 de valor incluido"
    },
    {
      icon: Star,
      text: "Ahorro estimado: $75.000 al año en remedios y suplementos"
    },
    {
      icon: MessageCircle,
      text: "Chat directo con asistente personalizado clínico"
    },
    {
      icon: Shield,
      text: "Atención por equipo clínico especializado"
    },
    {
      icon: Users,
      text: "Acceso a comunidad privada de mujeres"
    },
    {
      icon: Calendar,
      text: "Sesiones educativas mensuales"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-background via-primary-lighter/20 to-secondary-light/30 py-16 md:py-24 relative overflow-hidden">
      {/* Medical Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10">
          <Stethoscope className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute top-40 right-20">
          <Activity className="w-20 h-20 text-primary" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Heart className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute bottom-40 right-10">
          <Shield className="w-18 h-18 text-primary" />
        </div>
      </div>

      <div className="container-neopausia relative z-10">
        
        {/* Header Section with Medical Visual */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-8">
            <div className="lg:w-1/2">
              <h1 className="text-medical-heading mb-6">
                Tu <span className="text-primary font-bold">viaje hacia el bienestar</span> comienza aquí
              </h1>
              <p className="text-medical-subheading max-w-xl mx-auto lg:mx-0 mb-8">
                La menopausia es una transición natural que merece acompañamiento profesional. 
                Comienza con una consulta personalizada y descubre cómo podemos ayudarte en cada paso.
              </p>
              
              {/* Medical Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-success" />
                  <span>Médicas certificadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-success" />
                  <span>Enfoque integral</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-success" />
                  <span>Acompañamiento continuo</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src={medicalConsultation} 
                  alt="Consulta médica especializada en menopausia" 
                  className="rounded-2xl shadow-medical w-full max-w-md mx-auto"
                />
                <div className="absolute -top-4 -right-4 bg-success text-white p-3 rounded-full">
                  <Check className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unified Consultation + Membership Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative animate-slide-up">
            
            {/* Toggle positioned elegantly above the card */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-background px-6 py-3 rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground">Solo consulta</span>
                  <MembershipToggle 
                    enabled={showMembership}
                    onChange={setShowMembership}
                  />
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-muted-foreground">+ Membresía</span>
                    {!showMembership && (
                      <span className="text-xs text-accent-warm font-semibold">Más de $500.000 en valor al año</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Unified Card */}
            <div className={`${showMembership ? 'card-medical-featured' : 'card-medical'} transition-all duration-300 pt-8`}>
              
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {showMembership ? 'Consulta + Membresía Premium' : 'Consulta Inicial'}
                </h3>
                <p className="text-muted-foreground">
                  {showMembership 
                    ? 'Tu primer paso hacia el bienestar integral' 
                    : 'Evaluación médica especializada'
                  }
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">
                    {showMembership ? '$75.980' : '$49.990'}
                  </span>
                  {showMembership && (
                    <span className="text-lg text-muted-foreground line-through">$75.980</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {showMembership ? 'Primer mes (consulta + membresía)' : 'Pago único'}
                </p>
                {showMembership && (
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-sm text-primary font-medium">
                      Luego $25.990/mes • Mínimo 3 meses
                    </p>
                    <p className="text-xs text-accent-warm font-semibold">
                      ¡Más de $500.000 en valor estimado al año!
                    </p>
                  </div>
                )}
              </div>

              {/* CTA Button - Inside the card */}
              <div className="mb-8">
                {!showMembership ? (
                  <button 
                    onClick={() => setShowUpsellModal(true)}
                    className="btn-neopausia-primary w-full"
                  >
                    <div className="flex flex-col items-center md:flex-row md:justify-between">
                      <span className="font-semibold">Agendar Consulta</span>
                      <span className="text-lg font-bold">$49.990</span>
                    </div>
                  </button>
                ) : (
                  <Link to="/checkout?package=premium" className="btn-neopausia-warm w-full inline-block">
                    <div className="flex flex-col items-center md:flex-row md:justify-between">
                      <span className="font-semibold">Consulta + Membresía</span>
                      <span className="text-lg font-bold">$75.980</span>
                    </div>
                  </Link>
                )}
                <p className="text-xs text-muted-foreground text-center mt-2">
                  {showMembership 
                    ? "Mínimo 3 meses - Incluye consulta médica + nutrición personalizada" 
                    : "Sin compromiso a largo plazo"
                  }
                </p>
              </div>

              {/* Description and Benefits */}
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Left Side - Always show consultation benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Tu consulta inicial incluye:
                  </h4>
                  <BenefitsList benefits={initialConsultationBenefits} />
                </div>

                {/* Right Side - Show membership benefits when toggled */}
                <div className={`${showMembership ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`}>
                  {showMembership ? (
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        + Beneficios de la membresía:
                      </h4>
                      <div className="bg-accent-warm-light/10 rounded-lg p-4 mb-6">
                        <p className="text-sm text-foreground leading-relaxed">
                          <strong>Tu mejor inversión en salud:</strong> $25.990/mes → más de $500.000 en valor estimado al año. 
                          4 controles con nutricionista + 2 consultas de seguimiento y descuentos mensuales reales.
                        </p>
                      </div>
                      <BenefitsList benefits={membershipBenefits.slice(0, 4)} />
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mb-4">
                        <Gift className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      </div>
                      <h4 className="text-lg font-semibold text-muted-foreground mb-2 hidden md:block">
                        ¿Buscas apoyo continuo para no transitar sola esta etapa?
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 hidden md:block">
                        Con tu Membresía recibes:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-2 max-w-xs mx-auto hidden md:block">
                        <li>• <strong>Consultas de seguimiento</strong> (médica y nutricional incluidas)</li>
                        <li>• <strong>Espacio ilimitado</strong> para hacer todas tus preguntas</li>
                        <li>• <strong>Descuentos reales</strong> en remedios y suplementos</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Trust reinforcement when membership is active */}
              {showMembership && (
                <div className="mt-8 bg-gradient-to-r from-success/5 to-primary/5 rounded-xl p-6 border border-success/20">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Check className="w-5 h-5 text-success" />
                      <span className="text-sm font-semibold text-success">Decisión inteligente</span>
                    </div>
                    <p className="text-foreground font-medium mb-4">
                      "En solo 3 meses de membresía vi cambios notorios en mi bienestar. Los síntomas se redujeron significativamente y me siento más energética. El acompañamiento continuo realmente funciona."
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-success text-success" />
                        ))}
                      </div>
                      <span>María José, 52 años</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>


        {/* Coming Soon - Platinum */}
        <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="w-full lg:w-1/2">
            <PlanCard
              title="Membresía Platinum"
              subtitle="Próximamente"
              price="Muy pronto"
              priceSubtext="El siguiente nivel"
              description="Experiencia premium con beneficios exclusivos"
              benefits={[]}
              ctaText="Próximamente"
              featured={false}
              comingSoon={true}
            />
          </div>
        </div>

        {/* Trust Indicators - Moved to bottom */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-accent-warm-light/10 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              ¿Por qué elegir Neopausia?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Médicas Certificadas</h4>
                <p className="text-sm text-muted-foreground">
                  Médicas expertas en menopausia con certificación internacional
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Enfoque Integral</h4>
                <p className="text-sm text-muted-foreground">
                  Tratamos síntomas físicos, emocionales y nutricionales
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Comunidad de Apoyo</h4>
                <p className="text-sm text-muted-foreground">
                  Conecta con mujeres que viven la misma experiencia
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Upsell Modal */}
        <UpsellModal
          isOpen={showUpsellModal}
          onClose={() => setShowUpsellModal(false)}
          onAddMembership={() => {
            setShowMembership(true);
            setShowUpsellModal(false);
          }}
          onContinueConsultationOnly={() => {
            setShowUpsellModal(false);
            window.location.href = '/checkout?package=consultation';
          }}
        />

      </div>
    </div>
  );
};