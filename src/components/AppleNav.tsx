import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Search, Apple, ShoppingBag } from "lucide-react";

const AppleNav = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        scrolled 
          ? "bg-white/80 dark:bg-black/80 shadow-sm" 
          : "bg-white/0 dark:bg-black/0"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex-shrink-0">
              <Apple className="h-5 w-5" />
            </Link>
            
            <div className="hidden md:block">
              <div className="flex space-x-8 items-center">
                {["Магазин", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "Поддержка"].map((item, index) => (
                  <Link
                    key={index}
                    to="/"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Search className="h-4 w-4" />
              </button>
              <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppleNav;
