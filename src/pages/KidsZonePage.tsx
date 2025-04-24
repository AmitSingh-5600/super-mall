
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck, Star, Clock, Calendar } from 'lucide-react';

const KidsZonePage = () => {
  const activitiesCategories = [
    "All Activities", "Educational", "Entertainment", "Creative", "Outdoor", "Events"
  ];

  // Activities data
  const activities = [
    {
      id: 1,
      title: "Science Workshop",
      category: "Educational",
      ageGroup: "7-12 years",
      description: "Fun science experiments to learn about chemistry and physics.",
      image: "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "1 hour",
      timing: "Daily: 11:00 AM, 2:00 PM, 5:00 PM",
      rating: 4.8,
      parentApproved: true
    },
    {
      id: 2,
      title: "Story Time",
      category: "Entertainment",
      ageGroup: "3-8 years",
      description: "Interactive storytelling sessions with animated characters.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "45 minutes",
      timing: "Daily: 10:30 AM, 1:30 PM, 4:30 PM",
      rating: 4.7,
      parentApproved: true
    },
    {
      id: 3,
      title: "Art & Craft",
      category: "Creative",
      ageGroup: "5-12 years",
      description: "Create beautiful crafts and artwork to take home.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "1 hour",
      timing: "Daily: 12:00 PM, 3:00 PM, 6:00 PM",
      rating: 4.9,
      featured: true,
      parentApproved: true
    },
    {
      id: 4,
      title: "Mini Sports Arena",
      category: "Outdoor",
      ageGroup: "6-12 years",
      description: "Engaging sports activities to keep kids active and happy.",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "1 hour",
      timing: "Daily: 10:00 AM to 7:00 PM",
      rating: 4.5,
      parentApproved: true
    },
    {
      id: 5,
      title: "Puppet Show",
      category: "Entertainment",
      ageGroup: "3-10 years",
      description: "Entertaining puppet shows with classic and modern stories.",
      image: "https://images.unsplash.com/photo-1574852859542-1b41217a7815?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "30 minutes",
      timing: "Weekend: 11:30 AM, 3:30 PM, 6:30 PM",
      rating: 4.6,
      parentApproved: true
    },
    {
      id: 6,
      title: "Coding Workshop",
      category: "Educational",
      ageGroup: "8-14 years",
      description: "Learn the basics of coding through interactive games.",
      image: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      duration: "1.5 hours",
      timing: "Weekend: 12:00 PM, 4:00 PM",
      rating: 4.8,
      newActivity: true,
      parentApproved: true
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Kids Talent Show",
      date: "July 15, 2023",
      time: "2:00 PM - 5:00 PM",
      ageGroup: "5-15 years",
      image: "https://images.unsplash.com/photo-1516715094483-75da7dee9758?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Magic Show Special",
      date: "July 22, 2023",
      time: "3:00 PM - 4:30 PM",
      ageGroup: "All ages",
      image: "https://images.unsplash.com/photo-1587563802675-55c29684809d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Back to School Party",
      date: "August 5, 2023",
      time: "1:00 PM - 4:00 PM",
      ageGroup: "4-12 years",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Safety rules
  const safetyRules = [
    "All activities are supervised by trained staff",
    "Safety protocols in place for all equipment",
    "Age-appropriate activities with clear guidelines",
    "First-aid trained personnel always present",
    "Regular sanitization of all play areas",
    "Parent/guardian sign-in and sign-out required"
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-zone-kids py-16 px-4 md:px-8 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Kids Zone</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">A safe and fun environment for children to learn, play, and make memories.</p>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-200 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-12 right-12 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-32 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-8 right-1/3 w-20 h-20 bg-purple-200 rounded-full opacity-40 animate-float"></div>
      </section>

      <section className="mall-section">
        <div className="container mx-auto">
          <Tabs defaultValue="All Activities">
            <TabsList className="w-full justify-start mb-8 overflow-auto">
              {activitiesCategories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="All Activities">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map(activity => (
                  <Card key={activity.id} className="overflow-hidden zone-card">
                    {activity.newActivity && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                        New
                      </div>
                    )}
                    {activity.featured && (
                      <div className="absolute top-2 right-2 bg-mall-primary text-white text-xs px-2 py-1 rounded-full z-10">
                        Featured
                      </div>
                    )}
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={activity.image} 
                        alt={activity.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-lg">{activity.title}</h3>
                        {activity.parentApproved && (
                          <span className="flex items-center text-xs text-green-600 font-medium">
                            <BadgeCheck className="h-4 w-4 mr-1" />
                            Parent Approved
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                        <span className="bg-gray-100 px-2 py-0.5 rounded">{activity.category}</span>
                        <span>•</span>
                        <span>{activity.ageGroup}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Duration: {activity.duration}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{activity.timing}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(activity.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">{activity.rating}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full">Book Activity</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {activitiesCategories.slice(1).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activities
                    .filter(activity => activity.category === category)
                    .map(activity => (
                      <Card key={activity.id} className="overflow-hidden zone-card">
                        {activity.newActivity && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                            New
                          </div>
                        )}
                        {activity.featured && (
                          <div className="absolute top-2 right-2 bg-mall-primary text-white text-xs px-2 py-1 rounded-full z-10">
                            Featured
                          </div>
                        )}
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={activity.image} 
                            alt={activity.title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-5">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-lg">{activity.title}</h3>
                            {activity.parentApproved && (
                              <span className="flex items-center text-xs text-green-600 font-medium">
                                <BadgeCheck className="h-4 w-4 mr-1" />
                                Parent Approved
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                            <span className="bg-gray-100 px-2 py-0.5 rounded">{activity.category}</span>
                            <span>•</span>
                            <span>{activity.ageGroup}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
                          
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Duration: {activity.duration}</span>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{activity.timing}</span>
                          </div>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(activity.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                              <span className="ml-1 text-sm text-gray-600">{activity.rating}</span>
                            </div>
                          </div>
                          
                          <Button className="w-full">Book Activity</Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mall-section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-heading">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <Card key={event.id} className="overflow-hidden zone-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-mall-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-mall-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div>
                      <span>Age Group: {event.ageGroup}</span>
                    </div>
                  </div>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Info and Safety */}
      <section className="mall-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h2 className="section-subheading">Parent Information</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  Our Kids Zone provides a safe, supervised environment where children can play, learn, and have fun while parents shop or dine in the mall.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-800 mb-2">Registration Process</h3>
                    <p className="text-sm text-gray-700">
                      Parents must register their children at the Kids Zone reception desk. Please bring identification and complete our registration form.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Supervision Policy</h3>
                    <p className="text-sm text-gray-700">
                      Children under 5 must be accompanied by a parent or guardian. Children 5-12 may be left under staff supervision for up to 3 hours.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  Operating Hours: Daily, 10:00 AM - 8:00 PM<br />
                  Location: Level 2, West Wing
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="section-subheading">Safety First</h2>
              <Card className="bg-white border-green-300">
                <CardContent className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded">
                      <BadgeCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg ml-3">Our Safety Promise</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {safetyRules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      View Full Safety Guidelines
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="mall-section bg-zone-kids">
        <div className="container mx-auto py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready for Fun?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-700">Join our Kids Club for exclusive access to special events, workshops, and discounts.</p>
          <Button size="lg" className="bg-mall-primary hover:bg-mall-secondary">
            Join Kids Club
          </Button>
        </div>
      </section>
    </div>
  );
};

export default KidsZonePage;
