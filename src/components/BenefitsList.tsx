import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  text: string;
  comingSoon?: boolean;
}

interface BenefitsListProps {
  benefits: Benefit[];
}

export const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  return (
    <div className="benefit-list">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-item">
          <benefit.icon className="benefit-icon" />
          <span className={benefit.comingSoon ? 'opacity-60' : ''}>{benefit.text}</span>
          {benefit.comingSoon && (
            <span className="text-xs text-accent-warm font-medium ml-2">(Próximamente)</span>
          )}
        </div>
      ))}
    </div>
  );
};