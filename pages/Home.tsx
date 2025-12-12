import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import ListingCard from '../components/ListingCard';
import { LISTINGS, CLIENT_STORIES } from '../constants';

const Home: React.FC = () => {
  const featuredListings = LISTINGS.filter(l => l.isFeatured).slice(0, 3);

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-2a4d04774c13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Villa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-charcoal"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 animate-slide-up">
          <span className="text-champagne tracking-[0.3em] uppercase text-sm font-bold mb-4 block">Colombo, Sri Lanka</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Timeless Luxury, <br />
            <span className="italic text-gray-300">Modern Living</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Discover the most exclusive properties in Colombo with Bliff Real Estate. Where elegance meets exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings" className="px-8 py-4 bg-champagne text-black font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300 rounded-sm">
              Explore Properties
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors duration-300 rounded-sm">
              Contact an Agent
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: PHILOSOPHY */}
      <section className="py-24 bg-charcoal relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-champagne/10 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-champagne/50"></div>
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Interior Design" 
              className="w-full h-auto rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-champagne/50"></div>
          </div>
          <div>
            <span className="text-champagne font-bold tracking-widest text-sm uppercase mb-2 block">Our Philosophy</span>
            <h2 className="text-4xl font-serif text-white mb-6">Curating the Exceptional</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              At Bliff, we believe a home is more than structure; it is a lifestyle. Our portfolio is meticulously curated to ensure every property represents the pinnacle of design, comfort, and investment value in Sri Lanka's capital.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-3xl font-serif text-white mb-1">15+</h4>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-white mb-1">10B+</h4>
                <p className="text-gray-500 text-sm">LKR Property Sold</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-champagne font-bold tracking-widest text-sm uppercase mb-2 block">Exclusive Selection</span>
              <h2 className="text-4xl font-serif text-white">Featured Properties</h2>
            </div>
            <Link to="/listings" className="hidden md:flex items-center text-white hover:text-champagne transition-colors">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/listings" className="inline-flex items-center text-white hover:text-champagne transition-colors border-b border-champagne pb-1">
              View All Properties <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-champagne/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-champagne font-bold tracking-widest text-sm uppercase mb-2 block">Why Choose Us</span>
          <h2 className="text-4xl font-serif text-white">Beyond the Transaction</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Shield size={32} />, title: "Secure Legal Process", desc: "Our in-house legal team ensures every deed is clear and every transaction is compliant with Sri Lankan property law." },
            { icon: <Star size={32} />, title: "Luxury Valuation", desc: "Expert market analysis to ensure you get the true value for your premium asset, whether buying or selling." },
            { icon: <Clock size={32} />, title: "Concierge Service", desc: "From private viewings to after-sales support, our team handles every detail, respecting your time and privacy." }
          ].map((service, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-xl text-center group hover:bg-white/5 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 text-champagne group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: PROCESS */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <span className="text-champagne font-bold tracking-widest text-sm uppercase mb-2 block">The Journey</span>
               <h2 className="text-4xl font-serif text-white mb-8">Seamless Acquisition</h2>
               
               <div className="space-y-8">
                 {[
                   { step: "01", title: "Consultation", desc: "We define your requirements and lifestyle needs." },
                   { step: "02", title: "Curation", desc: "We present a shortlisted portfolio of matching properties." },
                   { step: "03", title: "Viewing", desc: "Private tours arranged at your convenience." },
                   { step: "04", title: "Acquisition", desc: "Negotiation and paperwork handled by experts." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-6">
                     <span className="text-3xl font-serif text-champagne/30 font-bold">{item.step}</span>
                     <div>
                       <h4 className="text-xl text-white mb-2">{item.title}</h4>
                       <p className="text-gray-400 text-sm">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             <div className="relative h-[600px] rounded-lg overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Meeting" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS (INFINITE SCROLL) */}
      <section className="py-24 bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-champagne font-bold tracking-widest text-sm uppercase mb-2 block">Client Stories</span>
          <h2 className="text-4xl font-serif text-white">Trusted by the Best</h2>
        </div>
        
        <div className="relative w-full">
           <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-charcoal to-transparent"></div>
           <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-charcoal to-transparent"></div>
           
           <div className="flex w-max animate-scroll hover:animation-play-state-paused">
             {/* Duplicate the array to create the seamless loop effect */}
             {[...CLIENT_STORIES, ...CLIENT_STORIES].map((story, index) => (
               <div key={index} className="w-[350px] md:w-[450px] mx-4 flex-shrink-0">
                 <div className="glass-panel p-8 rounded-xl text-left border border-white/5 h-full relative group hover:border-champagne/30 transition-colors">
                   <div className="absolute top-6 right-6 text-champagne opacity-10 text-6xl font-serif leading-none">"</div>
                   <p className="text-gray-300 italic mb-6 text-lg relative z-10">
                     "{story.quote}"
                   </p>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden border border-white/10">
                       <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <h5 className="text-white font-bold group-hover:text-champagne transition-colors">{story.name}</h5>
                       <span className="text-gray-500 text-xs uppercase">{story.role}</span>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-32 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Home" 
            className="w-full h-full object-cover blur-sm opacity-30"
          />
           <div className="absolute inset-0 bg-charcoal/80"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Find Your Sanctuary</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Join the exclusive list of homeowners in Colombo's most prestigious addresses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <input 
               type="email" 
               placeholder="Enter your email address" 
               className="px-6 py-4 w-full sm:w-80 bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-champagne backdrop-blur-md placeholder-gray-400"
             />
             <button className="px-8 py-4 bg-champagne text-black font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300 rounded-sm w-full sm:w-auto">
               Subscribe
             </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
