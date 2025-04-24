
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Star, Users, ArrowRight } from 'lucide-react';

const ArcadePage = () => {
  // Game categories
  const categories = ["All Games", "Action", "Adventure", "Racing", "Strategy", "Family"];

  // Games data
  const games = [
    {
      id: 1,
      title: "Space Blaster",
      category: "Action",
      description: "Defend your spaceship against waves of alien invaders.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      popularity: 4.8,
      players: "1-2",
      difficulty: "Medium",
      newGame: true
    },
    {
      id: 2,
      title: "Mystery Island",
      category: "Adventure",
      description: "Explore a mysterious island filled with puzzles and treasures.",
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      popularity: 4.5,
      players: "1",
      difficulty: "Hard"
    },
    {
      id: 3,
      title: "Turbo Racing",
      category: "Racing",
      description: "Race against opponents on thrilling tracks around the world.",
      image: "https://images.unsplash.com/photo-1560253787-9def66371d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      popularity: 4.9,
      players: "1-4",
      difficulty: "Easy",
      featured: true
    },
    {
      id: 4,
      title: "Kingdom Builder",
      category: "Strategy",
      description: "Build and manage your medieval kingdom and defend it against enemies.",
      image: "https://images.unsplash.com/photo-1563941406054-895eb331b560?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      popularity: 4.6,
      players: "1",
      difficulty: "Hard"
    },
    {
      id: 5,
      title: "Fantasy Quest",
      category: "Adventure",
      description: "Embark on an epic quest in a magical fantasy world.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      popularity: 4.7,
      players: "1-2",
      difficulty: "Medium"
    },
    {
      id: 6,
      title: "Bubble Pop",
      category: "Family",
      description: "Pop colorful bubbles in this addictive family-friendly game.",
      image: "https://images.unsplash.com/photo-1520716448707-bbe0dfb68c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      popularity: 4.4,
      players: "1",
      difficulty: "Easy",
      newGame: true
    },
    {
      id: 7,
      title: "Zombie Shooter",
      category: "Action",
      description: "Survive a zombie apocalypse with an arsenal of weapons.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      popularity: 4.2,
      players: "1-2",
      difficulty: "Medium"
    },
    {
      id: 8,
      title: "Puzzle Master",
      category: "Strategy",
      description: "Challenge your mind with increasingly difficult puzzles.",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      popularity: 4.3,
      players: "1",
      difficulty: "Hard",
      featured: true
    }
  ];

  // Leaderboard data
  const leaderboard = [
    { rank: 1, player: "GamerPro99", game: "Space Blaster", score: 9870 },
    { rank: 2, player: "RacingQueen", game: "Turbo Racing", score: 8940 },
    { rank: 3, player: "PuzzleKing", game: "Puzzle Master", score: 8750 },
    { rank: 4, player: "ZombieHunter", game: "Zombie Shooter", score: 8320 },
    { rank: 5, player: "AdventureSeeker", game: "Mystery Island", score: 7980 }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-zone-arcade py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Arcade Zone</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Play exciting games and challenge your friends for the high score!</p>
          </div>
        </div>
      </section>

      <section className="mall-section">
        <div className="container mx-auto">
          <Tabs defaultValue="All Games">
            <TabsList className="w-full justify-start mb-8 overflow-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="All Games">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {games.map(game => (
                  <Card key={game.id} className="overflow-hidden zone-card">
                    {game.newGame && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                        New
                      </div>
                    )}
                    {game.featured && (
                      <div className="absolute top-2 right-2 bg-mall-primary text-white text-xs px-2 py-1 rounded-full z-10">
                        Featured
                      </div>
                    )}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={game.image} 
                        alt={game.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <span className="text-white text-xs font-medium px-2 py-1 rounded bg-black/50">
                          {game.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-lg mb-1">{game.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{game.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{game.popularity}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span>{game.players}</span>
                        </div>
                        <div>
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            game.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                            game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {game.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <Button className="w-full flex items-center justify-center gap-2">
                        Play Now <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {categories.slice(1).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {games
                    .filter(game => game.category === category)
                    .map(game => (
                      <Card key={game.id} className="overflow-hidden zone-card">
                        {game.newGame && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10">
                            New
                          </div>
                        )}
                        {game.featured && (
                          <div className="absolute top-2 right-2 bg-mall-primary text-white text-xs px-2 py-1 rounded-full z-10">
                            Featured
                          </div>
                        )}
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={game.image} 
                            alt={game.title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-5">
                          <h3 className="font-semibold text-lg mb-1">{game.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{game.description}</p>
                          
                          <div className="flex items-center text-sm text-gray-600 mb-4 gap-4">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              <span>{game.popularity}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 text-gray-400 mr-1" />
                              <span>{game.players}</span>
                            </div>
                            <div>
                              <span className={`px-2 py-0.5 rounded text-xs ${
                                game.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                                game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-red-100 text-red-800'
                              }`}>
                                {game.difficulty}
                              </span>
                            </div>
                          </div>
                          
                          <Button className="w-full">Play Now</Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Game */}
      <section className="mall-section bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Game: Turbo Racing</h2>
              <p className="text-gray-300 mb-6">Experience the thrill of high-speed racing across 12 different tracks. Challenge your friends in multiplayer mode or compete against AI opponents in this adrenaline-pumping racing game.</p>
              
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-3">Game Features:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>12 unique race tracks across different environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>20 customizable vehicles with unique abilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Multiplayer support for up to 4 players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Advanced AI opponents with adjustable difficulty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Realistic physics engine for immersive racing experience</span>
                  </li>
                </ul>
              </div>
              
              <Button size="lg" className="bg-mall-primary hover:bg-mall-secondary">
                Play Now
              </Button>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative h-64 w-full md:h-80 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560253787-9def66371d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Turbo Racing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="mall-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="section-heading flex items-center">
                <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                Top Players Leaderboard
              </h2>
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="py-3 px-4 text-left">Rank</th>
                          <th className="py-3 px-4 text-left">Player</th>
                          <th className="py-3 px-4 text-left">Game</th>
                          <th className="py-3 px-4 text-left">Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboard.map(entry => (
                          <tr key={entry.rank} className="border-b">
                            <td className="py-3 px-4">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${
                                entry.rank === 1 ? 'bg-yellow-500' : 
                                entry.rank === 2 ? 'bg-gray-400' : 
                                entry.rank === 3 ? 'bg-amber-700' : 'bg-gray-300'
                              }`}>
                                {entry.rank}
                              </div>
                            </td>
                            <td className="py-3 px-4 font-medium">{entry.player}</td>
                            <td className="py-3 px-4 text-gray-600">{entry.game}</td>
                            <td className="py-3 px-4 font-semibold">{entry.score.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mt-6">
                <Button variant="outline">View Full Leaderboard</Button>
              </div>
            </div>
            <div>
              <h2 className="section-heading">Arcade Membership</h2>
              <Card className="bg-gradient-to-br from-mall-primary to-purple-700 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">VIP Game Pass</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Unlimited access to all games</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Exclusive tournaments and prizes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Special badge on leaderboards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Early access to new games</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Monthly bonus credits</span>
                    </li>
                  </ul>
                  <div className="text-center mb-4">
                    <div className="text-sm line-through opacity-75">$19.99/month</div>
                    <div className="text-2xl font-bold">$14.99/month</div>
                  </div>
                  <Button size="lg" className="w-full bg-white text-mall-primary hover:bg-gray-100">
                    Get VIP Pass
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArcadePage;
