import React from 'react';
import { Listing } from '../types';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl glass-panel hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col h-full border border-white/10 hover:border-champagne/30">
      <div className="relative h-64 overflow-hidden">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-champagne text-xs font-bold uppercase tracking-wider border border-champagne/20">
          {listing.type}
        </div>
        {listing.isFeatured && (
           <div className="absolute top-4 left-4 bg-champagne/90 backdrop-blur-sm px-3 py-1 rounded-full text-black text-xs font-bold uppercase tracking-wider">
           Featured
         </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-serif text-white group-hover:text-champagne transition-colors duration-300 line-clamp-1">
            {listing.title}
          </h3>
        </div>
        
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <MapPin size={14} className="mr-1 text-champagne" />
          {listing.location}
        </div>
        
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10 border-b mb-4">
          <div className="flex flex-col items-center text-center">
            <Bed size={18} className="text-gray-400 mb-1" />
            <span className="text-sm text-gray-300">{listing.bedrooms} Beds</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-white/10 border-r">
            <Bath size={18} className="text-gray-400 mb-1" />
            <span className="text-sm text-gray-300">{listing.bathrooms} Baths</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Square size={18} className="text-gray-400 mb-1" />
            <span className="text-sm text-gray-300">{listing.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-serif text-white tracking-wide">
            LKR {(listing.price / 1000000).toFixed(1)}M
          </span>
          <Link 
            to={`/listings/${listing.id}`}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-champagne hover:text-black flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
