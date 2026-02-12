import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Heart, Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/Doacao", label: "Doação" },
    { to: "/Voluntariado", label: "Voluntariado" },
    { to: "/Mentoria", label: "Mentoria" },
    { to: "/EventosEP", label: "Eventos" },
  ];

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex items-center px-4 py-4">
        {/* Left: Logo */}
        <div className="flex flex-1 items-center justify-start">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold transition-opacity hover:opacity-90">
            <img
              src="/src/assets/logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
            <span>Projeto Connect</span>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-lg font-bold text-primary-foreground/90 transition-colors hover:text-primary-foreground"
              activeClassName="text-primary-foreground underline underline-offset-8">
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Avatar + Mobile toggle */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <Link to="/Usuario">
            <Avatar className="h-14 w-14 border-2 border-primary-foreground/30 transition-all hover:border-primary-foreground/50">
              <AvatarImage src="/src/assets/1764689576149.png" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            {mobileOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-primary-foreground/20 px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="block py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              activeClassName="text-primary-foreground font-bold"
              onClick={() => setMobileOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
