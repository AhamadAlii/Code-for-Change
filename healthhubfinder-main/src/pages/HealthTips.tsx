
import { useState } from "react";
import { Search, CalendarIcon, Newspaper, ArrowRight, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const healthArticles = [
  {
    id: 1,
    title: "The Importance of Regular Health Check-ups",
    excerpt: "Regular check-ups can help detect potential health issues before they become a problem...",
    content: "Regular health check-ups are essential for maintaining good health and preventing serious medical conditions. They allow healthcare professionals to identify potential health risks early, when they're easier to treat. During a check-up, your doctor can screen for various conditions, monitor vital signs, and provide personalized advice based on your health history and lifestyle. Even if you feel healthy, some conditions like high blood pressure or high cholesterol may not present obvious symptoms but can lead to serious complications if left untreated.",
    category: "Preventive Care",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Understanding Blood Donation: Why It Matters",
    excerpt: "Blood donation is a critical lifeline for many medical treatments and emergency situations...",
    content: "Blood donation is a simple yet powerful act that can save multiple lives. Every two seconds, someone in the United States needs blood, whether for surgery, cancer treatment, chronic illness, or traumatic injuries. A single donation can help up to three different people. Despite this constant need, less than 10% of eligible donors actually give blood. Blood has a limited shelf life, making regular donations crucial to maintain adequate supplies. By donating blood, you're not only helping others but also receiving a mini health check-up as your blood pressure, pulse, and hemoglobin are tested before donation.",
    category: "Blood Donation",
    date: "June 2, 2023",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61883a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Mental Health Awareness: Breaking the Stigma",
    excerpt: "Taking care of your mental health is just as important as maintaining your physical health...",
    content: "Mental health is a crucial component of overall wellbeing, yet it often receives less attention than physical health due to persistent stigma. One in five adults experiences mental illness each year, making it one of the most common health conditions. Understanding that mental health conditions are medical problems, not personal weaknesses, is essential for breaking down barriers to care. Creating open conversations about mental health, showing empathy, and educating ourselves about these conditions helps reduce stigma. Remember, seeking help for mental health concerns demonstrates strength, not weakness.",
    category: "Mental Health",
    date: "June 10, 2023",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Nutrition Basics: Building a Balanced Diet",
    excerpt: "Understanding the fundamentals of nutrition can help you make better food choices...",
    content: "A balanced diet is fundamental to good health, providing the necessary nutrients for energy, growth, and cell repair. The key components include carbohydrates for energy, proteins for tissue building and repair, healthy fats for hormone production and nutrient absorption, vitamins and minerals for various bodily functions, and water for hydration. The ideal plate should be half-filled with fruits and vegetables, one-quarter with lean protein, and one-quarter with whole grains. Eating a rainbow of colorful foods ensures a wide variety of nutrients. Remember, moderation is key—no single food contains all necessary nutrients, so variety is essential.",
    category: "Nutrition",
    date: "July 5, 2023",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "The Benefits of Regular Exercise",
    excerpt: "Regular physical activity offers numerous health benefits for both body and mind...",
    content: "Regular exercise is one of the most effective ways to improve overall health. Physical activity strengthens your heart, improves circulation, helps maintain a healthy weight, and reduces the risk of chronic diseases like diabetes and heart disease. It also releases endorphins, which boost mood and reduce stress. For adults, the recommended amount is at least 150 minutes of moderate-intensity exercise per week, which can be broken down into 30-minute sessions five days a week. Even small amounts of activity are beneficial—taking the stairs instead of the elevator or walking during lunch breaks adds up over time. Remember to include a mix of cardiovascular exercise, strength training, and flexibility work for maximum benefit.",
    category: "Exercise",
    date: "July 22, 2023",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Understanding Diabetes: Prevention and Management",
    excerpt: "Learn about diabetes risk factors, prevention strategies, and effective management techniques...",
    content: "Diabetes is a chronic condition affecting how your body processes blood sugar. There are two main types: Type 1, an autoimmune condition where the body doesn't produce insulin, and Type 2, where the body doesn't use insulin properly. While Type 1 cannot be prevented, Type 2—which accounts for 90-95% of cases—can often be prevented or delayed through lifestyle changes. These include maintaining a healthy weight, regular physical activity, and a balanced diet rich in fruits, vegetables, and whole grains while limiting processed foods and added sugars. For those already diagnosed, management involves monitoring blood sugar, medication if prescribed, regular exercise, healthy eating, and regular check-ups. With proper management, people with diabetes can lead long, healthy lives.",
    category: "Chronic Diseases",
    date: "August 8, 2023",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const HealthTips = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(healthArticles);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Preventive Care", "Blood Donation", "Mental Health", "Nutrition", "Exercise", "Chronic Diseases"];

  const handleSearch = () => {
    if (!searchQuery && selectedCategory === "All") {
      setFilteredArticles(healthArticles);
      return;
    }

    let filtered = [...healthArticles];

    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    setFilteredArticles(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    if (category === "All" && !searchQuery) {
      setFilteredArticles(healthArticles);
      return;
    }
    
    let filtered = [...healthArticles];
    
    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (category !== "All") {
      filtered = filtered.filter(
        (article) => article.category === category
      );
    }
    
    setFilteredArticles(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Health Tips & News</h1>
            
            <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-md mb-8">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="w-full bg-healthGreen hover:bg-green-600" onClick={handleSearch}>
                Search
              </Button>
            </div>
            
            <div className="max-w-3xl mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide mb-6">
              <div className="flex space-x-2 pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-healthGreen hover:bg-green-600" : ""}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 text-healthGreen text-xs font-medium px-2 py-1 rounded">
                      {article.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{article.title}</h3>
                    <p className="text-slate-600 mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center mt-4">
                      <a 
                        href={`/health-tips/${article.id}`} 
                        className="text-healthGreen hover:text-green-700 font-medium inline-flex items-center"
                      >
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                      <button className="text-slate-400 hover:text-healthRed">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Newspaper className="h-16 w-16 mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-medium text-slate-700 mb-2">No articles found</h3>
              <p className="text-slate-500">Try adjusting your search or category filters</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HealthTips;
