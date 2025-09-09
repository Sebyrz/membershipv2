import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Check, Heart, Users, MessageCircle, Shield, Calendar, Star, ArrowLeft, Edit } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { MembershipToggle } from '@/components/MembershipToggle';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const packageType = searchParams.get('package') || 'consultation';
  const [hasMembership, setHasMembership] = useState(packageType === 'premium');

  const consultationItem = {
    title: "Consulta Inicial",
    price: "$49.990",
    description: "Pago único • 30 minutos con especialista en menopausia",
    included: true
  };

  const membershipItem = {
    title: "Membresía Premium",
    price: "$25.990/mes",
    description: "Pago mensual • Soporte continuo y beneficios exclusivos",
    included: hasMembership
  };

  const packageItems = hasMembership ? [consultationItem, membershipItem] : [consultationItem];

  const consultationBenefits = [
    {
      icon: Heart,
      text: "Evaluación completa de síntomas de menopausia"
    },
    {
      icon: Shield,
      text: "Plan personalizado basado en tu perfil"
    },
    {
      icon: Calendar,
      text: "30 minutos con especialista certificada"
    }
  ];

  const membershipBenefits = [
    {
      icon: Heart,
      text: "Consulta de seguimiento con nutricionista y médica"
    },
    {
      icon: Star,
      text: "Caja de bienvenida: $40.000 en productos premium"
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

  const benefits = hasMembership ? membershipBenefits : consultationBenefits;
  const total = hasMembership ? "$74.980" : "$49.990";
  const packageTitle = hasMembership ? "Consulta + Membresía Premium" : "Consulta Inicial";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="py-12 bg-gradient-to-br from-background via-primary-lighter/10 to-secondary-light/20">
        <div className="container-neopausia">
          
          {/* Back link */}
          <div className="mb-8 flex items-center justify-between">
            <Link 
              to="/membresia" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Membresía
            </Link>
            <Link 
              to="/membresia" 
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
            >
              <Edit className="w-4 h-4" />
              Modificar paquete
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Left Column - Order Summary */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Resumen de tu compra
                </h1>
                <p className="text-muted-foreground">
                  Estás a un paso de comenzar tu viaje hacia el bienestar integral
                </p>
              </div>

              {/* Package Summary */}
              <div className="card-medical">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    Paquete: {packageTitle}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Incluir Membresía</span>
                    <MembershipToggle 
                      enabled={hasMembership} 
                      onChange={setHasMembership} 
                    />
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  {packageItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-accent-warm-light/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">
                      {hasMembership ? 'Total inicial:' : 'Total:'}
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{total}</span>
                    </div>
                  </div>
                  {hasMembership && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Luego $25.990/mes por la membresía premium • Mínimo 3 meses
                    </p>
                  )}
                </div>
              </div>

              {/* What you'll receive */}
              <div className="card-medical">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Lo que recibirás:
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <benefit.icon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form (Mockup) */}
            <div className="space-y-8">
              <div className="card-medical-featured">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Información de pago
                </h3>

                {/* Personal Info */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-medium text-foreground">Información personal</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Apellido
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-medium text-foreground">Método de pago</h4>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <input type="radio" name="payment" id="card" defaultChecked />
                      <label htmlFor="card" className="font-medium">Tarjeta de crédito/débito</label>
                    </div>
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        className="w-full p-3 border border-border rounded-lg"
                        placeholder="1234 1234 1234 1234"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input 
                          type="text" 
                          className="w-full p-3 border border-border rounded-lg"
                          placeholder="MM/AA"
                        />
                        <input 
                          type="text" 
                          className="w-full p-3 border border-border rounded-lg"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 mb-6">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    Acepto los <span className="text-primary underline">términos y condiciones</span> y 
                    la <span className="text-primary underline">política de privacidad</span>
                  </label>
                </div>

                {/* Payment Button */}
                <button className="btn-neopausia-warm w-full text-lg py-4">
                  Confirmar Pago - {total}
                </button>

                {/* Security note */}
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>Pago 100% seguro y protegido</span>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  ✓ Médicas especialistas • ✓ Soporte 24/7 • ✓ Garantía de satisfacción
                </p>
                <p className="text-xs text-muted-foreground">
                  Puedes cancelar tu membresía en cualquier momento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;