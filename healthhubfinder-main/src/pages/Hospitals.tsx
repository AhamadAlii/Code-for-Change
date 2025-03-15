
import { useState } from "react";
import { Search, MapPin, HeartPulse, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hospitals = [
  {
    id: 1,
    name: "General Hospital",
    address: "123 Main St, Cityville",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 4.5,
    distance: "1.2 miles",
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    emergency: true
  },
  {
    id: 2,
    name: "Community Medical Center",
    address: "456 Oak Ave, Townsville",
    image: "https://images.unsplash.com/photo-1516549655146-480dbe35542f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 4.2,
    distance: "2.5 miles",
    specialties: ["Pediatrics", "Obstetrics", "Family Medicine"],
    emergency: true
  },
  {
    id: 3,
    name: "Riverside Health Clinic",
    address: "789 River Rd, Villageton",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 3.8,
    distance: "3.7 miles",
    specialties: ["Dermatology", "Internal Medicine"],
    emergency: false
  },
  {
    id: 4,
    name: "Memorial Hospital",
    address: "101 Pine St, Metropolis",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 4.7,
    distance: "4.1 miles",
    specialties: ["Oncology", "Cardiology", "Gastroenterology"],
    emergency: true
  },
  {
    id: 5,
    name: "University Medical Center",
    address: "202 College Blvd, Edutown",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 4.9,
    distance: "5.3 miles",
    specialties: ["Research", "Neurosurgery", "Transplant"],
    emergency: true
  },
  {
    id: 6,
    name: "Children's Hospital",
    address: "303 Kiddie Ln, Familyville",
    image: "https://images.unsplash.com/photo-1559000357-f6b52ddfcbef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    rating: 4.6,
    distance: "2.8 miles",
    specialties: ["Pediatrics", "Child Psychology", "Neonatology"],
    emergency: true
  }
];

const Hospitals = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);

  const handleSearch = () => {
    if (!searchQuery && !location) {
      setFilteredHospitals(hospitals);
      return;
    }

    const filtered = hospitals.filter(
      (hospital) =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        hospital.address.toLowerCase().includes(location.toLowerCase())
    );

    setFilteredHospitals(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Find Hospitals Near You</h1>
            
            <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-3 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search hospitals, specialties..." 
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Your location" 
                  className="pl-10 w-full"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button className="bg-healthBlue hover:bg-blue-600" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hospital) => (
              <Card key={hospital.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name} 
                    className="object-cover w-full h-full"
                  />
                  {hospital.emergency && (
                    <div className="absolute top-3 right-3 bg-healthRed text-white text-xs font-medium px-2 py-1 rounded">
                      24h Emergency
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{hospital.name}</h3>
                  
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1 text-healthBlue" />
                    <span>{hospital.address} ({hospital.distance})</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center text-amber-500 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(hospital.rating) ? 'fill-amber-500' : 'fill-gray-200'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">{hospital.rating}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {hospital.specialties.map((specialty, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          <HeartPulse className="h-3 w-3 mr-1" />
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href={`/hospitals/${hospital.id}`} 
                      className="block w-full bg-healthBlue hover:bg-blue-600 text-white text-center py-2 rounded-md font-medium"
                    >
                      View Details
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hospitals;
