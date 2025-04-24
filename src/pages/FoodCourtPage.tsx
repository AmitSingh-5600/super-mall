
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FoodCourtPage = () => {
  // Restaurant categories
  const cuisines = ["All", "American", "Italian", "Asian", "Mexican", "Desserts", "Drinks"];

  // Restaurants data
  const restaurants = [
    {
      id: 1,
      name: "Burger Paradise",
      cuisine: "American",
      description: "Juicy burgers and crispy fries",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
      priceRange: "$$",
      specialOffer: "Free drink with any burger combo"
    },
    {
      id: 2,
      name: "Pasta Palace",
      cuisine: "Italian",
      description: "Authentic Italian pasta and pizza",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      priceRange: "$$$"
    },
    {
      id: 3,
      name: "Sushi Express",
      cuisine: "Asian",
      description: "Fresh sushi and Japanese cuisine",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      priceRange: "$$$",
      specialOffer: "20% off on all sushi platters"
    },
    {
      id: 4,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      description: "Authentic Mexican tacos and quesadillas",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.3,
      priceRange: "$$"
    },
    {
      id: 5,
      name: "Sweet Delights",
      cuisine: "Desserts",
      description: "Delicious pastries and ice cream",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      priceRange: "$$"
    },
    {
      id: 6,
      name: "Coffee Corner",
      cuisine: "Drinks",
      description: "Premium coffee and tea",
      image: "https://images.unsplash.com/photo-1521302200778-33c7b67c75a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.4,
      priceRange: "$"
    }
  ];

  // Menu items data (for featured restaurant)
  const menuItems = {
    "Popular": [
      { 
        name: "Classic Cheeseburger", 
        description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce", 
        price: "$8.99" 
      },
      { 
        name: "Buffalo Wings", 
        description: "Crispy chicken wings tossed in spicy buffalo sauce", 
        price: "$10.99" 
      },
      { 
        name: "Loaded Fries", 
        description: "Crispy fries topped with cheese, bacon, and sour cream", 
        price: "$6.99" 
      }
    ],
    "Burgers": [
      { 
        name: "Classic Cheeseburger", 
        description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce", 
        price: "$8.99" 
      },
      { 
        name: "Bacon Deluxe", 
        description: "Beef patty with bacon, Swiss cheese, and caramelized onions", 
        price: "$10.99" 
      },
      { 
        name: "Veggie Burger", 
        description: "Plant-based patty with avocado, sprouts, and vegan mayo", 
        price: "$9.99" 
      }
    ],
    "Sides": [
      { 
        name: "French Fries", 
        description: "Crispy golden fries with your choice of seasoning", 
        price: "$3.99" 
      },
      { 
        name: "Onion Rings", 
        description: "Beer-battered onion rings with dipping sauce", 
        price: "$4.99" 
      },
      { 
        name: "Side Salad", 
        description: "Mixed greens with cherry tomatoes and balsamic vinaigrette", 
        price: "$4.99" 
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <section className="bg-zone-food py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Food Court</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Satisfy your cravings with a variety of cuisines from around the world.</p>
          </div>
        </div>
      </section>

      <section className="mall-section">
        <div className="container mx-auto">
          {/* Cuisine filters */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {cuisines.map((cuisine) => (
              <Button 
                key={cuisine} 
                variant={cuisine === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {cuisine}
              </Button>
            ))}
          </div>

          {/* Restaurants grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map(restaurant => (
              <Card key={restaurant.id} className="overflow-hidden zone-card">
                {restaurant.specialOffer && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Special Offer
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{restaurant.cuisine}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(restaurant.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{restaurant.rating}</span>
                    <span className="text-sm text-gray-600 ml-auto">{restaurant.priceRange}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{restaurant.description}</p>
                  {restaurant.specialOffer && (
                    <p className="text-xs text-red-600 mb-3">Offer: {restaurant.specialOffer}</p>
                  )}
                  <Button className="w-full">View Menu</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured restaurant with menu */}
      <section className="mall-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-heading">Featured Restaurant: Burger Paradise</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Burger Paradise" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-2xl mb-2">Burger Paradise</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.5</span>
                  </div>
                  <p className="text-gray-700 mb-3">The best burgers in town with a variety of options to satisfy any craving.</p>
                  <div className="text-sm text-gray-600 space-y-2 mb-4">
                    <p>⏰ Hours: 10:00 AM - 10:00 PM</p>
                    <p>💰 Price Range: $$</p>
                    <p>📍 Location: Level 2, North Wing</p>
                  </div>
                  <div className="bg-red-100 border-l-4 border-red-500 p-3 text-sm">
                    <p className="font-semibold">Special Offer:</p>
                    <p>Free drink with any burger combo!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-xl mb-4">Menu</h3>
                  
                  <Tabs defaultValue="Popular">
                    <TabsList className="w-full justify-start mb-6 overflow-auto">
                      {Object.keys(menuItems).map((category) => (
                        <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {Object.entries(menuItems).map(([category, items]) => (
                      <TabsContent key={category} value={category} className="space-y-4">
                        {items.map((item, index) => (
                          <div key={index} className="flex flex-col sm:flex-row justify-between border-b pb-4">
                            <div>
                              <h4 className="font-medium text-lg">{item.name}</h4>
                              <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                            <div className="flex items-center gap-4 mt-2 sm:mt-0">
                              <span className="font-medium">{item.price}</span>
                              <Button variant="outline" size="sm">Add</Button>
                            </div>
                          </div>
                        ))}
                        <Button className="w-full mt-4">View Full Menu</Button>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="mall-section bg-mall-primary text-white text-center">
        <div className="container mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4">Hungry? Order for Pickup</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Skip the line and order ahead from any of our Food Court restaurants.</p>
          <Button size="lg" className="bg-white text-mall-primary hover:bg-gray-100">
            Order Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FoodCourtPage;
