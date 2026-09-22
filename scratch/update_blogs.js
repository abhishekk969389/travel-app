const fs = require('fs');
const path = require('path');

const travelJsonPath = path.join(__dirname, '..', 'data', 'travel.json');
const travelData = JSON.parse(fs.readFileSync(travelJsonPath, 'utf8'));

const posts = travelData.TravelIndustries.sections.Blog.variants.TravelBlog1.posts;

const blogDetailsMap = {
  "1": {
    subtitle: "Unleash your inner explorer with these thrilling destination guides packed with mountain peaks, raging rapids, and wilderness trails.",
    author: "By Rohan Mehta",
    featuredImage: "/blog1.jpg",
    brushImage: "/brush.png",
    brushText: "Thrill Seekers\nWild Trails",
    locationTag: {
      title: "Swiss Alps & Patagonia",
      subtitle: "Epic outdoor wilderness and high altitude adventures"
    },
    introParagraph: "For true adventure enthusiasts, a vacation is more than just relaxing by the pool. It's about conquering mountain peaks, navigating wild rivers, and exploring remote landscapes that push your limits.",
    section1: {
      title: "Why Choose Adventure Travel?",
      content: "Adventure travel connects you deeply with nature and tests your limits. Stepping out of your comfort zone creates unforgettable memories, builds resilience, and gives you a fresh perspective on the world."
    },
    section2: {
      title: "Top Adventure Spots around the World",
      places: [
        {
          id: "p1",
          name: "Queenstown, New Zealand",
          description: "The adventure capital of the world offering bungee jumping, jet boating, and skydiving.",
          image: "https://images.unsplash.com/photo-1507699622108-4be3aac6900f?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Patagonia, Chile & Argentina",
          description: "Dramatic granite peaks, ancient glaciers, and world-class trekking trails.",
          image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Interlaken, Switzerland",
          description: "Canyoning, paragliding, and alpine trails set against majestic glaciers.",
          image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Banff National Park, Canada",
          description: "Pristine turquoise lakes, rugged hiking trails, and abundant wildlife.",
          image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "Life is either a daring adventure or nothing at all. Broaden your horizons and step into the wild.",
      brushText: "Explore More\nFear Less"
    },
    section3: {
      title: "Essential Tips for Adventure Travel",
      tips: [
        "Invest in proper high-quality outdoor gear and sturdy boots",
        "Acclimatize properly when traveling to high altitude destinations",
        "Always check local weather forecasts and trail conditions before setting off",
        "Hire certified local guides for technical routes and unfamiliar terrain",
        "Carry a comprehensive first-aid kit and satellite communication device",
        "Leave no trace behind to protect delicate wilderness environments"
      ],
      conclusion: "Whether you are climbing soaring peaks or paddling through wild river currents, adventure travel brings unmatched joy. Start planning your next expedition today."
    }
  },
  "2": {
    subtitle: "Discover the Garden State's hidden beaches, vibrant boardwalks, rich history, and scenic state parks.",
    author: "By Sarah Jenkins",
    featuredImage: "/blog2.jpg",
    brushImage: "/brush.png",
    brushText: "Garden State\nCoast & Culture",
    locationTag: {
      title: "Cape May & Jersey Shore",
      subtitle: "Historic Victorian architecture and sun-kissed beaches"
    },
    introParagraph: "Often overshadowed by neighboring New York, New Jersey is a diverse state boasting beautiful coastlines, historic towns, world-class dining, and lush state parks.",
    section1: {
      title: "What Makes New Jersey Special?",
      content: "From the iconic boardwalks of the Jersey Shore to the peaceful hiking trails of the Delaware Water Gap, New Jersey offers a surprising variety of attractions for every type of traveler."
    },
    section2: {
      title: "Must-Visit Highlights in New Jersey",
      places: [
        {
          id: "p1",
          name: "Cape May Historic District",
          description: "Charming Victorian homes, seaside views, and boutique shopping.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Delaware Water Gap",
          description: "Breathtaking river views, kayaking, and miles of Appalachian hiking trails.",
          image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Liberty State Park",
          description: "Panoramas of the Manhattan skyline and Statue of Liberty ferry access.",
          image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Asbury Park Boardwalk",
          description: "Vibrant music scene, iconic street art, and beachfront cafes.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "New Jersey proves that great travel discoveries are often right around the corner.",
      brushText: "Explore NJ\nSummer Vibes"
    },
    section3: {
      title: "Travel Tips for New Jersey",
      tips: [
        "Visit during summer for beach activities or autumn for gorgeous fall foliage",
        "Try authentic Jersey diners and famous boardwalk pizza",
        "Rent a car to easily travel between coastal and mountain regions",
        "Book Cape May accommodations well in advance for peak season",
        "Explore state parks for peaceful hiking away from urban crowds",
        "Check out live music venues in historic Asbury Park"
      ],
      conclusion: "New Jersey is packed with charm, history, and natural beauty. Give the Garden State a spot on your travel wishlist!"
    }
  },
  "3": {
    subtitle: "Plan your dream trip to Japan during Sakura season with optimal dates, viewing spots, and cultural tips.",
    author: "By Kenji Takahashi",
    featuredImage: "/blog3.jpg",
    brushImage: "/brush.png",
    brushText: "Sakura Season\nBlossom Memories",
    locationTag: {
      title: "Kyoto & Tokyo Hanami Spots",
      subtitle: "A magical pink canopy over ancient temples and rivers"
    },
    introParagraph: "Experiencing cherry blossom season (Sakura) in Japan is a bucket-list dream for travelers around the world. Watching pink petals drift over traditional temples is pure magic.",
    section1: {
      title: "When is Sakura Season at its Peak?",
      content: "Cherry blossoms typically bloom between late March and early April in Tokyo, Kyoto, and Osaka. Southern regions bloom earlier in March, while northern Hokkaido blooms in May."
    },
    section2: {
      title: "Top Sakura Viewing Locations",
      places: [
        {
          id: "p1",
          name: "Meguro River, Tokyo",
          description: "Hundreds of cherry trees forming a glowing pink tunnel illuminated at night.",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Philosopher's Path, Kyoto",
          description: "A stone path along a canal lined with cherry trees and ancient shrines.",
          image: "https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Mount Fuji & Chureito Pagoda",
          description: "The ultimate postcard view of Fuji framed by delicate pink cherry blossoms.",
          image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Hirosaki Castle Park, Aomori",
          description: "Famous for cherry blossom moats covered in floating pink petals.",
          image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "To watch the sakura bloom is to appreciate the fleeting, delicate beauty of life itself.",
      brushText: "Hanami Magic\nJapan Travel"
    },
    section3: {
      title: "Tips for Hanami (Blossom Viewing)",
      tips: [
        "Check the official Japan Meteorological Agency cherry blossom forecast",
        "Reserve JR Rail Passes and hotels 3 to 6 months in advance",
        "Join local Hanami picnics under the trees with bento boxes",
        "Visit popular spots early in the morning to beat the crowds",
        "Dress in layers as spring weather can be crisp and chilly",
        "Respect park rules and avoid touching or pulling blossom branches"
      ],
      conclusion: "Japan in spring is an unforgettable experience. Plan ahead to witness the country transformed into a sea of pink blossoms."
    }
  },
  "4": {
    subtitle: "Escape the crowds and discover secluded coves, turquoise waters, and untouched coastlines in the Mediterranean.",
    author: "By Elena Rostova",
    featuredImage: "/santorini_mission.jpg",
    brushImage: "/brush.png",
    brushText: "Crystal Waters\nSecluded Coves",
    locationTag: {
      title: "Milos & Zakynthos",
      subtitle: "Hidden coastal paradises of Greece and Croatia"
    },
    introParagraph: "While famous beaches attract thousands, Greece and Croatia hide secret coastal havens with crystal-clear waters and serene solitude.",
    section1: {
      title: "The Magic of Mediterranean Coves",
      content: "Exploring hidden coves lets you experience authentic coastal life, quiet swimming spots, and untouched natural landscapes away from tourist hotspots."
    },
    section2: {
      title: "Top Secluded Beaches to Discover",
      places: [
        {
          id: "p1",
          name: "Navagio Beach, Zakynthos",
          description: "Dramatic limestone cliffs framing electric blue waters and historic shipwreck.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Stiniva Beach, Vis Island",
          description: "A hidden beach concealed behind a narrow cliff opening in Croatia.",
          image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Sarakiniko Beach, Milos",
          description: "Surreal lunar landscapes of bone-white volcanic rock against turquoise sea.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Sakarun Beach, Dugi Otok",
          description: "White sand and shallow crystalline waters surrounded by pine forests.",
          image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "The ocean holds secrets meant only for those who dare to wander off the beaten track.",
      brushText: "Secret Shores\nIsland Life"
    },
    section3: {
      title: "Tips for Island Hopping & Coastal Exploration",
      tips: [
        "Rent a private small boat or kayak to access inaccessible coves",
        "Carry plenty of fresh water and snacks as remote beaches lack facilities",
        "Pack water shoes to navigate pebble beaches and rocky shores comfortably",
        "Start early in the morning to enjoy quiet solitude before boat tours arrive",
        "Respect marine life and avoid leaving any plastic or trash behind",
        "Check ferry schedules in advance when traveling between islands"
      ],
      conclusion: "The Mediterranean's hidden gems offer pure tranquil bliss. Set sail and discover your own private slice of paradise."
    }
  },
  "5": {
    subtitle: "Master smart train travel, budget accommodation, local dining, and free attractions for an affordable European trip.",
    author: "By Marcus Vance",
    featuredImage: "/whychoose_fjord.jpg",
    brushImage: "/brush.png",
    brushText: "Smart Travel\nBudget Bliss",
    locationTag: {
      title: "Prague, Budapest & Lisbon",
      subtitle: "Charming cities that offer incredible value for money"
    },
    introParagraph: "Traveling Europe doesn't have to break the bank. With strategic planning, you can explore historic cities and rich cultures on a sensible budget.",
    section1: {
      title: "The Art of Smart Budget Travel",
      content: "Budget travel isn't about suffering; it's about making smart choices that prioritize rich cultural experiences over unnecessary luxury add-ons."
    },
    section2: {
      title: "Best Value Destinations in Europe",
      places: [
        {
          id: "p1",
          name: "Prague, Czech Republic",
          description: "Fairytale architecture, affordable beer, and rich Bohemian history.",
          image: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Budapest, Hungary",
          description: "Thermal bath houses, historic ruin bars, and stunning Danube views.",
          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Lisbon, Portugal",
          description: "Sun-drenched coastal views, delicious pastel de nata, and vintage trams.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Krakow, Poland",
          description: "Cobblestone streets, royal castles, and budget-friendly traditional food.",
          image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "Travel is the only thing you buy that makes you richer.",
      brushText: "Travel Smart\nSave More"
    },
    section3: {
      title: "Top Money-Saving Tips for Europe",
      tips: [
        "Use regional train passes or night buses like FlixBus for intercity transit",
        "Stay in boutique hostels or private apartment rentals slightly outside city centers",
        "Eat lunch specials ('menu del dia') instead of expensive dinner seatings",
        "Take advantage of free walking tours and museum free-admission days",
        "Travel during shoulder seasons (April-May & September-October)",
        "Use local public transport cards rather than taxis or tourist buses"
      ],
      conclusion: "With these practical strategies, your European adventure will be full of comfort and unforgettable memories without draining your savings."
    }
  },
  "6": {
    subtitle: "Stay safe, warm, and prepared in high altitudes with our comprehensive Himalayan gear guide.",
    author: "By Tenzing Norbu",
    featuredImage: "/Travelphotos.jpg",
    brushImage: "/brush.png",
    brushText: "High Altitudes\nPeak Trails",
    locationTag: {
      title: "Annapurna & Everest Region",
      subtitle: "Majestic mountain passes and high alpine wilderness"
    },
    introParagraph: "Trekking in the Himalayas is a life-changing adventure. Proper packing and gear preparation are essential for staying safe, warm, and comfortable.",
    section1: {
      title: "Why Gear Preparation Matters",
      content: "Extreme weather fluctuations in high altitudes mean your clothing layers and gear are your primary shield against cold, wind, and rain."
    },
    section2: {
      title: "Must-Have Alpine Gear Items",
      places: [
        {
          id: "p1",
          name: "Thermal Layering System",
          description: "Moisture-wicking base layers, insulating fleece, and a heavy down jacket.",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Sturdy Trekking Boots",
          description: "Waterproof high-ankle boots with deep tread for rocky mountain terrain.",
          image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Sleeping Bag & Mat",
          description: "Sub-zero rated down sleeping bag for freezing mountain nights.",
          image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Trekking Poles & Packs",
          description: "Ergonomic trekking poles to reduce knee strain on steep alpine descents.",
          image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "It is not the mountain we conquer, but ourselves.",
      brushText: "Climb Higher\nReach Further"
    },
    section3: {
      title: "Crucial Himalayas Trekking Tips",
      tips: [
        "Break in your trekking boots several weeks before your trip to prevent blisters",
        "Pack water purification tablets or a UV purifier for safe hydration",
        "Layer clothing to easily adjust to shifting temperatures throughout the day",
        "Keep essential electronics and spare batteries warm inside your sleeping bag",
        "Carry altitude sickness medication and descend if symptoms persist",
        "Pack light and respect weight limits for porters and pack animals"
      ],
      conclusion: "Preparedness breeds confidence on the trail. Gear up right and embrace the awe-inspiring beauty of the Himalayas."
    }
  },
  "7": {
    subtitle: "Embark on a mouthwatering journey through night markets, aromatic street stalls, and iconic food hubs.",
    author: "By Priya Sharma",
    featuredImage: "/about1.jpg",
    brushImage: "/brush.png",
    brushText: "Street Flavors\nAromatic Spices",
    locationTag: {
      title: "Bangkok, Penang & Hanoi",
      subtitle: "World famous night markets and sizzling street stalls"
    },
    introParagraph: "Southeast Asia is a paradise for food lovers. Vibrant night markets and bustling street carts offer rich, authentic flavors passed down through generations.",
    section1: {
      title: "The Heart of Asian Street Food Culture",
      content: "Eating at street stalls is an immersive cultural experience where you witness fresh ingredients transformed into culinary masterpieces right in front of you."
    },
    section2: {
      title: "Iconic Street Food Capitals",
      places: [
        {
          id: "p1",
          name: "Bangkok, Thailand",
          description: "Crispy Pad Thai, aromatic Tom Yum, and mango sticky rice from night markets.",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Penang, Malaysia",
          description: "Char Kway Teow, Penang Laksa, and multicultural street food delights.",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Hanoi, Vietnam",
          description: "Steaming bowls of Pho, crispy Banh Mi baguettes, and egg coffee.",
          image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Singapore Hawker Stalls",
          description: "Famous hawker centers serving Hainanese chicken rice and spicy chili crab.",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "To know a culture, you must taste its food.",
      brushText: "Tasty Bites\nFood Trails"
    },
    section3: {
      title: "Street Food Safety & Tasting Tips",
      tips: [
        "Eat at busy stalls with high customer turnover for guaranteed freshness",
        "Watch food being cooked fresh at high heat right in front of you",
        "Drink bottled or filtered water and avoid unsealed ice",
        "Carry hand sanitizer and small tissue packs when visiting outdoor markets",
        "Be adventurous and try local regional specialties",
        "Ask locals for their personal favorite hidden street food spots"
      ],
      conclusion: "Southeast Asia's culinary scene will awaken your senses. Follow your nose and savor every delicious bite."
    }
  },
  "8": {
    subtitle: "Gain the confidence to explore the world on your own with proven safety, navigation, and social tips.",
    author: "By Chloe Bennett",
    featuredImage: "/about2.jpg",
    brushImage: "/brush.png",
    brushText: "Solo Journey\nFearless Exploration",
    locationTag: {
      title: "Global Solo Destinations",
      subtitle: "Empowering independent travelers worldwide"
    },
    introParagraph: "Embarking on your first solo trip can feel daunting, but it is one of the most rewarding and empowering experiences you can ever have.",
    section1: {
      title: "The Freedom of Solo Exploration",
      content: "Traveling solo gives you total freedom over your itinerary, helps build self-reliance, and opens doors to genuine connections with locals and fellow travelers."
    },
    section2: {
      title: "Top Destinations for First-Time Solo Travelers",
      places: [
        {
          id: "p1",
          name: "Kyoto, Japan",
          description: "Extremely safe, welcoming, easy navigation, and incredible culture.",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Reykjavik, Iceland",
          description: "Low crime rates, friendly locals, and breathtaking natural wonders.",
          image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Chiang Mai, Thailand",
          description: "Affordable, vibrant digital nomad community, and rich heritage.",
          image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Melbourne, Australia",
          description: "Walkable city, great coffee culture, and social hostel vibe.",
          image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "The person who goes alone can start today; but he who travels with another must wait till that other is ready.",
      brushText: "Go Solo\nDiscover You"
    },
    section3: {
      title: "Essential Solo Safety Tips",
      tips: [
        "Keep friends or family updated with your daily itinerary and location",
        "Arrive at new destinations during daylight hours for easier orientation",
        "Store digital copies of important travel documents in cloud storage",
        "Trust your instincts and step away from uncomfortable situations",
        "Join group walking tours or stay in social hostels to easily meet people",
        "Keep emergency cash hidden separately from your main wallet"
      ],
      conclusion: "Solo travel will build confidence you never knew you had. Take the leap and discover the world on your own terms."
    }
  },
  "9": {
    subtitle: "Minimize your environmental footprint and support local communities with responsible travel practices.",
    author: "By David Miller",
    featuredImage: "/whychooseus.jpg",
    brushImage: "/brush.png",
    brushText: "Green Travel\nMindful Footprints",
    locationTag: {
      title: "Costa Rica & Eco Reserves",
      subtitle: "Pioneering sustainable tourism and wildlife conservation"
    },
    introParagraph: "As global tourism grows, protecting natural habitats and supporting local communities has never been more vital.",
    section1: {
      title: "What is Sustainable Tourism?",
      content: "Sustainable travel means making conscious choices that preserve environment, respect local traditions, and contribute positively to host economies."
    },
    section2: {
      title: "Leading Sustainable Destinations",
      places: [
        {
          id: "p1",
          name: "Costa Rica Rainforests",
          description: "Renewable energy pioneer with extensive protected rainforest reserves.",
          image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Palau Marine Sanctuaries",
          description: "First nation to mandate an eco-pledge stamped directly in visitor passports.",
          image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Ljubljana, Slovenia",
          description: "Lush green capital and commitment to zero-waste tourism initiatives.",
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Bhutan Eco Valleys",
          description: "Carbon-negative country prioritizing high-value, low-impact tourism.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "Take only memories, leave only footprints.",
      brushText: "Care For Earth\nTravel Green"
    },
    section3: {
      title: "Practical Eco-Friendly Travel Habits",
      tips: [
        "Carry a reusable water bottle, cloth shopping tote, and metal straw",
        "Choose eco-certified lodges that utilize renewable energy and waste reduction",
        "Support local artisans and family-owned restaurants rather than chain corporations",
        "Use public transport, rent bicycles, or walk whenever possible",
        "Never touch or disturb wildlife or support unethical animal attractions",
        "Conserve water and electricity in hotel rooms just like you would at home"
      ],
      conclusion: "Small changes in our travel habits make a big difference. Together, we can ensure future generations enjoy our planet's beauty."
    }
  },
  "10": {
    subtitle: "Sit back, relax, and marvel at panoramic landscapes through wide windows on these legendary rail adventures.",
    author: "By Julian Vance",
    featuredImage: "/blog1.jpg",
    brushImage: "/brush.png",
    brushText: "Luxury Rail\nScenic Tracks",
    locationTag: {
      title: "Glacier Express & Rocky Mountaineer",
      subtitle: "Unrivaled vistas through majestic mountain passes"
    },
    introParagraph: "Train travel offers a classic, romantic way to view the world's most dramatic landscapes in serene luxury.",
    section1: {
      title: "The Romance of Rail Travel",
      content: "Swapping hectic airport terminals for spacious train cars allows you to relax, enjoy fine dining, and watch breathtaking scenery unfold."
    },
    section2: {
      title: "World-Renowned Scenic Rail Routes",
      places: [
        {
          id: "p1",
          name: "Glacier Express, Switzerland",
          description: "Panoramic windows winding past snow-capped Alps, deep gorges, and mountain villages.",
          image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p2",
          name: "Rocky Mountaineer, Canada",
          description: "Glass-domed train passing through the heart of the Canadian Rockies.",
          image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p3",
          name: "Bernina Express, Alps",
          description: "Crossing 196 bridges and 55 tunnels through alpine glaciers.",
          image: "https://images.unsplash.com/photo-1507699622108-4be3aac6900f?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "p4",
          name: "Orient Express, Europe",
          description: "Legendary art-deco luxury train journey across Europe's historic cities.",
          image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    quote: {
      text: "The journey of a thousand miles begins with a single step, best taken on a train.",
      brushText: "All Aboard\nScenic Views"
    },
    section3: {
      title: "Tips for Booking Scenic Train Journeys",
      tips: [
        "Book tickets early for high-demand routes like the Glacier Express or Orient Express",
        "Reserve seats on the side of the train with the best scenic views",
        "Pack a light daypack with camera gear and chargers easily accessible",
        "Opt for glass-domed or panoramic cars for unobstructed landscape photography",
        "Combine train journeys with overnight stays in charming mountain towns",
        "Check seasonal schedules as mountain trains operate on special winter/summer timetables"
      ],
      conclusion: "Traveling by train brings back the magic of the journey itself. All aboard for an unforgettable adventure!"
    }
  }
};

posts.forEach(post => {
  if (blogDetailsMap[post.id]) {
    post.details = blogDetailsMap[post.id];
  }
});

fs.writeFileSync(travelJsonPath, JSON.stringify(travelData, null, 2), 'utf8');
console.log('Successfully updated travel.json with blog post details!');
