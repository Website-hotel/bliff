import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LISTINGS } from '../constants';
import { MapPin, Bed, Bath, Square, Check, ArrowLeft, Share2, Heart, MessageCircle, Info } from 'lucide-react';

const ListingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const listing = LISTINGS.find(l => l.id === id);
  const [showAiModal, setShowAiModal] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const handleAskAI = async () => {
    if (!aiQuestion.trim()) return;
    setIsLoadingAi(true);
    setTimeout(() => {
        const response = `Based on the details of ${listing?.title}, ${aiQuestion.includes('price') ? "this property represents excellent value given the current market trends in " + listing?.location : "this feature truly sets the property apart."}`;
        setAiResponse(response);
        setIsLoadingAi(false);
    }, 1500);
  };

  if (!listing) {
    return (
      <div className="pt-32 pb-20 text-center text-white h-screen flex flex-col items-center justify-center bg-charcoal">
        <h2 className="text-3xl font-serif mb-4">Property Not Found</h2>
        <Link to="/listings" className="text-champagne hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Listings
        </Link>
      </div>
    );
  }

  // Helper to format currency
  const formatLKR = (price: number) => {
    return new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="bg-charcoal min-h-screen">
      
      {/* Immersive Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <div className="absolute inset-0">
          <img 
            src={listing.imageUrl} 
            alt={listing.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-black/20 to-transparent"></div>
        </div>
        
        <div className="absolute top-24 left-4 md:left-8 z-20">
          <Link to="/listings" className="flex items-center gap-2 bg-black/40 backdrop-blur-md text-white px-5 py-2 rounded-full hover:bg-champagne hover:text-black transition-all duration-300 border border-white/10 hover:border-champagne">
            <ArrowLeft size={16} /> <span className="text-sm font-medium tracking-wide">Back</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
           <div className="max-w-7xl mx-auto">
             <span className="inline-block bg-champagne text-black text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded-sm">
               {listing.type}
             </span>
             <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 shadow-sm leading-tight">
               {listing.title}
             </h1>
             <div className="flex items-center text-gray-200 text-lg">
               <MapPin size={20} className="mr-2 text-champagne" />
               {listing.location}
             </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Info */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 glass-panel rounded-xl border border-white/10">
               <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
                     <Bed size={20} /> <span className="text-xs uppercase tracking-widest">Beds</span>
                  </div>
                  <span className="text-3xl font-serif text-white">{listing.bedrooms}</span>
               </div>
               <div className="text-center border-l border-white/10">
                  <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
                     <Bath size={20} /> <span className="text-xs uppercase tracking-widest">Baths</span>
                  </div>
                  <span className="text-3xl font-serif text-white">{listing.bathrooms}</span>
               </div>
               <div className="text-center border-l border-white/10">
                  <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
                     <Square size={20} /> <span className="text-xs uppercase tracking-widest">Sqft</span>
                  </div>
                  <span className="text-3xl font-serif text-white">{listing.sqft.toLocaleString()}</span>
               </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">About this Property</h3>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                {listing.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {listing.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/5">
                    <Check size={18} className="text-champagne mr-3" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant */}
            <div className="glass-panel p-8 rounded-xl border border-champagne/20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/10 blur-[50px] rounded-full"></div>
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="bg-champagne p-2 rounded-lg text-black">
                     <MessageCircle size={24} />
                   </div>
                   <h3 className="text-xl font-serif text-white">Bliff Intelligence</h3>
                 </div>
                 <p className="text-gray-400 mb-6">Have specific questions about {listing.title}? Our AI specialist is ready to answer.</p>
                 
                 {!showAiModal ? (
                   <button 
                     onClick={() => setShowAiModal(true)}
                     className="px-6 py-3 bg-white/10 border border-white/20 hover:border-champagne hover:text-champagne text-white rounded-sm transition-all w-full md:w-auto uppercase tracking-wider text-sm font-bold"
                   >
                     Activate Assistant
                   </button>
                 ) : (
                   <div className="animate-fade-in space-y-4">
                     <div className="flex gap-2">
                       <input 
                         type="text" 
                         className="flex-1 bg-black/40 border border-white/20 rounded-sm p-3 text-white focus:border-champagne outline-none"
                         placeholder="e.g., How is the neighborhood security?"
                         value={aiQuestion}
                         onChange={(e) => setAiQuestion(e.target.value)}
                       />
                       <button 
                         onClick={handleAskAI}
                         className="bg-champagne text-black px-6 rounded-sm font-bold hover:bg-white transition-colors"
                         disabled={isLoadingAi}
                       >
                         {isLoadingAi ? '...' : 'Ask'}
                       </button>
                     </div>
                     {aiResponse && (
                       <div className="p-4 bg-champagne/10 border border-champagne/20 rounded-sm">
                         <p className="text-gray-200 text-sm leading-relaxed"><span className="text-champagne font-bold mr-2">Answer:</span> {aiResponse}</p>
                       </div>
                     )}
                   </div>
                 )}
               </div>
            </div>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-1/3">
             <div className="sticky top-24 space-y-6">
                
                {/* Price Card */}
                <div className="glass-panel p-6 rounded-xl border border-white/10">
                   <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">Price</p>
                   <div className="text-3xl md:text-4xl font-serif text-white font-bold mb-6 text-wrap break-words">
                     {formatLKR(listing.price)}
                   </div>
                   
                   <div className="space-y-3">
                     <button className="w-full bg-champagne text-black font-bold py-4 rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                       Schedule Viewing
                     </button>
                     <button className="w-full bg-transparent border border-white/20 text-white font-bold py-4 rounded-sm hover:bg-white/5 transition-colors uppercase tracking-widest text-sm">
                       Request Floor Plan
                     </button>
                   </div>
                </div>

                {/* Contact Form */}
                <div className="glass-panel p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-serif text-white mb-4">Interested?</h3>
                  <form className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full bg-black/30 border border-white/10 rounded-sm p-3 text-white focus:border-champagne outline-none text-sm" />
                    <input type="email" placeholder="Email" className="w-full bg-black/30 border border-white/10 rounded-sm p-3 text-white focus:border-champagne outline-none text-sm" />
                    <input type="tel" placeholder="Phone" className="w-full bg-black/30 border border-white/10 rounded-sm p-3 text-white focus:border-champagne outline-none text-sm" />
                    <textarea placeholder="Message" rows={3} className="w-full bg-black/30 border border-white/10 rounded-sm p-3 text-white focus:border-champagne outline-none text-sm"></textarea>
                    
                    <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-sm transition-colors text-sm uppercase tracking-wider">
                      Send Message
                    </button>
                  </form>
                </div>
                
                <div className="flex gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 glass-panel rounded-lg hover:bg-white/10 transition-colors text-gray-300">
                      <Share2 size={18} /> <span className="text-sm">Share</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 glass-panel rounded-lg hover:bg-white/10 transition-colors text-gray-300">
                      <Heart size={18} /> <span className="text-sm">Save</span>
                    </button>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
