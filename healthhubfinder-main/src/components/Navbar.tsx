
import { useState } from "react";
import { Link } from "react-router-dom";
import { Hospital, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Hospital className="h-6 w-6 text-healthBlue" />
          <span className="font-bold text-xl text-slate-800">HealthHubFinder</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-slate-600 hover:text-healthBlue font-medium">
            Home
          </Link>
          <Link to="/hospitals" className="text-slate-600 hover:text-healthBlue font-medium">
            Find Hospitals
          </Link>
          <Link to="/blood-banks" className="text-slate-600 hover:text-healthBlue font-medium">
            Blood Banks
          </Link>
          <Link to="/health-tips" className="text-slate-600 hover:text-healthBlue font-medium">
            Health Tips
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="flex items-center">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button className="bg-healthRed hover:bg-red-600 text-white">
            Emergency
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <Link 
                to="/" 
                className="text-slate-600 hover:text-healthBlue font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/hospitals" 
                className="text-slate-600 hover:text-healthBlue font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Hospitals
              </Link>
              <Link 
                to="/blood-banks" 
                className="text-slate-600 hover:text-healthBlue font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Blood Banks
              </Link>
              <Link 
                to="/health-tips" 
                className="text-slate-600 hover:text-healthBlue font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Health Tips
              </Link>
              <Button 
                className="bg-healthRed hover:bg-red-600 text-white mt-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Emergency
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
