import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Apple, ShoppingBag } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
            
            <div className="flex items-center space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full transition-colors duration-200">
                    Tumblr
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] h-[90vh]">
                  <iframe 
                    src="https://www.tumblr.com/obeseteen-boy" 
                    className="w-full h-full border-0" 
                    title="Tumblr"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </DialogContent>
              </Dialog>
              
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
