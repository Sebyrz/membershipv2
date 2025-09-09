import React from 'react';

interface MembershipToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export const MembershipToggle: React.FC<MembershipToggleProps> = ({ enabled, onChange }) => {
  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm font-medium transition-colors ${enabled ? 'text-primary' : 'text-muted-foreground'}`}>
        {enabled ? 'Activada' : 'Añadir'}
      </span>
      <button
        onClick={() => onChange(!enabled)}
        className="toggle-medical"
        data-checked={enabled}
        aria-label={enabled ? 'Desactivar membresía' : 'Activar membresía'}
      >
        <span className="toggle-medical-thumb" />
      </button>
    </div>
  );
};