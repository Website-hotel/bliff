import { Listing } from './types';

export const LOCATIONS = [
  "Colombo",
  "Sri Jayawardenepura Kotte",
  "Dehiwala-Mount Lavinia",
  "Moratuwa",
  "Negombo",
  "Gampaha",
  "Panadura",
  "Homagama",
  "Maharagama",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Ratnapura",
  "Kurunegala",
  "Anuradhapura",
  "Polonnaruwa",
  "Trincomalee",
  "Batticaloa",
  "Ampara",
  "Kalmunai",
  "Jaffna",
  "Vavuniya"
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'The Sapphire Residence',
    price: 650000000,
    location: 'Colombo',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6500,
    type: 'House',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    description: 'An architectural masterpiece in the heart of Colombo. This colonial-inspired modern mansion features a rooftop infinity pool, smart home integration, and lush private gardens.',
    features: ['Swimming Pool', 'Smart Home', 'Garden', 'Garage', 'Rooftop Terrace'],
    isFeatured: true
  },
  {
    id: '2',
    title: 'Oceanfront Penthouse',
    price: 325000000,
    location: 'Colombo',
    bedrooms: 3,
    bathrooms: 4,
    sqft: 3200,
    type: 'Penthouse',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    description: 'Uninterrupted views of the Indian Ocean. This penthouse offers luxury living with bespoke interiors, private elevator access, and world-class amenities.',
    features: ['Ocean View', 'Gym', 'Concierge', 'Private Elevator'],
    isFeatured: true
  },
  {
    id: '3',
    title: 'Tropical Modern Villa',
    price: 210000000,
    location: 'Galle',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4500,
    type: 'Villa',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    description: 'Designed by a renowned architect, this villa inside the Fort blends indoor and outdoor living seamlessly. Features a central courtyard and sustainable materials.',
    features: ['Courtyard', 'Solar Power', 'Staff Quarters', 'Plunge Pool'],
    isFeatured: true
  },
  {
    id: '4',
    title: 'Havelock Heights Apartment',
    price: 145000000,
    location: 'Colombo',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: 'Apartment',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    description: 'Luxury apartment in a prestigious complex. Access to the clubhouse, 7-acre garden, and shopping mall.',
    features: ['Clubhouse Access', '24/7 Security', 'Shopping Mall', 'Gym'],
  },
  {
    id: '5',
    title: 'Hill Country Bungalow',
    price: 180000000,
    location: 'Nuwara Eliya',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 7000,
    type: 'House',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    description: 'A beautifully restored colonial bungalow preserving original teak flooring and high ceilings, surrounded by tea plantations.',
    features: ['Historic', 'Large Garden', 'Fireplace', 'Guest House'],
  },
  {
    id: '6',
    title: 'Skyline Luxury Suite',
    price: 185000000,
    location: 'Colombo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    type: 'Apartment',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    description: 'Minimalist city living with panoramic skyline views. Perfect for the modern executive.',
    features: ['City View', 'Infinity Pool', 'Valet Parking'],
  },
  {
    id: '7',
    title: 'Lakeside Sanctuary',
    price: 260000000,
    location: 'Sri Jayawardenepura Kotte',
    bedrooms: 5,
    bathrooms: 5,
    sqft: 5000,
    type: 'Villa',
    imageUrl: 'https://picsum.photos/800/600?random=7',
    description: 'Serene lakeside villa with a private dock. Escape the city noise while being minutes away from the parliament.',
    features: ['Lake View', 'Private Dock', 'Home Theater', 'BBQ Area'],
  },
  {
    id: '8',
    title: 'The Golden Mile Residence',
    price: 310000000,
    location: 'Dehiwala-Mount Lavinia',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4000,
    type: 'House',
    imageUrl: 'https://picsum.photos/800/600?random=8',
    description: 'Direct beach access property on the famous Golden Mile. Sunset views every evening.',
    features: ['Beach Access', 'Terrace', 'Jacuzzi'],
  },
  {
    id: '9',
    title: 'Urban Oasis',
    price: 175000000,
    location: 'Maharagama',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'House',
    imageUrl: 'https://picsum.photos/800/600?random=9',
    description: 'Contemporary architecture with vertical gardens and rain harvesting systems.',
    features: ['Eco-friendly', 'Vertical Garden', 'Modern Design'],
  },
  {
    id: '10',
    title: 'Lagoon Front Villa',
    price: 95000000,
    location: 'Negombo',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    type: 'Villa',
    imageUrl: 'https://picsum.photos/800/600?random=10',
    description: 'Relaxed living by the lagoon. Open plan design to capture the cool breeze.',
    features: ['Lagoon View', 'Boat Jetty', 'Open Plan'],
  },
  {
    id: '11',
    title: 'The Diplomat\'s Villa',
    price: 680000000,
    location: 'Colombo',
    bedrooms: 7,
    bathrooms: 8,
    sqft: 9000,
    type: 'House',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    description: 'Ultra-secure, expansive estate suitable for diplomatic residency or high-net-worth individuals.',
    features: ['High Security', 'Ballroom', 'Library', 'Commercial Kitchen'],
  },
  {
    id: '12',
    title: 'Marina Sky Home',
    price: 280000000,
    location: 'Colombo',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2500,
    type: 'Apartment',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    description: 'Overlooking the marina, watch yachts dock from your balcony. Future-ready living.',
    features: ['Marina View', 'Smart Community', 'Duty-Free Shopping'],
  },
  {
    id: '13',
    title: 'Green Grove Estate',
    price: 190000000,
    location: 'Gampaha',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: 'Villa',
    imageUrl: 'https://picsum.photos/800/600?random=13',
    description: 'Surrounded by coconut plantations, this estate offers unmatched privacy and nature views.',
    features: ['Nature View', 'Private Road', 'Security System'],
  },
  {
    id: '14',
    title: 'Sunset Boulevard Condo',
    price: 125000000,
    location: 'Colombo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'Apartment',
    imageUrl: 'https://picsum.photos/800/600?random=14',
    description: 'Prime location near major embassies and international schools.',
    features: ['Central Location', 'Pool', 'Gym'],
  },
  {
    id: '15',
    title: 'The Glass House',
    price: 410000000,
    location: 'Kandy',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5500,
    type: 'House',
    imageUrl: 'https://picsum.photos/800/600?random=15',
    description: 'Floor-to-ceiling glass walls characterize this avant-garde home overlooking the Hanthana mountain range.',
    features: ['Mountain View', 'Modern Art Architecture', 'Pool'],
  }
];

export const FAQS = [
  {
    question: "How do I schedule a viewing?",
    answer: "You can schedule a viewing directly through the listing page by clicking 'Book Viewing' or contacting us via WhatsApp."
  },
  {
    question: "What are the legal requirements for foreigners buying in Sri Lanka?",
    answer: "Foreigners can purchase apartments above the 4th floor freely. Land purchases may be subject to a 100% tax unless bought through a company structure. We advise consulting our legal team."
  },
  {
    question: "Do you offer property management services?",
    answer: "Yes, Bliff Real Estate offers comprehensive property management for investors, including maintenance and tenant relations."
  },
  {
    question: "Are prices negotiable?",
    answer: "Most listed prices are asking prices. We negotiate on your behalf to ensure fair market value."
  },
  {
    question: "How long does the buying process take?",
    answer: "Typically, from offer acceptance to deed transfer, the process takes between 4 to 8 weeks in Sri Lanka."
  }
];

export const CLIENT_STORIES = [
  {
    name: "James Sterling",
    role: "International Investor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Bliff made finding our penthouse in Port City effortless. Their understanding of the luxury market in Sri Lanka is unmatched."
  },
  {
    name: "Sarah Dias",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Professionalism from start to finish. They sold our colonial bungalow in record time and handled all the legal complexities."
  },
  {
    name: "Rajeev Kumar",
    role: "Tech Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "The curation of properties at Bliff is simply superior. I found a villa in Battaramulla that perfectly suits my minimalist taste."
  },
  {
    name: "Elena Rossi",
    role: "Diplomat",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "Relocating to Colombo was daunting until I met the Bliff team. They found us a secure, beautiful home in Cinnamon Gardens."
  },
  {
    name: "Dr. Perera",
    role: "Surgeon",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    quote: "Detailed, transparent, and discreet. Bliff Real Estate respects privacy and delivers results."
  },
  {
    name: "Michael Chen",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    quote: "As an architect, I appreciate their eye for design. They only list properties that have genuine architectural merit."
  },
  {
    name: "Aisha Malik",
    role: "Fashion Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "The viewing experience was seamless. The team knew exactly what I was looking for before I even articulated it."
  },
  {
    name: "David Silva",
    role: "CEO, LankaTech",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote: "Investment advice that actually pays off. My apartment in Havelock City has already appreciated significantly."
  },
  {
    name: "Nimali Fernando",
    role: "Artist",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    quote: "I found my sanctuary in Nawala thanks to Bliff. The garden space is exactly what I needed for my studio."
  }
];
