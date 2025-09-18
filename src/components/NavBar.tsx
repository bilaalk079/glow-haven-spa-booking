import { useState, useEffect } from "react";
import { Sun, Moon, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/40 text-white">
      {/* Brand */}
      <div className="text-2xl font-sf-display font-bold tracking-tight">
        Glow Haven
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Social Icons */}
        <a href="#" className="hover:text-primary transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          <Twitter className="w-5 h-5" />
        </a>

        {/* Dark/Light Mode Toggle */}
        <Button
          onClick={toggleDarkMode}
          variant="ghost"
          className="w-10 h-10 p-0 flex items-center justify-center rounded-full hover:bg-white/10"
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-200" />}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
