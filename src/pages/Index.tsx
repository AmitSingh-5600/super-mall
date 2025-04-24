
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { Store, Utensils, Film, Gamepad, Baby } from 'lucide-react';

const Index = () => {
  // Hero banner data
  const heroBanners = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Up to 70% off on selected items",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      cta: "Shop Now",
      link: "/shops"
    },
    {
      id: 2,
      title: "New Food Court",
      description: "Explore our new restaurants and special dishes",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      cta: "Explore Menu",
      link: "/food-court"
    },
    {
      id: 3,
      title: "Latest Blockbusters",
      description: "Watch the newest movies at our movie hall",
      bgColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
      cta: "Book Now",
      link: "/movie-hall"
    }
  ];

  // Featured shops data
  const featuredShops = [
    {
      id: 1, 
      name: "Fashion Hub", 
      category: "Clothing",
      description: "Latest fashion trends for everyone",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      color: "bg-zone-shop"
    },
    {
      id: 2, 
      name: "TechZone", 
      category: "Electronics",
      description: "Cutting-edge technology and gadgets",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      color: "bg-zone-shop"
    },
    {
      id: 3, 
      name: "Book Haven", 
      category: "Books",
      description: "Endless stories waiting to be discovered",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      color: "bg-zone-shop"
    }
  ];

  // Now showing movies data
  const nowShowingMovies = [
    {
      id: 1,
      title: "Space Adventure",
      genre: "Sci-Fi, Action",
      duration: "2h 15m",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      color: "bg-zone-movie"
    },
    {
      id: 2,
      title: "Mystic Forest",
      genre: "Fantasy, Adventure",
      duration: "1h 55m",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      color: "bg-zone-movie"
    },
    {
      id: 3,
      title: "Family Reunion",
      genre: "Comedy, Drama",
      duration: "1h 45m",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      color: "bg-zone-movie"
    }
  ];

  // Top deals data
  const topDeals = [
    {
      id: 1,
      shop: "Fashion Hub",
      title: "50% Off Summer Collection",
      validUntil: "August 31, 2023",
      color: "bg-red-100 border-l-4 border-red-500"
    },
    {
      id: 2,
      shop: "TechZone",
      title: "Buy One Get One Free on Accessories",
      validUntil: "July 15, 2023",
      color: "bg-blue-100 border-l-4 border-blue-500"
    },
    {
      id: 3,
      shop: "Food Corner",
      title: "Happy Hour: 30% Off All Drinks",
      validUntil: "Daily, 4-6 PM",
      color: "bg-green-100 border-l-4 border-green-500"
    }
  ];

  // Mall zones data
  const mallZones = [
    { 
      id: "shops", 
      name: "Shopping", 
      description: "Explore our diverse range of shops",
      icon: Store,
      color: "bg-zone-shop",
      link: "/shops"
    },
    { 
      id: "food", 
      name: "Food Court", 
      description: "Delicious meals from around the world",
      icon: Utensils,
      color: "bg-zone-food",
      link: "/food-court"
    },
    { 
      id: "movie", 
      name: "Movie Hall", 
      description: "Watch the latest blockbusters",
      icon: Film,
      color: "bg-zone-movie",
      link: "/movie-hall"
    },
    { 
      id: "arcade", 
      name: "Arcade", 
      description: "Fun games for all ages",
      icon: Gamepad,
      color: "bg-zone-arcade",
      link: "/arcade"
    },
    { 
      id: "kids", 
      name: "Kids Zone", 
      description: "Safe and entertaining space for children",
      icon: Baby,
      color: "bg-zone-kids",
      link: "/kids-zone"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner Carousel */}
      <section className="mall-section">
        <Carousel className="w-full">
          <CarouselContent>
            {heroBanners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className={`${banner.bgColor} text-white rounded-lg w-full h-64 md:h-96 flex flex-col items-center justify-center text-center p-8`}>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">{banner.title}</h1>
                  <p className="text-lg md:text-xl mb-6">{banner.description}</p>
                  <Link to={banner.link}>
                    <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100">{banner.cta}</Button>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Mall Zones */}
      <section className="mall-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Explore Our Mall</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {mallZones.map((zone) => (
              <Link to={zone.link} key={zone.id}>
                <Card className={`zone-card h-full ${zone.color} border-none`}>
                  <CardContent className="flex flex-col items-center justify-center pt-6 text-center h-full">
                    <div className="bg-white rounded-full p-4 mb-4 shadow-md">
                      <zone.icon className="h-8 w-8 text-mall-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{zone.name}</h3>
                    <p className="text-gray-600 text-sm">{zone.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Shops */}
      <section className="mall-section">
        <div className="container mx-auto">
          <h2 className="section-heading">Featured Shops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredShops.map(shop => (
              <Card key={shop.id} className="overflow-hidden zone-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={shop.image} 
                    alt={shop.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{shop.name}</h3>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{shop.category}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{shop.description}</p>
                  <Button variant="outline" className="w-full mt-3">Visit Shop</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shops">
              <Button>View All Shops</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Now Showing Movies */}
      <section className="mall-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-heading">Now Showing at Movie Hall</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nowShowingMovies.map(movie => (
              <Card key={movie.id} className="overflow-hidden zone-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{movie.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{movie.genre}</span>
                    <span>{movie.duration}</span>
                  </div>
                  <Button className="w-full mt-3">Book Tickets</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/movie-hall">
              <Button variant="outline">View All Movies</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Best Offers */}
      <section className="mall-section">
        <div className="container mx-auto">
          <h2 className="section-heading">Today's Best Offers</h2>
          <div className="space-y-4">
            {topDeals.map(deal => (
              <div 
                key={deal.id} 
                className={`p-4 rounded-md ${deal.color} transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <span className="text-sm font-medium">{deal.shop}</span>
                    <h3 className="font-semibold text-lg">{deal.title}</h3>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm text-gray-600">Valid until: {deal.validUntil}</p>
                    <Button variant="link" className="p-0">View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="mall-section bg-mall-primary text-white text-center">
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to explore the Super Mall?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Discover shops, restaurants, movies, and entertainment all in one digital destination.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-mall-primary hover:bg-gray-100">
              Sign Up
            </Button>
            <Button variant="outline" size="lg" className="border-white text-mall-primary hover:bg-mall-secondary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
