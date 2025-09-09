import React from 'react';
import { X, Gift, Heart, Star } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMembership: () => void;
  onContinueConsultationOnly: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({
  isOpen,
  onClose,
  onAddMembership,
  onContinueConsultationOnly
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-2xl max-w-md w-full p-6 relative animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-accent-warm/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-accent-warm" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            ¿Te gustaría apoyo continuo?
          </h3>
          <p className="text-sm text-muted-foreground">
            Por solo <strong className="text-accent-warm">$25.990/mes</strong> agrega tu Membresía y 
            <strong className="text-primary"> más de $500.000 en valor al año</strong>
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-success flex-shrink-0" />
            <span className="text-sm text-foreground">Consulta de seguimiento médica y nutricional</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-success flex-shrink-0" />
            <span className="text-sm text-foreground">Descuentos reales en remedios y suplementos</span>
          </div>
          <div className="flex items-center gap-3">
            <Gift className="w-5 h-5 text-success flex-shrink-0" />
            <span className="text-sm text-foreground">Caja de bienvenida exclusiva ($40.000 valor)</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <button
            onClick={onAddMembership}
            className="btn-neopausia-warm w-full"
          >
            Agregar Membresía
          </button>
          <a
            href="https://neopausia.com/products/atencion-medica-menopausia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neopausia-secondary w-full inline-block text-center"
          >
            Continuar solo con consulta
          </a>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Membresía mínima 3 meses • Cancela cuando quieras
        </p>
      </div>
    </div>
  );
};