import React from 'react';
import { LucideIcon } from 'lucide-react';
import { BenefitsList } from './BenefitsList';

interface Benefit {
  icon: LucideIcon;
  text: string;
}

interface PlanCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceSubtext: string;
  description: string;
  benefits: Benefit[];
  ctaText: string;
  featured: boolean;
  comingSoon: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  price,
  priceSubtext,
  description,
  benefits,
  ctaText,
  featured,
  comingSoon
}) => {
  return (
    <div className={`${featured ? 'card-medical-featured' : 'card-medical'} ${comingSoon ? 'opacity-60' : ''}`}>
      
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          {comingSoon && (
            <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
              {subtitle}
            </span>
          )}
        </div>
        {!comingSoon && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      {/* Pricing */}
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-2 mb-2">
          <span className={`text-3xl font-bold ${comingSoon ? 'text-muted-foreground' : 'text-primary'}`}>
            {price}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{priceSubtext}</p>
      </div>

      {/* Description */}
      <div className="text-center mb-8">
        <p className="text-base text-foreground">{description}</p>
      </div>

      {/* Benefits */}
      {benefits.length > 0 && (
        <div className="mb-8">
          <BenefitsList benefits={benefits} />
        </div>
      )}

      {/* CTA Button - Only show for coming soon cards */}
      {comingSoon && (
        <div className="text-center">
          <button 
            className="w-full btn-neopausia-secondary cursor-not-allowed"
            disabled={true}
          >
            {ctaText}
          </button>
        </div>
      )}

    </div>
  );
};