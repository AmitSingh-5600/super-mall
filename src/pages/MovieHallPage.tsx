
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck } from 'lucide-react';

const MovieHallPage = () => {
  // Movie data
  const movies = [
    {
      id: 1,
      title: "Space Adventure",
      genre: "Sci-Fi, Action",
      duration: "2h 15m",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: "PG-13",
      description: "An epic journey through the cosmos as astronauts search for a new home for humanity.",
      director: "James Reynolds",
      cast: "Anna Porter, Michael Chen, Sarah Johnson",
      showTimes: ["10:30 AM", "1:15 PM", "4:00 PM", "7:30 PM", "10:15 PM"],
      releaseDate: "May 15, 2023"
    },
    {
      id: 2,
      title: "Mystic Forest",
      genre: "Fantasy, Adventure",
      duration: "1h 55m",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: "PG",
      description: "A young explorer discovers a hidden forest inhabited by magical creatures and embarks on an unforgettable adventure.",
      director: "Elizabeth Wong",
      cast: "Daniel Smith, Jessica Brown, Robert Taylor",
      showTimes: ["11:00 AM", "2:30 PM", "5:15 PM", "8:00 PM"],
      releaseDate: "June 1, 2023"
    },
    {
      id: 3,
      title: "Family Reunion",
      genre: "Comedy, Drama",
      duration: "1h 45m",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: "PG",
      description: "A heartwarming and hilarious story of a family coming together after years apart.",
      director: "Mark Thompson",
      cast: "Jennifer Davis, Chris Wilson, Emma Roberts",
      showTimes: ["12:15 PM", "3:00 PM", "5:45 PM", "8:30 PM"],
      releaseDate: "April 20, 2023"
    },
    {
      id: 4,
      title: "The Last Detective",
      genre: "Mystery, Thriller",
      duration: "2h 05m",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: "R",
      description: "A brilliant detective takes on one final case to solve a series of mysterious disappearances.",
      director: "David Miller",
      cast: "Thomas Jackson, Olivia Martinez, William Lee",
      showTimes: ["1:00 PM", "4:30 PM", "7:00 PM", "9:45 PM"],
      releaseDate: "May 5, 2023"
    },
    {
      id: 5,
      title: "Racing Hearts",
      genre: "Sports, Romance",
      duration: "1h 50m",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: "PG-13",
      description: "A promising race car driver falls in love with his rival's sister, complicating his path to victory.",
      director: "Sophia Rodriguez",
      cast: "Alex Turner, Lily Parker, Jake Wilson",
      showTimes: ["11:30 AM", "2:00 PM", "4:45 PM", "7:15 PM", "9:30 PM"],
      releaseDate: "June 10, 2023"
    },
    {
      id: 6,
      title: "Animated Wonderland",
      genre: "Animation, Family",
      duration: "1h 40m",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: "G",
      description: "A magical animated adventure that will delight viewers of all ages.",
      director: "Peter Johnson",
      cast: "Voice talents of Mia Roberts, Leo Green, Zoe Thompson",
      showTimes: ["10:00 AM", "12:30 PM", "2:45 PM", "5:00 PM", "7:45 PM"],
      releaseDate: "May 20, 2023"
    }
  ];

  // Coming soon movies
  const comingSoonMovies = [
    {
      id: 7,
      title: "Ocean's Depths",
      genre: "Adventure, Drama",
      image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      releaseDate: "Coming July 15",
    },
    {
      id: 8,
      title: "Night Warriors",
      genre: "Action, Fantasy",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      releaseDate: "Coming July 22",
    },
    {
      id: 9,
      title: "Love in Paris",
      genre: "Romance, Comedy",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      releaseDate: "Coming August 5",
    },
  ];

  const [selectedDate, setSelectedDate] = useState("Today");

  // Available dates for booking
  const dates = ["Today", "Tomorrow", "Jul 12", "Jul 13", "Jul 14"];

  return (
    <div className="min-h-screen">
      <section className="bg-zone-movie py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Movie Hall</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Catch the latest blockbusters in our state-of-the-art cinema.</p>
          </div>
        </div>
      </section>

      <section className="mall-section">
        <div className="container mx-auto">
          <h2 className="section-heading">Now Showing</h2>
          
          {/* Date selection tabs */}
          <div className="mb-8">
            <Tabs defaultValue="Today" onValueChange={setSelectedDate}>
              <TabsList className="w-full justify-start overflow-auto">
                {dates.map(date => (
                  <TabsTrigger key={date} value={date}>{date}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map(movie => (
              <Card key={movie.id} className="overflow-hidden zone-card">
                <div className="h-80 relative overflow-hidden group">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {movie.rating}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">{movie.director}</p>
                      <p className="text-sm">Cast: {movie.cast}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-xl mb-1">{movie.title}</h3>
                  <div className="flex flex-wrap text-sm text-gray-500 mb-3">
                    <span className="mr-3">{movie.genre}</span>
                    <span>{movie.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{movie.description}</p>
                  
                  {/* Show times */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Showtimes for {selectedDate}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {movie.showTimes.map((time, index) => (
                        <Button key={index} variant="outline" size="sm" className="h-8">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1">Watch Trailer</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{movie.title} - Trailer</DialogTitle>
                        </DialogHeader>
                        <div className="aspect-video bg-gray-100 flex items-center justify-center">
                          <p className="text-gray-500">Trailer Video Placeholder</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button className="flex-1">Book Tickets</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="mall-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-heading">Coming Soon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comingSoonMovies.map(movie => (
              <Card key={movie.id} className="overflow-hidden zone-card">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="bg-mall-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                      {movie.releaseDate}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{movie.title}</h3>
                  <p className="text-gray-500 text-sm">{movie.genre}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <Button variant="outline" size="sm">
                      <BadgeCheck className="h-4 w-4 mr-1" />
                      Notify Me
                    </Button>
                    <Button variant="link" size="sm" className="text-mall-primary">
                      More Info
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cinema Information */}
      <section className="mall-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="section-subheading">Movie Hall Information</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  Our state-of-the-art cinema features comfortable seating, advanced projection systems, and immersive sound for the ultimate movie-watching experience.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>6 screens with premium seating</li>
                  <li>4K digital projection</li>
                  <li>Dolby Atmos surround sound</li>
                  <li>Concession stand with snacks and beverages</li>
                  <li>Online booking available</li>
                </ul>
                <p className="text-gray-700">
                  Operating Hours: Daily, 9:30 AM - 11:00 PM<br />
                  Location: Level 3, East Wing
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-subheading">Membership Benefits</h2>
              <Card>
                <CardContent className="p-5">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <BadgeCheck className="h-5 w-5 text-mall-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Points on Every Ticket</h4>
                        <p className="text-sm text-gray-600">Earn points with every ticket purchase</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <BadgeCheck className="h-5 w-5 text-mall-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Free Popcorn Upgrades</h4>
                        <p className="text-sm text-gray-600">Get a size upgrade on popcorn</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <BadgeCheck className="h-5 w-5 text-mall-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Exclusive Screenings</h4>
                        <p className="text-sm text-gray-600">Access to members-only premieres</p>
                      </div>
                    </div>
                    <Button className="w-full mt-2">Join Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieHallPage;
