
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Find Healthcare Services Near You
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Locate hospitals, check blood availability, and access emergency services all in one place
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search for hospitals, specialities..." 
                className="pl-10 w-full" 
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Your location" 
                className="pl-10 w-full" 
              />
            </div>
            <Button className="bg-healthBlue hover:bg-blue-600 md:px-6">
              Search
            </Button>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button 
              className="bg-healthRed hover:bg-red-600 text-white px-6 py-6 rounded-full emergency-pulse flex items-center justify-center font-bold"
            >
              Emergency Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
