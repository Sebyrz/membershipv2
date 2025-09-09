import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, ShoppingCart, Search } from 'lucide-react';

export const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Cursos', path: '/cursos' },
    { name: 'Atención', path: '/atencion' },
    { name: 'Terapia', path: '/terapia' },
    { name: 'Contenido educativo', path: '/contenido' },
    { name: 'Blog', path: '/blog' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Membresía', path: '/membresia' }
  ];

  return (
    <header className="bg-background border-b border-border/40 sticky top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        Activa hoy: Tu salud importa. 40% OFF en tu primera consulta con Neopausia.
      </div>
      
      <div className="container-neopausia">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            neopausia
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary font-semibold' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
              <span className="sr-only">Cuenta</span>
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="sr-only">Carrito</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};