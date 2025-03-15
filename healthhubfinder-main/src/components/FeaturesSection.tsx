
import { Hospital, Heart, FileText, Search, MapPin, PhoneCall } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Hospital className="h-10 w-10 text-healthBlue" />,
      title: "Find Hospitals",
      description: "Search for hospitals based on location, specialty, or services offered."
    },
    {
      icon: <Heart className="h-10 w-10 text-healthRed" />,
      title: "Blood Bank",
      description: "Check real-time blood availability at blood banks near you."
    },
    {
      icon: <FileText className="h-10 w-10 text-healthGreen" />,
      title: "Health Tips",
      description: "Access latest health tips, articles and medical news."
    },
    {
      icon: <PhoneCall className="h-10 w-10 text-healthRed" />,
      title: "Emergency Call",
      description: "Quick access to emergency services with one tap."
    },
    {
      icon: <MapPin className="h-10 w-10 text-healthBlue" />,
      title: "Location Services",
      description: "Find healthcare services based on your current location."
    },
    {
      icon: <Search className="h-10 w-10 text-healthGreen" />,
      title: "Advanced Search",
      description: "Filter hospitals by ratings, services, and specializations."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            HealthHubFinder provides comprehensive healthcare information to help you make informed decisions about your health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
