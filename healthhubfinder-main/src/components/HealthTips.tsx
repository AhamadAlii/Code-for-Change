
import { Newspaper, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HealthTips = () => {
  const tips = [
    {
      title: "The Importance of Regular Health Check-ups",
      excerpt: "Regular check-ups can help detect potential health issues before they become a problem...",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Understanding Blood Donation: Why It Matters",
      excerpt: "Blood donation is a critical lifeline for many medical treatments and emergency situations...",
      date: "June 2, 2023",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61883a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt: "Taking care of your mental health is just as important as maintaining your physical health...",
      date: "June 10, 2023",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Health Tips & News</h2>
            <p className="text-slate-600">Stay informed with the latest health information and medical news</p>
          </div>
          <a href="/health-tips" className="text-healthBlue hover:text-blue-700 flex items-center">
            View all 
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={tip.image} 
                  alt={tip.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <Newspaper className="h-4 w-4 mr-2" />
                  <span>{tip.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{tip.title}</h3>
                <p className="text-slate-600 mb-4">{tip.excerpt}</p>
                <a href={`/health-tips/${index}`} className="text-healthBlue hover:text-blue-700 font-medium inline-flex items-center">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTips;
