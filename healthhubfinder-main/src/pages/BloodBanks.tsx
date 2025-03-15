
import { useState } from "react";
import { Search, MapPin, Heart, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bloodBanks = [
  {
    id: 1,
    name: "City Blood Bank Center",
    address: "123 Main St, Cityville",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
    distance: "1.4 miles",
    bloodTypes: {
      "A+": "High",
      "A-": "Medium",
      "B+": "High",
      "B-": "Low",
      "AB+": "Medium",
      "AB-": "Critical",
      "O+": "Medium",
      "O-": "Low"
    }
  },
  {
    id: 2,
    name: "Memorial Hospital Blood Center",
    address: "456 Oak Ave, Townsville",
    phone: "(555) 987-6543",
    hours: "Mon-Sun: 24 Hours",
    distance: "2.7 miles",
    bloodTypes: {
      "A+": "Medium",
      "A-": "Low",
      "B+": "Medium",
      "B-": "Critical",
      "AB+": "High",
      "AB-": "Medium",
      "O+": "Low",
      "O-": "Critical"
    }
  },
  {
    id: 3,
    name: "Community Donor Center",
    address: "789 Elm St, Villageton",
    phone: "(555) 456-7890",
    hours: "Mon-Fri: 9AM-5PM",
    distance: "3.2 miles",
    bloodTypes: {
      "A+": "High",
      "A-": "High",
      "B+": "Medium",
      "B-": "Medium",
      "AB+": "Low",
      "AB-": "Low",
      "O+": "High",
      "O-": "Medium"
    }
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "High":
      return "bg-green-500";
    case "Medium":
      return "bg-yellow-500";
    case "Low":
      return "bg-orange-500";
    case "Critical":
      return "bg-red-600";
    default:
      return "bg-gray-400";
  }
};

const getStatusTextColor = (status: string) => {
  switch (status) {
    case "High":
      return "text-green-600";
    case "Medium":
      return "text-yellow-600";
    case "Low":
      return "text-orange-600";
    case "Critical":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

const BloodBanks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [filteredBanks, setFilteredBanks] = useState(bloodBanks);

  const handleSearch = () => {
    if (!searchQuery && !location) {
      setFilteredBanks(bloodBanks);
      return;
    }

    const filtered = bloodBanks.filter(
      (bank) =>
        bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bank.address.toLowerCase().includes(location.toLowerCase())
    );

    setFilteredBanks(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Blood Bank Directory</h1>
            
            <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-3 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search blood banks..." 
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
              <Button className="bg-healthRed hover:bg-red-600" onClick={handleSearch}>
                Search
              </Button>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-slate-600 mb-4">
                Donate blood today and help save lives. Blood banks in your area are in need of donors.
              </p>
              <Button className="bg-healthRed hover:bg-red-600">
                Learn How to Donate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8">
            {filteredBanks.map((bank) => (
              <Card key={bank.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3">{bank.name}</h3>
                      
                      <div className="flex items-center text-sm text-slate-600 mb-2">
                        <MapPin className="h-4 w-4 mr-2 text-healthRed" />
                        <span>{bank.address}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-slate-600 mb-2">
                        <Heart className="h-4 w-4 mr-2 text-healthRed" />
                        <span>{bank.distance} away</span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-slate-600">
                          <span className="font-medium">Phone:</span> {bank.phone}
                        </p>
                        <p className="text-sm text-slate-600">
                          <span className="font-medium">Hours:</span> {bank.hours}
                        </p>
                      </div>
                      
                      <Button 
                        className="bg-healthRed hover:bg-red-600 text-white mt-2"
                        onClick={() => window.location.href = `tel:${bank.phone.replace(/[^\d]/g, '')}`}
                      >
                        Call Now
                      </Button>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h4 className="font-medium text-slate-800 mb-3">Blood Availability</h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-20">Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Indicator</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Object.entries(bank.bloodTypes).map(([type, status]) => (
                            <TableRow key={type}>
                              <TableCell className="font-medium">{type}</TableCell>
                              <TableCell className={getStatusTextColor(status)}>{status}</TableCell>
                              <TableCell className="text-right">
                                <div className={`w-4 h-4 rounded-full ml-auto ${getStatusColor(status)}`}></div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
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

export default BloodBanks;
