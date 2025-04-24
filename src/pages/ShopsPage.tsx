
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';

const ShopsPage = () => {
  // Shop categories
  const categories = [
    "All", "Clothing", "Electronics", "Books", "Home & Decor", "Beauty", "Sports", "Toys", "Jewelry"
  ];

  // Shops data
  const shops = [
    {
      id: 1, 
      name: "Fashion Hub", 
      category: "Clothing",
      description: "Latest fashion trends for everyone",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      hours: "10:00 AM - 9:00 PM",
      featured: true
    },
    {
      id: 2, 
      name: "TechZone", 
      category: "Electronics",
      description: "Cutting-edge technology and gadgets",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      hours: "10:00 AM - 8:00 PM",
      featured: true
    },
    {
      id: 3, 
      name: "Book Haven", 
      category: "Books",
      description: "Endless stories waiting to be discovered",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      hours: "9:00 AM - 8:00 PM",
      featured: false
    },
    {
      id: 4, 
      name: "Home Elegance", 
      category: "Home & Decor",
      description: "Beautiful furniture and decor for your home",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      hours: "10:00 AM - 9:00 PM",
      featured: false
    },
    {
      id: 5, 
      name: "Beauty Secrets", 
      category: "Beauty",
      description: "Premium beauty products and cosmetics",
      image: "https://images.unsplash.com/photo-1512207846876-bb54ef5056fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      hours: "10:00 AM - 8:00 PM",
      featured: false
    },
    {
      id: 6, 
      name: "SportLife", 
      category: "Sports",
      description: "Everything you need for an active lifestyle",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      hours: "9:00 AM - 9:00 PM",
      featured: false
    },
    {
      id: 7, 
      name: "Kids' Wonderland", 
      category: "Toys",
      description: "Fun toys and games for children of all ages",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      hours: "10:00 AM - 7:00 PM",
      featured: false
    },
    {
      id: 8, 
      name: "Golden Touch", 
      category: "Jewelry",
      description: "Exquisite jewelry for every occasion",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4ad8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      hours: "11:00 AM - 8:00 PM",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-mall-primary text-white py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Shops</h1>
            <p className="text-lg max-w-2xl mx-auto">Discover a wide variety of stores offering everything you need and more.</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for shops..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      <section className="mall-section">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shops.map(shop => (
              <Card key={shop.id} className="overflow-hidden zone-card">
                {shop.featured && (
                  <div className="absolute top-2 right-2 bg-mall-primary text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={shop.image} 
                    alt={shop.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{shop.name}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{shop.category}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{shop.description}</p>
                  <p className="text-xs text-gray-500 mb-3">Hours: {shop.hours}</p>
                  <Button className="w-full flex items-center justify-center gap-2">
                    Visit Shop <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special offers banner */}
      <section className="mall-section bg-zone-shop">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Special Offers & Discounts</h2>
              <p className="text-gray-700 max-w-md">Discover exclusive deals and promotions from your favorite stores in the mall.</p>
            </div>
            <Button size="lg" className="bg-mall-primary hover:bg-mall-secondary">
              View All Offers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopsPage;
