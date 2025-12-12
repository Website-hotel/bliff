import React, { useState, useMemo } from 'react';
import { LISTINGS, LOCATIONS } from '../constants';
import ListingCard from '../components/ListingCard';
import { Filter, X, Search, ChevronDown } from 'lucide-react';
import { FilterState } from '../types';

const Listings: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 5000000,
    maxPrice: 700000000,
    type: 'All',
    bedrooms: 'Any',
    location: 'All',
  });

  const filteredListings = useMemo(() => {
    return LISTINGS.filter(listing => {
      const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            listing.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filters.type === 'All' || listing.type === filters.type;
      const matchesPrice = listing.price >= filters.minPrice && listing.price <= filters.maxPrice;
      const matchesLocation = filters.location === 'All' || listing.location === filters.location;
      
      let matchesBedrooms = true;
      if (filters.bedrooms !== 'Any') {
        if (filters.bedrooms === '4+') {
          matchesBedrooms = listing.bedrooms >= 4;
        } else {
          matchesBedrooms = listing.bedrooms === parseInt(filters.bedrooms);
        }
      }

      return matchesSearch && matchesType && matchesPrice && matchesLocation && matchesBedrooms;
    });
  }, [filters, searchTerm]);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000000) return (price / 1000000000).toFixed(1) + 'B';
    return (price / 1000000).toFixed(0) + 'M';
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-champagne font-bold tracking-widest text-sm uppercase mb-2 block">Our Collection</span>
          <h1 className="text-5xl font-serif text-white mb-4">Discover Luxury</h1>
          <p className="text-gray-400">Curated properties in Sri Lanka's finest locations.</p>
        </div>

        {/* Advanced Search Bar */}
        <div className="glass-panel p-2 rounded-lg mb-8 max-w-5xl mx-auto border border-white/10 relative z-20">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text"
                placeholder="Search by property name, location..."
                className="w-full bg-transparent md:bg-white/5 rounded-md py-4 pl-12 pr-4 text-white focus:outline-none focus:bg-white/10 transition-colors placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-md transition-all duration-300 font-bold uppercase tracking-wide text-sm ${showFilters ? 'bg-champagne text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-white/5 text-white hover:bg-white/10'}`}
            >
              <Filter size={16} />
              <span>Filters</span>
              {showFilters ? <X size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
          
          {/* Expanded Filters */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showFilters ? 'max-h-[600px] opacity-100 mt-4 pb-2' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pt-4 border-t border-white/5">
              
              {/* Type Filter */}
              <div className="space-y-2">
                <label className="text-xs text-champagne uppercase font-bold tracking-widest">Property Type</label>
                <div className="relative">
                  <select 
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-sm p-3 text-white focus:border-champagne outline-none appearance-none cursor-pointer"
                  >
                    <option value="All">All Types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>

              {/* Location Filter */}
              <div className="space-y-2">
                <label className="text-xs text-champagne uppercase font-bold tracking-widest">Location</label>
                <div className="relative">
                  <select 
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-sm p-3 text-white focus:border-champagne outline-none appearance-none cursor-pointer"
                  >
                    <option value="All">All Locations</option>
                    {LOCATIONS.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div className="space-y-2">
                <label className="text-xs text-champagne uppercase font-bold tracking-widest">Bedrooms</label>
                <div className="flex bg-black/40 rounded-sm p-1 border border-white/10">
                  {['Any', '1', '2', '3', '4+'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleFilterChange('bedrooms', opt)}
                      className={`flex-1 py-2 text-sm rounded-sm transition-all ${filters.bedrooms === opt ? 'bg-champagne text-black font-bold shadow-md' : 'text-gray-400 hover:text-white'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-xs text-champagne uppercase font-bold tracking-widest">Max Price</label>
                  <span className="text-xs text-white font-mono">LKR {formatPrice(filters.maxPrice)}</span>
                </div>
                <input 
                  type="range" 
                  min="5000000" 
                  max="700000000" 
                  step="5000000"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                  className="w-full accent-champagne h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>5M</span>
                  <span>700M</span>
                </div>
              </div>

            </div>
            
            <div className="mt-6 text-center">
              <button 
                onClick={() => setFilters({minPrice: 5000000, maxPrice: 700000000, type: 'All', bedrooms: 'Any', location: 'All'})}
                className="text-gray-400 hover:text-champagne text-xs uppercase tracking-widest underline decoration-transparent hover:decoration-champagne transition-all"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 text-gray-400 text-sm">
           Showing <span className="text-white font-bold">{filteredListings.length}</span> properties
        </div>

        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-panel rounded-lg border border-white/5">
            <h3 className="text-2xl font-serif text-white mb-2">No properties found</h3>
            <p className="text-gray-400">Adjust your criteria to explore more options.</p>
            <button 
              onClick={() => setFilters({minPrice: 5000000, maxPrice: 700000000, type: 'All', bedrooms: 'Any', location: 'All'})}
              className="mt-6 px-6 py-2 border border-champagne text-champagne hover:bg-champagne hover:text-black transition-colors rounded-sm uppercase tracking-wider text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;
